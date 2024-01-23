"use client";
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { EditorContent, useEditor, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Italic, List, Minus, Strikethrough } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TipTap({ field }: any) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: field.value,
    onUpdate: (props) => {
      field.onChange(props.editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert focus:outline-none  prose-sm rounded p-4 pt-0 prose-strong:font-bold prose-hr:mb-3 ",
      },
    },
  });
  if (!editor) return null;
  return (
    <div className="rounded-md border">
      <TipTapActions editor={editor}></TipTapActions>
      <EditorContent
        name={field.name}
        // onChange={field.onChange}
        // value={field.value}
        editor={editor}
      />
    </div>
  );
}

const TipTapActions: React.FC<{ editor: Editor }> = ({ editor }) => {
  return (
    <section className="menu mb-3 flex flex-wrap gap-3 border-b p-2">
      <Button
        type="button"
        size={"sm-icon"}
        variant={editor.isActive("bulletList") ? "default" : "outline"}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="h-4 w-4"></List>
      </Button>
      <Button
        type="button"
        size={"sm-icon"}
        variant={
          editor.isActive("heading", { level: 1 }) ? "default" : "outline"
        }
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        H1
      </Button>
      <Button
        type="button"
        size={"sm-icon"}
        variant={
          editor.isActive("heading", { level: 2 }) ? "default" : "outline"
        }
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        H2
      </Button>
      <Button
        type="button"
        size={"sm-icon"}
        variant={
          editor.isActive("heading", { level: 3 }) ? "default" : "outline"
        }
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        H3
      </Button>

      <Button
        type="button"
        size={"sm-icon"}
        variant={"outline"}
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <Minus className="h-4 w-4"></Minus>
      </Button>
      <Button
        type="button"
        size={"sm-icon"}
        onClick={() => editor.chain().focus().toggleBold().run()}
        variant={editor.isActive("bold") ? "default" : "outline"}
      >
        <Bold className="h-4 w-4"></Bold>
      </Button>
      <Button
        type="button"
        size={"sm-icon"}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        variant={editor.isActive("italic") ? "default" : "outline"}
      >
        <Italic className="h-4 w-4"></Italic>
      </Button>
      <Button
        type="button"
        size={"sm-icon"}
        variant={editor.isActive("strike") ? "default" : "outline"}
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className="h-4 w-4"></Strikethrough>
      </Button>
    </section>
  );
};
