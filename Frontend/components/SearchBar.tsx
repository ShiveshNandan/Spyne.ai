"use client";
import Image from "next/image";
import SearchManu from "./SearchManu";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import {  HomeProps } from "@/types";




function SearchBtn(otherClasses: any) {
  return (
    <button type="submit" className={`-ml-11 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying-glass"
        width={40}
        height={40}
        className="object-contain" />
    </button>
  );
}

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setmodel] = useState("");
  const router = useRouter();


  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer.trim() === "" && model.trim() ==="") {
      return alert("bkl");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
  };

  function updateSearchParams(model: string, manufacturer: string) {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set('model', model);
    } else {
      searchParams.delete('model');
    }

    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer);
    } else {
      searchParams.delete('manufacturer');
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname);
    // console.log(newPathname);
    // console.log(manufacturer);
    // console.log(model);
    // console.log(HomeProps);

  }


  return (
    <form action="" onSubmit={handleSearch} className="searchbar">
      <div className="searchbar__item">
        <SearchManu 
        manufacturer={manufacturer} 
        setManufacturer ={setManufacturer} 
        />
        <SearchBtn otherClasses="sm:hidden" />

      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input type="text" name="model" value={model} onChange={(e) =>setmodel(e.target.value)} placeholder="Model.."
        className="searchbar__input"
        />
        <SearchBtn otherClasses="sm:hidden" />
        
      </div>
        {/* <SearchBtn otherClasses="max-sm:hidden" /> */}
    </form>
  );
};

export default SearchBar;
