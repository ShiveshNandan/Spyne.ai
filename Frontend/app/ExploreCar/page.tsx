"use client";
import useSWR from "swr";
import { fetchCars } from '@/utils';
import SearchBar from '../../components/SearchBar'
import CustomFilter from '../../components/CustomFilter'
import CarCard from '../../components/CarCard';
import { useSearchParams } from 'next/navigation';
import { fuels, yearsOfProduction } from '@/constants';
import ShowMore from '../../components/ShowMore';


export default function CarCatalogue() {

  const searchParam = useSearchParams()
 
  const manufacturer = searchParam.get('manufacturer') as string;
  const year = Number(searchParam.get('year')) || 2022;
  const fuel = searchParam.get('fuel') as string || "gas";
  const limit = Number(searchParam.get('limit')) || 5;
  const model = searchParam.get('model') as string || "";




  const searchKey = JSON.stringify({
    manufacturer,
    year,
    fuel,
    limit,
    model,
  });
  const { data: allCars} = useSWR(['carData',searchKey], () =>
  fetchCars({
    manufacturer: manufacturer || "",
    year: year || 2022,
    fuel: fuel || "",
    limit: limit || 5,
    model: model || "",
  })
);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
 
  return (
    <div className="pt-20 w-10/12 m-auto" id='discover'>
      <div className="home__text-container">
        <h1 className="text-4x1 font-extrabold">Car catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>
      {/* console.log("hi"); */}
      <div className="home__filters">
        <SearchBar />
        <div className="home__filter-container">
          <CustomFilter title="fuel" options={fuels} />
          <CustomFilter title="year" options = {yearsOfProduction } />
        </div>
      </div>
      {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(limit || 10) / 10}
              isNext={(limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
            </div>
        )}
    </div>
  );
}

