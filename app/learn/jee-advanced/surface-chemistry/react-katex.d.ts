declare module "react-katex" {
  import type { ComponentType, ReactNode } from "react";

  export type ReactKatexProps = {
    math?: string;
    children?: string;
    errorColor?: string;
    renderError?: (error: Error) => ReactNode;
  };

  export const InlineMath: ComponentType<ReactKatexProps>;
  export const BlockMath: ComponentType<ReactKatexProps>;
}
