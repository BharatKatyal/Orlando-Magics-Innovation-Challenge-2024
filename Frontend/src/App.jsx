import SeatImage from "./assets/SeatFirstPerson.jpg";

function SeatCard({ Title, Description, Image }) {
  return (
    <div className="shadow grid grid-cols-7 rounded-lg gap-x-5 p-5 mt-3">
      <div className="col-span-2 flex items-center">
        <img
          className="rounded-full w-32 aspect-square"
          src={Image}
          alt={Title}
        />
      </div>
      <div className="col-span-5">
        <div className="flex">
          <h3 className="text-xl font-bold">{Title}</h3>
          <p>$109.13</p>
        </div>
        <p>{Description}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="mt-5 mx-5">
      <div className="rounded-lg shadow-lg h-[30vh] bg-cover bg-center bg-[url('https://cdn.britannica.com/95/252395-050-170800BE/Michigan-Stadium-University-of-Michigan-Ann-Arbor-The-Big-House-2022.jpg')]"></div>
      <div>
        <h1 className="text-2xl font-bold pt-5 pb-2">Seats</h1>
        <div className="overflow-y-scroll h-[60vh]">
          <SeatCard Image={SeatImage} Title="G3" Description="Court Side" />
          <SeatCard Image={SeatImage} Title="R2" Description="Terrace" />
          <SeatCard Image={SeatImage} Title="Q4" Description="Court Side" />
          <SeatCard Image={SeatImage} Title="C3" Description="Terrance" />
        </div>
      </div>
    </div>
  );
}
