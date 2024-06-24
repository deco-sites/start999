interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
  age : number;
}

export default function Header({ name = "Capy" }: Props) {
  return <div>Hello {name}</div>
}