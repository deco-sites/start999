interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
  age? : number;
  raca : string
}

export default function Section({name, age, raca} : Props) {
  return <div>
    Hello {name}
  </div>
   }