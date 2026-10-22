import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

export type FieldVariant = "default" | "filled" | "underline";
export type FieldSize = "sm" | "md" | "lg";
export type FieldProps = { label?: string; hint?: string; error?: string; variant?: FieldVariant; size?: FieldSize };
export type InputFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & FieldProps;
export type TextFieldProps = InputFieldProps;
export type SearchInputProps = InputFieldProps;
export type NumberInputProps = Omit<InputFieldProps, "type" | "inputMode">;
export type PhoneInputProps = Omit<InputFieldProps, "type" | "inputMode">;
export type TimePickerProps = Omit<InputFieldProps, "type">;
export type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> & FieldProps;
export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> & FieldProps & { children: ReactNode };
export type CheckableVariant = "default" | "card";
export type CheckableProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & { label: ReactNode; description?: string; variant?: CheckableVariant };
export type CheckboxProps = CheckableProps;
export type RadioProps = CheckableProps;
export type ToggleSize = "sm" | "md" | "lg";
export type ToggleProps = CheckableProps & { size?: ToggleSize };
