"use client";

import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { FileDialog } from "@/components/file-dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  UncontrolledFormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Zoom } from "@/components/zoom-image";
import { catchError } from "@/lib/helpers";
import { type FileWithPreview } from "@/lib/types";
import { isArrayOfFile } from "@/lib/utils";
import {
  productSchema,
  type T_ProductCreateSchema,
} from "@/server/api/schemas/product.schema";
import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { PRODUCT_STATUS } from "@prisma/client";
import { generateReactHelpers } from "@uploadthing/react/hooks";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const CreateProductForm = () => {
  const { useUploadThing } = generateReactHelpers<OurFileRouter>();
  const categories = api.category.categoryFindAllRoute.useQuery();

  const createProduct = api.product.productCreateRoute.useMutation({
    onSuccess: (data) => {
      toast.success(data.message);
      form.reset();
      setFiles(null);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const form = useForm<T_ProductCreateSchema>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "First",
      categoryId: "",
      companyId: "clrv481670000if53xxz00nc0",
      crossedPrice: 1200,
      description: "",
      hasOffer: false,
      images: [],
      model: "",
      price: 1200,
      quantity: 12,
      sellingPrice: 2000,
      status: PRODUCT_STATUS.ACTIVE,
      wholesaleCashPrice: 800,
      wholesaleCreditPrice: 1000,
    },
  });

  const { isUploading, startUpload } = useUploadThing("productImage");
  const [files, setFiles] = useState<FileWithPreview[] | null>(null);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const onSubmit: SubmitHandler<T_ProductCreateSchema> = (data) => {
    try {
      if (isArrayOfFile(data.images)) {
        setIsImageUploading(true);
        toast.promise(
          startUpload(data.images)
            .then((res) => {
              const formattedImages = res?.map((image) => ({
                id: image.key,
                name: image.key.split("_")[1] ?? image.key,
                url: image.url,
              }));
              return formattedImages ?? null;
            })
            .then((images) => {
              return createProduct.mutate({
                ...data,
                images,
              });
            })
            .finally(() => {
              setIsImageUploading(false);
            }),
          {
            loading: "Uploading images...",
            error: "Error uploading images.",
          },
        );
      } else {
        createProduct.mutate({
          ...data,
          images: null,
        });
      }
    } catch (err) {
      catchError(err);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full max-w-2xl gap-5"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Type product name here." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type product description here."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Category</FormLabel>
              <Select
                value={field.value}
                onValueChange={(value: typeof field.value) =>
                  field.onChange(value)
                }
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={field.value || "Select a category"}
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.data?.data.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col items-start gap-6 sm:flex-row">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    inputMode="numeric"
                    placeholder="Type product price here"
                    value={Number.isNaN(field.value) ? "" : field.value}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Inventory</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    inputMode="numeric"
                    placeholder="Type product inventory here"
                    value={Number.isNaN(field.value) ? "" : field.value}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormItem className="flex w-full flex-col gap-1.5">
          <FormLabel>Images</FormLabel>
          {files?.length ? (
            <div className="flex items-center gap-2">
              {files.map((file, i) => (
                <Zoom key={i}>
                  <Image
                    src={file.preview}
                    alt={file.name}
                    className="size-20 shrink-0 rounded-md object-cover object-center"
                    width={80}
                    height={80}
                  />
                </Zoom>
              ))}
            </div>
          ) : null}
          <FormControl>
            <FileDialog
              setValue={form.setValue}
              name="images"
              maxFiles={3}
              maxSize={1024 * 1024 * 4}
              files={files}
              setFiles={setFiles}
              isUploading={isUploading}
              disabled={createProduct.isLoading || isImageUploading}
            />
          </FormControl>
          <UncontrolledFormMessage
            message={form.formState.errors.images?.message}
          />
        </FormItem>
        <Button
          type="submit"
          className="w-fit"
          disabled={createProduct.isLoading || isImageUploading}
        >
          {(createProduct.isLoading || isImageUploading) && (
            <Loader2 className="mr-2 size-4 animate-spin" aria-hidden="true" />
          )}
          Add Product
          <span className="sr-only">Add Product</span>
        </Button>
      </form>
    </Form>
  );
};

export default CreateProductForm;
