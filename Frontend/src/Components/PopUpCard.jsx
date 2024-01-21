import ApplePayButton from "../assets/apple-pay.png";
import Check from "../assets/check_icon.svg";
import generateRandomPrice from "./generateRandomPrice";

export function PopUpCardHidden({ Description, Image, Title }) {
  return (
    <div className="fixed inset-0 flex z-50 bg-black bg-opacity-50">
      <div className="mx-5 h-[100vh] bg-magic_blue_light rounded-lg animate-up-to-down translate-y-[10%]">
        <img src={Image} className="rounded-t-lg h-60 w-screen" />
        <div className="mt-5 mx-5">
          <div className="flex">
            <h3 className="text-2xl font-bold">{Title}</h3>
            <p className="text-white bg-magic_blue w-fit px-2 rounded-lg ml-auto pt-1">
              {Description}
            </p>
          </div>
          <h3 className="text-2xl font-bold text-center mt-[14vh]">
            Payment Successful
          </h3>
          <div className="flex justify-center mt-5">
            <img src={Check} className="w-12" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PopUpCard({ Description, Image, Title, onPay, Price }) {
  return (
    <div className="fixed inset-0 flex z-50 bg-black bg-opacity-50">
      <div className="mx-5 h-[100vh] bg-magic_blue_light rounded-lg animate-down-to-up translate-y-[10%]">
        <img src={Image} className="rounded-t-lg h-60 w-screen" />
        <div className="mt-5 mx-5">
          <div className="flex">
            <h3 className="text-2xl font-bold">{Title}</h3>
            <p className="text-white bg-magic_blue w-fit px-2 rounded-lg ml-auto pt-1">
              {Description}
            </p>
          </div>
          <div className="flex justify-center">
            <input
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              placeholder="1000.00"
              className="text-4xl w-42 h-14 text-center text-white bg-magic_blue font-bold mt-[5vh] rounded-lg outline-none"
            />
          </div>
          <p className="text-center opacity-30">{`Suggested ${Price}`}</p>
          <img
            onClick={() => onPay()}
            className="mt-[24vh] w-64 mx-auto hover:opacity-80 cursor-pointer"
            src={ApplePayButton}
          />
        </div>
      </div>
    </div>
  );
}
