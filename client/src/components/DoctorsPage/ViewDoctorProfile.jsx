import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../redux/features/alertSlice.js";
import DoctorProfile from "./DoctorProfile.jsx";


const ViewDoctorProfile = () => {

    const { doctorId } = useParams();
    const dispatch = useDispatch();

    const [doctorProfile, setDoctorProfile] = useState([]);

    const getDoctorCard = async () => {
        try {
            dispatch(showLoading());
            const response = await axios.get(`http://localhost:8080/api/doctor/getCardInfo/?doctorId=${doctorId}`);
            dispatch(hideLoading());
            const { success, data } = response.data;
            console.log("this is ", data);
            if (success) {
                return setDoctorProfile(data);
            } else {
                throw new Error('Failed to get doctor card information');
            }
        } catch (error) {
            dispatch(hideLoading());
            // return setIsError(error.message);
            console.error(error);

        }
    }

    useEffect(() => {
        getDoctorCard();
        (doctorProfile ? console.log("Ok") : console.log("error"))

    }, []);


    return (
        <>
            {doctorProfile && (
                <DoctorProfile
                    // fullName={doctorProfile.firstName.concat(' ', doctorProfile.lastName)}
                    fullName={doctorProfile.firstName + ' ' + doctorProfile.lastName}
                    email={doctorProfile.email}
                    website={doctorProfile.website}
                    experience={doctorProfile.experience}
                    expertise={doctorProfile.expertise}
                    qualification={doctorProfile.qualification}
                    displayPicture={doctorProfile.displayPicture}
                    status={doctorProfile.status}
                    about={doctorProfile.about}
                    isAvailable={doctorProfile.isAvailable}
                    Specialization={doctorProfile.Specialization}
                    timeSlots={doctorProfile.timeSlots}
                    languages={doctorProfile.languages}
                    feedbacks={doctorProfile.feedbacks}
                    appointments={doctorProfile.appointments}
                    notifications={doctorProfile.notifications}
                    doctorId={doctorProfile.doctorId}
                />
            )}
        </>
    );

}

export default ViewDoctorProfile
