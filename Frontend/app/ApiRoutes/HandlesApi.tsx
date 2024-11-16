import axios from "axios"

const AuthURL = process.env.NEXT_PUBLIC_URL;
const CarURL = process.env.NEXT_PUBLIC_CURL;


const SignupUser = async ({password,email,username,router}:any) => {
    
    try {
        const response = await axios.post(`${AuthURL}/register`, {password,email,username});
        console.log(response.data);
        const { token } = await response.data;
        console.log(token)
        
        if (token) {
            localStorage.setItem('jwtToken', token);
            console.log("first")            
        }
        router.push(`/ProfilePage?username=${username}`)
    } catch (error) {
        console.log(error);
    }
}


const LoginUser = async ({email,password,router}:any) => {
    console.log({email,password});
    try {
        const res = await axios
        .post(`${AuthURL}/login`,{email,password});
        const { token } = res.data;
        console.log("here")
        console.log(res.data)
        if (token) {
            localStorage.setItem('jwtToken', token);
            return(
                router.push(`/profilePage`)
            )
        }
    } catch (error) {
        console.log(error);
    }
}


// =================car consoles====================
const getCar = async (setgetAllCars:any) => {
    try {
        const response = await axios.get(`${CarURL}/`);
        await setgetAllCars(response.data);
    } catch (error) {
        console.log(error);
    }
}

const getUserCar = async ({setgetUserCars , username}:any) => {

    try {
        const response = await axios.post(`${CarURL}/`, {username});
        console.log(response.data)
        console.log({username})
        await setgetUserCars(response.data);
    } catch (error) {
        console.log(error);
    }
}

const addCar = async ({title, description, tags, settitle, setdescription, settags,username}:any) => {
    try {
        const response = await axios.post(`${CarURL}/addcar`, {title, description, tags,username});
        console.log(response);
        settitle(""), setdescription(""), settags("")
    } catch (error) {
        console.log(error);
    }
}

const updateCar = async ({title, description, tags, settitle, setdescription, settags, id}:any) => {
    try {
        const response = await axios.put(`${CarURL}/${id}`, {title, description, tags});
        settitle(""), setdescription(""), settags("")
    } catch (error) {
        console.log(error);
    }
}

const deleteCar = async ({setgetYourCars,id}:any) => {
    try {
        const response = await axios.get(`${CarURL}/${id}`);
        await setgetYourCars(response.data);
    } catch (error) {
        console.log(error);
    }
}

const AddMessage = async ({message,setmessage,email,setemail,username,setusername,setloading}:any) => {
    try {
        const response = await axios
        .post(`${AuthURL}/message`,{message,email,username});
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

export {SignupUser, LoginUser, AddMessage, getCar, addCar, deleteCar, getUserCar}
