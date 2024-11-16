"use client"
import React, { useEffect, useState } from 'react'
import { addCar, getUserCar } from '../ApiRoutes/HandlesApi'
import { CarCard } from '@/components'

const page = () => {
  const [getUserCars, setgetUserCars] = useState([])
  const [modal, setmodal] = useState(true)
  const [username, setusername] = useState<null | string>("")
  const [title, settitle] = useState("")
  const [tags, settags] = useState("")
  const [description, setdescription] = useState("")

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const usernameFromQuery = params.get("username"); 
    setusername(usernameFromQuery);
  }, []);

  useEffect(() => {
    const a = async () =>{
      await getUserCar({setgetUserCars,username});
      console.log(getUserCars);
    } 
    a()
  }, [])

  const addcar = async () => {
    await addCar({ title, description, tags, settitle, setdescription, settags,username});
    setmodal(!modal);
  }

  const toggleModal = () => {
    setmodal(!modal);
    console.log(modal)
  }

  return (
    <>
    <div className='pt-20'>
      <button onClick={toggleModal} className='bg-green-500 px-5 py-2 rounded-xl ml-6'>add car</button>
    </div>
     

    <div className={`${modal ? "hidden" : ""} fixed h-screen w-full bg-[#03030390] top-0 right-0 z-[100]`}> 
    <div className="flex flex-col w-4/12 max-md:w-10/12 m-auto mt-40 bg-white py-3 px-2 rounded-2xl">
       <div className='flex justify-end'>
      <div onClick={toggleModal} className="px-2 rounded-full bg-red-200 w-fit">x</div>
       </div>
       <h1 className='py-2 px-4 font-bold text-2xl'>Add Car</h1>
      <div className='m-2'>
      <h1>Title</h1>
      <input value={title} onChange={(e) => settitle(e.target.value)} className='bg-pink-50 w-full rounded-lg py-1 px-2' type="text" />
      </div>
      <div className='m-2'>
      <h1>Description</h1>
      <input value={description} onChange={(e) => setdescription(e.target.value)} className='bg-pink-50 w-full rounded-lg py-1 px-2' type="text" />
      </div>
      <div className='m-2'>
      <h1>Tags</h1>
      <input value={tags} onChange={(e) => settags(e.target.value)} className='bg-pink-50 w-full rounded-lg py-1 px-2' type="text" />
      </div>
      <button onClick={() => addcar()} className='bg-green-400 rounded-xl my-4 p-2'>AddCar</button>
    </div> 
    </div>    

    <h1 className='py-2 px-4 font-bold text-2xl mt-10'>Hello {username}, Your Cars </h1>
    {getUserCars.map((car:any,index:any) => (
                <div id={index}>
                  {/* <CarCard car ={car}/> */}
                </div>
              ))}     
    </>
  )
}

export default page
