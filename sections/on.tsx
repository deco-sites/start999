import { useEffect } from 'preact/hooks';

interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

const MigrationBanner = ({ file } : Props) => {
  console.log(file)
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .background-arrows {
        background: url("https://t3.ftcdn.net/jpg/00/86/56/12/360_F_86561234_8HJdzg2iBlPap18K38mbyetKfdw1oNrm.jpg") no-repeat center;
        background-size: cover;
      }
    `;
    document.head.append(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  
  return (
    <div className="background-arrows flex flex-col items-center justify-center text-center h-screen bg-blue-900 text-white">
      <img src={file} />
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
        UMA MIGRAÇÃO VTEX IO DESCOMPLICADA,
      </h1>
      <h2 className="text-xl md:text-2xl lg:text-3xl mb-8">
        COM GO-LIVE EM ATÉ 30 DIAS
      </h2>
      <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full">
        QUERO MIGRAR AGORA
      </button>
    </div>
  );
};

export default MigrationBanner;
