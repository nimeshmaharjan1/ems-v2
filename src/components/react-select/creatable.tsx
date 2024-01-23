"use client";
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type ComponentProps } from "react";
import CreatableSelect from "react-select/creatable";

const CreatableReactSelect: React.FC<
  ComponentProps<typeof CreatableSelect>
> = ({ ...rest }) => (
  <CreatableSelect
    classNames={{
      control: () => {
        return ` border border-input rounded-md py-[0.1rem] px-2 mt-2 text-sm`;
      },
      menuList: () => {
        return "border rounded bg-background";
      },
      container: () => {
        return "bg-background rounded-md bg-transparent";
      },
      option: (state) => {
        return `hover:bg-secondary hover:text-secondary-foreground focus:bg-secondary focus:text-secondary-foreground px-2 py-1 ${
          state.isFocused && "bg-secondary text-secondary-foreground"
        }`;
      },
      valueContainer: () => "flex gap-2 p-2",

      multiValue: () =>
        "bg-secondary text-secondary-foreground rounded-md px-2 ",
      singleValue: () => `px-1 text-destructive`,
      indicatorsContainer: () => "px-2",
      placeholder: () => "px-0 opacity-80 ",
      noOptionsMessage: () => "p-2",
    }}
    unstyled
    instanceId={"react-select-creatable"}
    noOptionsMessage={() => <p className="text-sm">No data found.</p>}
    {...rest}
  />
);

export default CreatableReactSelect;
