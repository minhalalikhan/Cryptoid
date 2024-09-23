import Navbar from "../components/Navbar";
import Solana from '../assets/solana.svg'

type Props = {};

function Wallet({ }: Props) {
  const Transactions = [1, 2, 3, 4, 5, 6]
  return (
    <div className="flex flex-col w-full h-full z-0">
      <Navbar />
      <div className="flex flex-col  w-full h-fit overflow-y-auto min-h-[calc(100%-90px)]    items-center">
        <div className="flex flex-col  max-w-[1440px] min-h-full h-fit w-full  px-2 pt-5 pb-2 overflow-y-auto ">
          {/* Header */ }
          <div className=" w-full flex flex-col  min-h-[150px] items-center gap-1">
            <h3 className="font-extrabold text-4xl text-white">$ 0.00</h3>
            <h5 className="font-extrabold text-2xl text-gray-500">0.00%</h5>
          </div>
          {/* Transaction history  */ }
          <div className=" w-full flex flex-col  h-fit bg-purple-100] ">
            <div className="w-full   overflow-y-auto flex flex-col items-center gap-2 ">

              { Transactions.map((item, i) => {
                return (
                  <div key={ i } className="cursor-pointer rounded-xl w-full h-[80px] hover:bg-gray-800 p-2 flex flex-row">
                    <div className="flex w-[50px] h-full flex-col items-center justify-center">
                      <img src={ Solana } width={ 40 } />
                    </div>
                    <div className="flex flex-1 h-full flex-col px-3 justify-center">


                      <p className="font-bold text-xl text-white">Ethereum </p>
                      <p className="font-medium text-lg text-gray-500">{ item } ETH</p>
                    </div>
                    <div className="flex w-[50px] h-full flex-col justify-center">
                      <p className="font-bold text-xl text-white">$0.00</p>
                      <p className="font-medium text-lg text-red-500">-0.24%</p>
                    </div>


                  </div>
                )
              }) }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
