import { useContext } from "react";
import CountryItem from "./CountryItem";
import { Context } from "../context/CountyContext";

export interface CountriesType {
    name: string;
    population: number;
    capital: string;
    img:string;
    flag: string;
};

const CountreisList = ():any => {
  const {countries, loading} = useContext(Context)


  return (
    <div className="max-w-[1140px] w-full mt-10 mx-auto">
      <ul className="flex flex-wrap justify-between gap-y-16">
        {loading ? <li className="mx-auto text-center mt-[100px]"><span className="loader"></span></li> : countries.length ? countries.map((item:CountriesType, index:number) => <CountryItem key={index} item={item}/>) : <li className="!text-center mx-auto text-[25px] font-bold mt-[40px]">No Countries</li>}
      </ul>
    </div>
  )
}

export default CountreisList
