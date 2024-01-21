import { PopUpCard, PopUpCardHidden } from "./Components/PopUpCard";
import SeatImage from "./assets/SeatFirstPerson.jpg";
import MagicLogo from "./assets/magic-logo.png";
import { useState } from "react";
import seats from "./assets/seats_sample.json";
import zones from "./assets/seat_zones.json";
import generateRandomPrice from "./Components/generateRandomPrice";

export default function App() {
  const [popup, setPopup] = useState(null);

  function SeatCard({ Title, Description, Image, Price }) {
    return (
      <div
        onClick={() =>
          setPopup(
            <PopUpCard
              Title={Title}
              Description={Description}
              Image={Image}
              Price={Price}
              onPay={async () => {
                setPopup(
                  <PopUpCardHidden
                    Title={Title}
                    Description={Description}
                    Image={Image}
                  />
                );

                await new Promise((r) => setTimeout(r, 1300));

                setPopup(null);
              }}
            />
          )
        }
        className="shadow grid grid-cols-7 rounded-lg gap-x-5 p-5 mt-3 bg-magic_blue_light"
      >
        <div className="col-span-2 flex items-center">
          <img
            className="rounded-full w-32 aspect-square border-2 border-magic_blue_lighter"
            src={Image}
            alt={Title}
          />
        </div>
        <div className="col-span-5">
          <div className="flex">
            <h3 className="text-xl font-bold">{Title}</h3>
            <p className="ml-auto text-sm text-gray-500">{Price}</p>
          </div>
          <p className="text-sm text-white bg-magic_blue w-fit px-2 rounded-lg mt-3">
            {Description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 mx-5">
      {popup}
      <img src={MagicLogo} className="w-12 mx-auto mb-3" />
      <div className="rounded-lg shadow-lg h-[30vh] bg-cover bg-center bg-[url('./assets/Stadium.jpeg')]"></div>
      <div>
        <h1 className="text-2xl font-bold pt-5 pb-2">Seats</h1>
        <div className="overflow-y-scroll h-[56vh]">
          {seats.map((seat) => {
            const zone = zones[Math.floor(Math.random() * zones.length)];
            return (
              <SeatCard
                key={Date.now() + Math.random()}
                Price={generateRandomPrice(zone)}
                Title={seat.title}
                Description={zone}
                Image={seat.image != null ? seat.image : SeatImage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
