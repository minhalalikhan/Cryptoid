import Navbar from "../components/Navbar";

type Props = {};

function Wallet({}: Props) {
  return (
    <div className="flex flex-col w-full h-full ">
      <Navbar />
      <div className="flex flex-col w-full flex-1 justify-center items-center">
        <div className="flex flex-col h-full max-w-[1440px] w-full bg-slate-500 p-10">
          {/* Header  */}
          <div>Wallet</div>
          {/* Transaction history */}
          <div className=" w-full flex flex-col flex-[2]"></div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
