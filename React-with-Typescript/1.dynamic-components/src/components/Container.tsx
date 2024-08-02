//*** POLYMORPHIC COMPONENTS ***
import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
}

export default Container;
