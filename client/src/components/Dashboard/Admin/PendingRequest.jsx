import React, { useEffect, useState } from "react";
import axios from "axios";

const PendingRequest = () => {
  const [users, setUsers] = useState([]);
  const [error, setIsError] = useState([]);

  const handleApprove = (email) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.email === email ? { ...user, status: "Approved" } : user
      )
    );
  };

  const handleDecline = (email) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.email === email ? { ...user, status: "Declined" } : user
      )
    );
  };

  // Get all users
  const getAllUsersAdmin = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/admin/users");
      const { success, data } = response.data;

      if (success) {
        const updatedData = data.map((user) => ({ ...user, status: "" }));
        setUsers(updatedData);
      } else {
        throw new Error("Failed to get users");
      }
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getAllUsersAdmin();
  }, []);

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
                      <th className="w-1/6 min-w-[160px] py-4 px-1 text-lg font-semibold text-white lg:py-4 lg:px-1"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((currentData) => {
                      const { name, email, status } = currentData;

                      return (
                        <tr key={email} className="h-14">
                          <td className="text-dark border-b border-l border-[#E8E8E8] py-2 text-center text-base font-medium h-14">
                            {name}
                          </td>
                          <td className="text-dark border-b border-[#E8E8E8] bg-white py-2 text-center text-base font-medium h-14">
                            {email}
                          </td>
                          <td className="text-dark border-b border-[#E8E8E8] py-2 text-center text-base font-medium h-14">
                            {status === "" && (
                              <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:ring-0"
                                onClick={() => handleApprove(email)}
                              >
                                Approve
                              </button>
                            )}
                            {status === "Approved" && (
                              <span className="text-green-500 font-bold">
                                Approved
                              </span>
                            )}

                            {status === "" && (
                              <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-0"
                                onClick={() => handleDecline(email)}
                              >
                                Decline
                              </button>
                            )}
                            {status === "Declined" && (
                              <span className="text-red-500 font-bold">
                                Declined
                              </span>
                            )}
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

export default PendingRequest;
