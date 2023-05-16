import axios from 'axios';
import jwt_decode from 'jwt-decode';

/** Make API Requests */

/** To get username from Token */
const getUserId = async () => {
    const token = localStorage.getItem('token')
    if(!token) return Promise.reject("Cannot find Token");
    let decode = jwt_decode(token)
    return decode;
}

/** authenticate function */
const authenticate = async (userId)=>{
    try {
        return await axios.post('/api/user/authenticate', { userId })
    } catch (error) {
        return { error : "user doesn't exist...!"}
    }
}

/** get User details */
const getUser = async ({ useremail }) => {
    try {
        const { data } = await axios.get(`/api/user/${useremail}`);
        return { data };
    } catch (error) {
        return { error : "Password doesn't Match...!"}
    }
}

/** register user function */
const registerUser = async (credentials) => {
    try {

        
        const { data : { msg }, status } = await axios.post(`/api/user/register`, credentials);

        let { username, email } = credentials;

        /** send email */
        if(status === 201){
            await axios.post('/api/user/sendMail', { username, userEmail : email, text : msg})
        }

        return Promise.resolve(msg)
    } catch (error) {
        return Promise.reject({ error })
    }
}

/** login function */
const verifyPassword = async ({ useremail, password }) => {
    try {
        if(useremail){
            const { data } = await axios.post('/api/user/login', { useremail, password })
            return Promise.resolve({ data });
        }
    } catch (error) {
        return Promise.reject({ error : "Password doesn't Match...!"})
    }
}

/** generate OTP */
const generateOTP = async (useremail) =>{
    try {
        const {data : { code }, status } = await axios.get('/api/user/generateOTP', { params : { useremail }});

        // send mail with the OTP
        if(status === 201){
            let { data : { email }} = await getUser({ useremail });
            let text = `Your Password Recovery OTP is ${code}. Verify and recover your password.`;
            await axios.post('/api/user/sendMail', { username, userEmail: email, text, subject : "Password Recovery OTP"})
        }
        return Promise.resolve(code);
    } catch (error) {
        return Promise.reject({ error });
    }
}

/** verify OTP */
const verifyOTP = async ({ useremail, code }) =>{
    try {
       const { data, status } = await axios.get('/api/user/verifyOTP', { params : { useremail, code }})
       return { data, status }
    } catch (error) {
        return Promise.reject(error);
    }
}
