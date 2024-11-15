"use client";
import { manufacturers } from '@/constants';
import { SearchManuProps } from '@/types'
import { Combobox } from '@headlessui/react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import { useState,Fragment } from 'react';


const SearchManu=({manufacturer,setManufacturer} : SearchManuProps) => {
    const [Query, setQuery] = useState("");
    const filterManufacturers = Query === "" ? 
    manufacturers : manufacturers.filter((items) =>(
        items.toLowerCase()
        .replace(/\s+/g, "")
        .includes(Query.toLowerCase().replace(/\s+/g,""))

    ))

  return (
    <div className="search-manufacturer">
        <Combobox value={manufacturer} onChange={setManufacturer}>
            <div className="relative w-full">
                <Combobox.Button className="absolute top-[14px]" >
                    <Image src="/car-logo.svg" width = {20} height={20}
                    className = "ml-4"
                    alt="Car logo"
                    />
                </Combobox.Button>
                <Combobox.Input 
                className="search-manufacturer__input"
                placeholder='Volksvagen'
                displayValue={(manufacturer:string) =>
                manufacturer}
                onChange={(e) => setQuery(e.target.value)} 
                />
                <Transition 
                as = {Fragment}
                leave="transition ease-in duration-100"
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={() => setQuery('')}
                >
                    <Combobox.Options>
                         {
                        //  filterManufacturers.length === 0 && Query !== "" ? (
                        //     <Combobox.Option
                        //     value = {Query}
                        //     className="search-manufacturer__option"
                        //     >
                        //         Create "{Query}"
                        //     </Combobox.Option>
                        //  ): (
                            filterManufacturers.map((item) => (
                                <Combobox.Option
                                key = {item}
                                className={({active}) => ` relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                                value={item}
                                >{item}
                                </Combobox.Option>
                            )
                            // )
                         )}
                    </Combobox.Options>
                    
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManu
