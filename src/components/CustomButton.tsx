import { Button, ButtonProps } from "@/components/ui/button"; // Testing
import styles from "./button.module.css";
import clsx from "clsx";

export function CustomButton({ className, ...props }: ButtonProps) {
  return <Button className={clsx(styles.customButton, className)} {...props} />;
}
