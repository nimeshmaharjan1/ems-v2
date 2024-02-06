import { type FileWithPath } from "react-dropzone";

export interface StoredFile {
  id: string;
  name: string;
  url: string;
}

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon: string;
  label?: string;
  description?: string;
}
export type FileWithPreview = FileWithPath & {
  preview: string;
};
export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export interface SearchParams {
  [key: string]: string | string[] | undefined;
}
export interface DataTableSearchableColumn<TData> {
  id: keyof TData;
  title: string;
}
export interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}
export interface DataTableFilterableColumn<TData>
  extends DataTableSearchableColumn<TData> {
  options: Option[];
}
