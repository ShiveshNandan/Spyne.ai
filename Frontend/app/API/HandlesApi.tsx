import axios from "axios"
import ProfilePage from "@/components/Profile"

const NURL = process.env.NEXT_PUBLIC_URL;

const SignupUser = async ({password,email,username}:any) => {
    try {
        const response = await axios.post(`${NURL}/register`,{password,email,username});
        console.log(response.data);
        const { token } = response.data;

        if (token) {
            localStorage.setItem('jwtToken', token);
            return(
                <div>
                <ProfilePage />
                </div>
            )
        }
    } catch (error) {
        console.log(error);
    }
}




const LoginUser = async ({email,password}:any) => {
    console.log({email,password});
    try {
        const response = await axios
        .post(`${NURL}/login`,{email,password});
        const { token } = response.data;
        if (token) {
            localStorage.setItem('jwtToken', token);
            return(
                <div>
                <ProfilePage/>
                </div>
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
