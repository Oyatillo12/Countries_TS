import React, { createContext, ReactNode, useEffect, useState } from "react";
import { CountriesType } from "../components/CountreisList";
import axios from "axios";

interface ContextType {
    countries: CountriesType[],
    setCountries: React.Dispatch<React.SetStateAction<CountriesType[]>>,
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>,
    refresh: boolean
}

export const Context = createContext<ContextType>({
    countries: [],
    setCountries: () => { },
    loading: true,
    setLoading: () => { },
    refresh: true,
    setRefresh: () => { }
})


const CountriesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [countries, setCountries] = useState<CountriesType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [refresh, setRefresh] = useState<boolean>(false);

    useEffect(() => {
        async function getCountries(): Promise<void> {
            try {
                const res: any = await axios.get("https://restcountries.com/v3.1/all");
                setCountries(res.data.slice(0, 20).map((item: any) => {
                    const data: CountriesType = {
                        name: item.name.common,
                        capital: item.capital[0],
                        flag: item.flag,
                        population: item.population,
                        img: item.flags.png
                    }
                    return data;
                }))

            }
            catch (error) {
                console.log(error);
            };
        }
        getCountries();
    }, [refresh])

    return (
        <Context.Provider value={{ countries, setCountries, loading, setLoading, refresh, setRefresh }}>
            {children}
        </Context.Provider>
    )

}

export default CountriesProvider;