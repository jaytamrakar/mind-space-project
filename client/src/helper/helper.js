import axios from 'axios';
import jwt_decode from 'jwt-decode';


    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");

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
            await axios.post('/api/user/sendMail/OTP', { username, userEmail : email, text : msg})
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

const getDoctorCard = async ({doctorId}) =>{
    try {
        const response = await axios.get(`api/doctor/getCardInfo/?doctorId=${doctorId}`);
        const { success, data } = response.data;
    
        if (success) {
          return setMyData(response.data);
        } else {
          throw new Error('Failed to get doctor card information');
        }
      } catch (error) {
        return setIsError(error.message);
      }
}

const getDoctor = async (doctorId) => {
    try {
      const response = await axios.get(`api/doctor/?doctorId=${doctorId}`);
      const { success, data } = response.data;
  
      if (success) {
        return setMyData(response.data);
      } else {
        throw new Error('Failed to get doctor information');
      }
    } catch (error) {
        return setIsError(error.message);
    }
  };

const setBookingSlot = async (appointmentId, date, time) => {
    try {
      const response = await axios.put(`api/appointment/setBooking?appointmentId=${appointmentId}`, {
        timeSlot: { date, time },
      });
  
      const { success, message } = response.data;
  
      if (success) {
        return setMyData(response.data);
      } else {
        throw new Error(message);
      }
    } catch (error) {
        return setIsError(error.message);
    }
  };

const getAllDoctors = async () => {
    try {
      const response = await axios.get('api/doctor/all');
      const { success, data } = response.data;
  
      if (success) {
        return setMyData(response.data);
      } else {
        throw new Error('Failed to get doctors');
      }
    } catch (error) {
        return setIsError(error.message);
    }
  };
  
  
  
  
