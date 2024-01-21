import { PopUpCard, PopUpCardHidden } from "./Components/PopUpCard";
import MagicLogo from "./assets/magic-logo.png";
import { useEffect, useState } from "react";
// import seats from "./assets/seats_sample.json";
// import zones from "./assets/seat_zones.json";
import generateRandomPrice from "./Components/generateRandomPrice";
import Promenade from "./assets/Seats/Promenade.jpeg";
import Loge from "./assets/Seats/Loge.jpeg";
import Terrace from "./assets/Seats/Terrace.jpeg";
import Club from "./assets/Seats/Club.jpeg";
import Ultimate from "./assets/Seats/Ultimate.jpeg";

import apiGetSeats from "./Components/apiGetSeats";

const Images = {
  Promenade: Promenade,
  Loge: Loge,
  Terrace: Terrace,
  Club: Club,
  Ultimate: Ultimate,
};

export default function App() {
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
            <p className="ml-auto text-sm text-gray-500 tracking-wide">
              {Price}
            </p>
          </div>
          <p className="text-sm text-white bg-magic_blue w-fit px-2 rounded-lg mt-3">
            {Description}
          </p>
        </div>
      </div>
    );
  }

  const [seats, setSeats] = useState([]);

  const [popup, setPopup] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await apiGetSeats();
      setSeats(res);
    })();
  }, []);

  return (
    <div className="mt-4 mx-5">
      {popup}
      <img src={MagicLogo} className="w-12 mx-auto mb-3" />
      <div className="rounded-lg shadow-lg h-[30vh] bg-cover bg-center bg-[url('./assets/Stadium.jpeg')]"></div>
      <div>
        <h1 className="text-2xl font-bold pt-5 pb-2">Seats</h1>
        <div className="overflow-y-scroll h-[56vh]">
          {seats.map((seat) => {
            return (
              <SeatCard
                key={Date.now() + Math.random()}
                Price={generateRandomPrice(seat.zone)}
                Title={seat.id}
                Description={seat.zone}
                Image={Images[seat.zone]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
