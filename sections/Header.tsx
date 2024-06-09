import HelloWorld from "site/components/ui/HelloWorld.tsx";

export type Props = {
    name : string
}

export default function Section({ name = "Header"}: Props) {
    return (
      <div class="flex justify-center items-center  h-[500px]">
        <HelloWorld/>
      </div>
    );
  }

  