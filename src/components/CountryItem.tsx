import React from 'react'
import { CountriesType } from './CountreisList'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { addLikes } from '../store/LikeSlice'
import { addSaves } from '../store/SavedSlice'

const CountryItem: React.FC<{ item: CountriesType }> = ({ item }) => {
    const dispatch: AppDispatch = useDispatch();
    const liked: CountriesType[] = useSelector((state: RootState) => state.likedArray.liked);
    const saved: CountriesType[] = useSelector((state: RootState) => state.savedArray.saved);

    const isLiked: boolean = liked.indexOf(item) !== -1;
    const isSaved: boolean = saved.indexOf(item) !== -1;



    return (
        <li className='max-w-[300px] w-full rounded-3xl p-2 border border-gray-400'>
            <img className={`rounded-3xl h-[200px] w-full max-w-full object-cover duration-300 `} src={item.img} alt={'country img '} height={200} width={"100%"} />
            <div className='max-w-[100%] w-full mx-auto  rounded-3xl shadow-xl p-4 bg-white'>
                <div>
                    <h3 className='text-[20px] mb-2 font-semibold'>{item.name}   {item.flag}</h3>
                    <p className='text-[18px] font-medium'>Capital: <span className='font-normal'>{item.capital} </span></p>
                    <strong className='font-medium text-[18px]'>Population: <span className='font-normal'>{item.population}</span></strong>
                </div>
                <div className='flex items-center justify-end space-x-4 mt-3'>
                    <button onClick={() => dispatch(addSaves(item))} className={`px-4 py-2 rounded-lg bg-neutral-300  text-[16px] ${isSaved ? "opacity-50" : ""}`}>Save</button>
                    <button onClick={() => dispatch(addLikes(item))} className={`px-4 py-2 rounded-lg bg-neutral-300  text-[16px] ${isLiked ? "opacity-50" : ""}`}>Like</button>
                </div>
            </div>
            <div>
            </div>
        </li>
    )
}

export default CountryItem
