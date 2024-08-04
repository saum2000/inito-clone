// brands
import thisWeek from "./assets/brands/thisWeek.svg";
import entrepreneur from "./assets/brands/entrepreneur.svg";
import forbes from "./assets/brands/forbes.svg";
import bloomberg from "./assets/brands/bloomberg.svg";
import washington from "./assets/brands/washington.svg";

export default function Brands(){
    return <div className="px-2">
    <p className="uppercase font-bold lg:text-lg text-xs mt-4 text-[#c4c4c4] text-center">
      As Seen on
    </p>

    <div className="flex lg:flex-row flex-wrap items-center justify-center lg:gap-[50px] gap-10 my-4">
      {[bloomberg, forbes, thisWeek, washington, entrepreneur].map(
        (item) => (
          <img src={item} alt={item} className="brands" />
        )
      )}
    </div>
  </div>
}