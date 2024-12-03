import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const AccountDashboard = () => {
  const { logUser } = useSelector((state) => state.auth);

  if (!logUser) {
    return (
      <div className="text-center py-6">
        <h3 className="text-xl font-bold">No user logged in</h3>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <h3 className="text-2xl font-bold border-b pb-4">Account Details</h3>

      <form className="space-y-6">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <label className="font-base w-full md:w-1/3" htmlFor="username">
            Username:
          </label>
          <input
            id="username"
            type="text"
            value={logUser.name}
            readOnly
            className="focus:outline-none mt-1 p-2 w-full md:w-2/3 border border-gray-300 bg-gray-100"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <label className="font-base w-full md:w-1/3" htmlFor="mobile">
            Mobile:
          </label>
          <input
            id="mobile"
            type="text"
            value={logUser.mobile}
            readOnly
            className="focus:outline-none mt-1 p-2 w-full md:w-2/3 border border-gray-300 bg-gray-100"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <label className="font-base w-full md:w-1/3" htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={logUser.email}
            readOnly
            className="focus:outline-none mt-1 p-2 w-full md:w-2/3 border border-gray-300 bg-gray-100"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <label className="font-base w-full md:w-1/3" htmlFor="password">
            Password:
          </label>
          <input
            id="password"
            type="text"
            value={logUser.password}
            readOnly
            className="focus:outline-none mt-1 p-2 w-full md:w-2/3 border border-gray-300 bg-gray-100"
          />
        </div>

        {/* <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
          <label className="font-base w-full md:w-1/3" htmlFor="address">
            Address:
          </label>
          <textarea
            id="address"
            value={logUser.addresses || "Didn't add yet!"}
            readOnly
            className="focus:outline-none mt-1 p-2 w-full md:w-2/3 border border-gray-300 bg-gray-100 text-gray-500"
            rows={3}
          />
        </div> */}
        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
          <label className="font-base w-full md:w-1/3" htmlFor="address">
            Address:
          </label>
          {logUser.addresses && logUser.addresses.length > 0 ? (
            logUser.addresses.map((address, index) => (
              <div key={index} className="">
                <input
                  id={`label-${index}`}
                  type="text"
                  value={address.label}
                  readOnly
                  className="focus:outline-none mt-1 p-2 w-full border border-gray-300 bg-gray-100"
                />
              </div>
            ))
          ) : (
            <div className="text-gray-500">"Didn't add yet!</div>
          )}
        </div>
      </form>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row justify-between gap-4 pt-6">
        <NavLink
          to="/profile/address"
          className="px-4 py-2 text-sm font-semibold uppercase bg-black text-white rounded-md hover:bg-gray-800"
        >
          Add New Address
        </NavLink>
        <NavLink
          to="/profile/reset-password"
          className="px-4 py-2 text-sm font-semibold uppercase bg-black text-white rounded-md hover:bg-gray-800"
        >
          Reset Password
        </NavLink>
      </div>
    </div>
  );
};

export default AccountDashboard;
