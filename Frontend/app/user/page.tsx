"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import { LoginUser, SignupUser } from "../ApiRoutes/HandlesApi";
import { useRouter } from "next/navigation";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [Erremail, setErrEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [Errpassword, setErrPassword] = useState(false);
  const [name, setName] = useState("");
  const [Errname, setErrName] = useState(false);
  const [Signup, setSignup] = useState(false);
  const router = useRouter();
  let errors = "";


  const login = async (email: any, password: any, router:any) => {
    try {
      const isSuccess = await LoginUser({ email, password, router});
    } catch (error: any) {
      console.log(error)
      if (error.message.includes("Invalid `email` param")) {
        errors = "Enter a valid email address";
        setErrEmail(true);
      } else if (error.message.includes("Invalid `password` param")) {
        errors = "Password is wrong";
        setErrPassword(true);
      } else if (error.message.includes("Invalid credentials.")) {
        errors = "Invalid credentials";
        setErrEmail(true);
        setErrPassword(true);
      } else {
        errors = "Enter Credentials";
        setErrEmail(true);
        setErrPassword(true);
      }
      // alert(errors);
      setPassword("");
    }
  };

  const Signupfunction = async (email: any, password: any, username:any, router:any) => {
    try {
      const isSuccess = await SignupUser({ email, password,username,router });
    } catch (error: any) {
      if (error.message.includes("Invalid `email` param")) {
        errors = "Enter a valid email address";
        setErrEmail(true);
      } else if (error.message.includes("Invalid `password` param")) {
        errors = "Password is wrong";
        setErrPassword(true);
      } else if (error.message.includes("Invalid credentials.")) {
        errors = "Invalid credentials";
        setErrEmail(true);
        setErrPassword(true);
      } else {
        errors = "Enter Credentials";
        setErrEmail(true);
        setErrPassword(true);
      }
      // alert(errors);
      setPassword("");
    }
  };

  return (
    <>
        <div className="flex">
          <div className="flex w-full">
            <div className="flex w-5/12 pt-10 bg-[#f2f2f2] max-lg:hidden">
              <Image
                src={"/cuate.png"}
                height={100}
                width={1000}
                alt="Illustration"
                className="w-8/12 m-auto"
              />
            </div>

            <div className="flex flex-col w-7/12 justify-center items-center bg-[#d0d0d0] overflow-hidden max-lg:w-full">
              <div className="flex flex-col w-full h-screen overflow-y-scroll items-center mt-40 max-sm:mt-[7rem] scroll">
                {!Signup ? (
                  <div className="flex flex-col w-7/12 max-sm:w-10/12">
                    <h1
                      className="text-3xl font-[600] tracking-[0.4px] max-sm:text-center"
                    >
                      Create an account
                    </h1>

                    <form className="flex flex-col mt-10 z-[200]">
                      <label className="text-sm pt-2 font-[100] text-[#0c0c0c] tracking-[0.5px] pb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setErrEmail(false);
                        }}
                        className={`${
                          Erremail
                            ? "text-red-400 border-red-700 outline-red-700"
                            : "outline-none"
                        } p-3 mb-2 rounded border`}
                      />

                      <label className="text-sm pt-2 font-[100] text-[#0c0c0c] tracking-[0.5px] pb-1">
                        Create Password
                      </label>
                      <input
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setErrPassword(false);
                        }}
                        className={`${
                          Errpassword
                            ? "text-red-400 border-red-700"
                            : "outline-none"
                        } p-3 mb-2 rounded border`}
                      />

                      <label className="text-sm pt-2 font-[100] text-[#0c0c0c] tracking-[0.5px] pb-1">
                        Username
                      </label>
                      <input
                        type="text"
                        placeholder="JohnWick"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          setErrName(false);
                        }}
                        className={`${
                          Errname
                            ? "text-red-400 border-red-700"
                            : "outline-none"
                        } p-3 mb-2 rounded border`}
                      />

                      <button
                        type="button"
                        onClick={() => {
                          // setLoadingBtn(true);
                          Signupfunction(email,password,name,router)
                          // setIsDisabledSignup(true);
                        }}
                        className={`${
                             "opacity-80 text-[#ffffff] bg-[#263238]"
                             
                        } p-2 my-2 rounded text-[600] transition-all duration-500`}
                      >
                        {"Create Account"}
                      </button>
                    </form>

                    <h1 className="text-xs py-1 flex justify-end underline underline-offset-4 text-[#121212] z-[200]">
                      <p 
                      onClick={()=>{setSignup(true)}}
                      className="cursor-pointer">Already have an account?</p>
                    </h1>
                  </div>
                  
                ) : (
                    <>
                  <h1
                      className="text-3xl font-[600] tracking-[0.4px] max-s:text-center"
                    >
                      Login 
                    </h1>

                <div className="flex flex-col w-7/12 mb-10 max-sm:w-10/12">
                <form className="flex flex-col mt-10 z-[200]">
                      <label className="text-sm pt-2 font-[100] text-[#0c0c0c] tracking-[0.5px] pb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setErrEmail(false);
                        }}
                        className={`${
                          Erremail
                            ? "text-red-400 border-red-700 outline-red-700"
                            : "outline-none"
                        } p-3 mb-2 rounded border`}
                      />

                      <label className="text-sm pt-2 font-[100]  text-[#0c0c0c] tracking-[0.5px] pb-1">
                        Create Password
                      </label>
                      <input
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setErrPassword(false);
                        }}
                        className={`${
                          Errpassword
                            ? "text-red-400 border-red-700"
                            : "outline-none"
                        } p-3 mb-2 rounded border`}
                      />

                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault(),
                          login(email,password,router)                          
                          // setIsDisabledSignup(true);
                        }}
                        
                        className={`${
                          // isDisabledSignup
                             "opacity-80 text-[#ffffff] bg-[#263238]"
                        } p-2 my-2 rounded text-[600] transition-all duration-500`}
                      >
                        {"Log in"}
                      </button>
                      <h1 className="text-xs py-1 flex justify-end underline underline-offset-4 text-[#121212] z-[200]">
                      <p 
                      onClick={()=>{setSignup(false)}}
                      className="cursor-pointer">Already have an account?</p>
                    </h1>
                    </form>
                </div>
                </>)}
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default LoginPage;
