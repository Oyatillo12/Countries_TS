import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { CountriesType } from "./CountreisList";
import { ChangeEvent, useContext, useEffect } from "react";
import { Context } from "../context/CountyContext";

const Header = () => {
  const { setCountries, countries, refresh, setRefresh, setLoading } = useContext(Context)
  const liked: CountriesType[] = useSelector((state: RootState) => state.likedArray.liked);
  const saved: CountriesType[] = useSelector((state: RootState) => state.savedArray.saved);

  // search input change event
  function handleChangeSearch(e: ChangeEvent<HTMLInputElement>): void {
    const value: string = e.target.value.toLowerCase();
    if (value === "") {
      setRefresh(!refresh);
      return;
    } else {
      setLoading(true);
      setTimeout(() => {
        setCountries(countries.filter((item: CountriesType) => item.name.toLowerCase().includes(value)))
        setLoading(false);
      }, 800)
    }
  }



  // refresh state
  useEffect(() => {
    if (!saved.length && !liked.length) {
      setRefresh(!refresh);
    }
  }, [saved, liked]);

  // likes click events
  function handleClickedLikes(): void {
    if (liked.length) {
      setCountries(liked)
    }
    else {
      setRefresh(!refresh);
      alert("No countries have been liked");
    }
  }

  // saves click events
  function handleSavesCLicked(): void {
    if (saved.length) {
      setCountries(saved)
    }
    else {
      setRefresh(!refresh);
      alert("No countries have been saved");
    }
  }

  return (
    <header className="p-4 flex items-center justify-between rounded-b-lg w-full max-w-[1140px] mx-auto bg-white shadow-lg">
      <h2 className="lg:text-[30px] text-[25px] opacity-80 font-bold ">Hi Learn about Countries</h2>
      <div className="flex items-center space-x-6">
        <input onChange={handleChangeSearch} autoComplete="off" className="text-[16px] p-2 w-full max-w-[300px] outline-none rounded-lg border border-gray-300" placeholder="Search countries" type="text" name="search" id="search" />
        <button onClick={handleClickedLikes} className="relative z-50 hover:bg-[#00000022] duration-300 rounded-full w-full max-w-[45px] h-[45px]">Likes <span className="w-[20px] z-10 h-[20px] top-[0px] right-[-5px] text-white bg-red-500 rounded-full flex items-center justify-center absolute">{liked.length}</span></button>
        <button onClick={handleSavesCLicked} className="relative block z-50 hover:bg-[#00000022] duration-300 rounded-full w-full max-w-[45px] h-[45px]">Saves <span className="w-[20px] z-10 h-[20px] top-[0px] right-[-5px] text-white bg-red-500 rounded-full flex items-center justify-center absolute">{saved.length}</span></button>
      </div>
    </header>
  )
}

export default Header
