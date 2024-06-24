interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
  age? : number;
  raca? : string;
  
}

export default function Section({name = "Nome", age = 27, raca = "vira lata"} : Props) {
  return <div>
    Hello {name}, sua raça é {raca}
  </div>
   }