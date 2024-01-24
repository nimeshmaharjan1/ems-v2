/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { DateTime } from "luxon";
import { toast } from "sonner";
import { z } from "zod";

export const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

export const formatDate = (date: Date) => {
  const newDate = new Date(date);
  return DateTime.fromJSDate(newDate).toLocaleString(DateTime.DATE_MED);
};
export const formatTime = (date: Date) => {
  const newDate = new Date(date);
  return DateTime.fromJSDate(newDate).toLocaleString(DateTime.TIME_SIMPLE);
};

export const formatDateWithTime = (date: Date) => {
  const newDate = new Date(date);
  return DateTime.fromJSDate(newDate).toLocaleString(DateTime.DATETIME_MED);
};

export const getDateWithWeekDay = (date: Date) => {
  const newDate = new Date(date);
  return DateTime.fromJSDate(newDate).toLocaleString(
    DateTime.DATE_MED_WITH_WEEKDAY,
  );
};

export const getSlashDate = (date: Date) => {
  const newDate = new Date(date);
  return DateTime.fromJSDate(newDate).toLocaleString(DateTime.DATE_SHORT);
};

export function formatPrice(
  price: number | string,
  currency: "USD" | "EUR" | "GBP" | "BDT" | "NPR",
  notation: "compact" | "engineering" | "scientific" | "standard" = "standard",
) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    notation,
  }).format(Number(price));
}

export const downloadFile = (base64String: string, fileName: string) => {
  // Convert base64 string to Uint8Array
  const binaryString = window.atob(base64String);
  const binaryData = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    binaryData[i] = binaryString.charCodeAt(i);
  }

  // Create a Blob from the Uint8Array with MIME type set to "application/pdf"
  const blob = new Blob([binaryData], { type: "application/pdf" });

  // Create a URL for the Blob object
  const url = URL.createObjectURL(blob);

  // Create a link element with download attribute and click it programmatically
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Release the URL object
  URL.revokeObjectURL(url);
};

export const rupeesSign = "रू";

export const getPercentageDifference = (
  sellingPrice: number,
  crossedPrice: number,
) => Math.round(((crossedPrice - sellingPrice) / sellingPrice) * 100);

export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

export function unslugify(str: string) {
  return str.replace(/-/g, " ");
}

export const getVariantOptionName = ({
  color,
  size,
}: {
  color?: string;
  size?: string;
}) => {
  if (color && !size) {
    return color;
  }
  if (!color && size) {
    return size;
  }
  return `${color}/${size}`;
};

export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}
export function toTitleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase(),
  );
}

export function catchError(err: unknown) {
  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message;
    });
    return toast(errors.join("\n"));
  } else if (err instanceof Error) {
    return toast(err.message);
  } else {
    return toast("Something went wrong, please try again later.");
  }
}
