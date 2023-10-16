import { Sheet, SheetProps } from "tamagui";

export function Filter({ ...rest }: SheetProps) {
  return (
    <Sheet {...rest}>
      <Sheet.Overlay />
      <Sheet.Handle />
      <Sheet.Frame>{/* ...inner contents */}</Sheet.Frame>
    </Sheet>
  );
}
