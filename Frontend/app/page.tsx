import Image from 'next/image'
import { Hero } from "@/components";
// import CarCatalogue from '@/components/CarCatalogue';
import {  HomeProps } from "@/types";

// import { fetchCars } from '@/utils';

export default async function Home() {

  return (
    <main className='overflow-hidden'>
      <Hero/>
    </main>
  )
}
