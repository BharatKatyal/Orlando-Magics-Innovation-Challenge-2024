import SeatImage from "../assets/SeatFirstPerson.jpg";
import ApplePayButton from "../assets/apple-pay.png";

export default function () {
  return (
    <div className="fixed inset-0 flex z-50 bg-black bg-opacity-50">
      <div className="mx-5 h-[100vh] bg-magic_blue_light rounded-lg animate-down-to-up translate-y-[10%]">
        <img src={SeatImage} className="rounded-t-lg" />
        <div className="mt-5 mx-5">
          <div className="flex">
            <h3 className="text-2xl font-bold">G3</h3>
            <p className="text-white bg-magic_blue w-fit px-2 rounded-lg ml-auto pt-1">
              Terrace
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
          <p className="text-center opacity-30">Suggested: 109.23</p>
          <img className="mt-[24vh] w-64 mx-auto" src={ApplePayButton} />
        </div>
      </div>
    </div>
  );
}
