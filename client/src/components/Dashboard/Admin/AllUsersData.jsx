import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AllUsersData = () => {

    const [users, setUsers] = useState([]);
    const [error, setIsError] = useState([]);

    // Get all users

    const getAllUsersAdmin = async () => {

        try {
            const response = await axios.get('http://localhost:8080/api/admin/users');
            const { success, data } = response.data;

            if (success) {
                return setUsers(data);
            } else {
                throw new Error('Failed to get users');
            }
        } catch (error) {
            return setIsError(error.message);
        }
    };



    useEffect(() => {
        getAllUsersAdmin()
    }, []);
    return (
        <div>
            <h1>all users data</h1>
        </div>
    )
}

export default AllUsersData
