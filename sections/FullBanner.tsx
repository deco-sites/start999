interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
  age? : number;
  raca? : string;
}

export default function Section({name = "Nome", age = 27, raca = "vira lata"} : Props) {
  return <div class="p-2.5 bg-[#000038] text-white no-underline m-2.5 font-bold rounded-sm shadow-[-30px_2px_100px_79px_#0a0c4e] mt-[100px] h-fit mx-auto text-center hover:bg-[#12f8afcc] transition-all duration-300">
      QUERO MIGRAR AGORA    
      </div>

   }