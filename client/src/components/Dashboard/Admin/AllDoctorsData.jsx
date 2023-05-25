import React, { useEffect, useState } from "react";
import axios from "axios";

const AllDoctorsData = () => {
  const [users, setUsers] = useState([]);
  const [error, setIsError] = useState([]);
  const [blockedUsers, setBlockedUsers] = useState([]);

  // Get all users

  const getAllUsersAdmin = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/admin/users");
      const { success, data } = response.data;

      if (success) {
        return setUsers(data);
      } else {
        throw new Error("Failed to get users");
      }
    } catch (error) {
      return setIsError(error.message);
    }
  };

  useEffect(() => {
    getAllUsersAdmin();
  }, []);

  const handleBlockToggle = (email) => {
    if (blockedUsers.includes(email)) {
      setBlockedUsers(blockedUsers.filter((userEmail) => userEmail !== email));
    } else {
      setBlockedUsers([...blockedUsers, email]);
    }
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="max-w-full overflow-x-auto">
              <div className="table-container" style={{ maxHeight: "500px", overflowY: "auto" }}>
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-violet-600 text-center">
                      <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-4 lg:px-4">
                        Name
                      </th>
                      <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-4 lg:px-4">
                        Email
                      </th>
                      <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-4 lg:px-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((currentData) => {
                      const { name, email } = currentData;
                      const isBlocked = blockedUsers.includes(email);

                      return (
                        <tr key={email}>
                          <td className="text-dark border-b border-l border-[#E8E8E8] py-2 text-center text-base font-medium">
                            {name}
                          </td>
                          <td className="text-dark border-b border-[#E8E8E8] bg-white py-2 text-center text-base font-medium">
                            {email}
                          </td>
                          <td className="text-dark border-b border-[#E8E8E8] py-2 text-center text-base font-medium">
                            <button
                              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                                isBlocked ? "bg-red-500" : ""
                              }`}
                              onClick={() => handleBlockToggle(email)}
                            >
                              {isBlocked ? "Unblock" : "Block"}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllDoctorsData;
