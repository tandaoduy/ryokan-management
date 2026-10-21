import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
export type FieldVariant = "default" | "filled";
export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & { label?: string; hint?: string; error?: string; variant?: FieldVariant };
export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string; hint?: string; error?: string; variant?: FieldVariant };
export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & { label?: string; hint?: string; error?: string; variant?: FieldVariant; children: ReactNode };
export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & { label: ReactNode; description?: string };
