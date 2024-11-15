// "use client";
import Image from "next/image";
// import SearchManu from "./SearchManu";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CarProps, FilterProps } from "@/types";
import React from "react";
export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // const manufacturer = "bmw";

  var gg = "audi";
  
  const headers = {
    "X-RapidAPI-Key": '6a64bc4673msh88a595649bbfe51p1cc8d2jsn30204187bed2',
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

 const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    { headers: headers }
  );

  const result = await response.json();
  // console.log(result);
  // console.log(manufacturer);
  // console.log(year);
  // console.log(fuel);
  // console.log(limit);
  // console.log(model);
  // alert("mode");
  return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;
  url.searchParams.append("customer", "k");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const updateSearchParams = (type:string, value:any) =>{
    const searchParams = new URLSearchParams(window.location.search);

   
    searchParams.set(type, value);
    
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    return newPathname;
}