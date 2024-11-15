import axios from "axios"
import ProfilePage from "@/components/Profile"
import { useRouter } from "next/navigation";

const NURL = process.env.NEXT_PUBLIC_URL;


const SignupUser = async ({password,email,username,router}:any) => {
    console.log(NURL)
    try {
        const response = await axios.post(`http://localhost:5000/register`, {password,email,username});
        // const response = await axios.post(`${NURL}/register`, {password,email,username});
        console.log(response.data);
        const { token } = response.data;
        
        if (token) {
            localStorage.setItem('jwtToken', token);
            return(
                
                router.push("/ProfilePage")
               
            )
        }
    } catch (error) {
        console.log(error);
    }
}




const LoginUser = async ({email,password,router}:any) => {
    console.log({email,password});
    // console.log(NURL)
    try {
        const res = await axios
        .post(`http://localhost:5000/auth/login`,{email,password});
        // .post(`${NURL}/login`,{email,password});
        const { token } = res.data;
        console.log("here")
        console.log(res.data)
        if (token) {
            localStorage.setItem('jwtToken', token);
            return(
                router.push("/ProfilePage")
            )
        }
    } catch (error) {
        console.log(error);
    }
}

const AddMessage = async ({message,setmessage,email,setemail,username,setusername,setloading}:any) => {
    try {
        const response = await axios
        .post(`${NURL}/message`,{message,email,username});
        setmessage("")
        setemail("")
        setusername("")
        setloading(false)
        return(
            false
        )
        
    } catch (error) {
    }
}

export {SignupUser, LoginUser, AddMessage}
