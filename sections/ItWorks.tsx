import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import Icon from "site/components/ui/Icon.tsx";
import HelloWorld from "site/components/ui/HelloWorld.tsx";

export interface Props {
  /**
   * @format rich-text
   * @description The description of name.
   * @default It Works!
   */
  name?: string;

  count?: number;
}

export default function Section({ name = "It Works!", count = 0 }: Props) {
  return (
    <div class="flex justify-center items-center  h-[500px]">
    </div>
  );
}
