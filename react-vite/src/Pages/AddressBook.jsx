import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAddress, updateAddress, deleteAddress } from "../redux/AddressSlice.js"; 
import { toast } from "react-toastify";
import { nanoid } from "@reduxjs/toolkit";

const AddressBook = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.auth.logUser);
  const addresses = useSelector((state) => state.address.addresses); 


  const [isModalOpen, setIsModalOpen] = useState(false); 
  // Open Modal for Add or Edit
  const handleEdit = (address) => {
    setFormData(address); // Populate form with selected address
    setIsModalOpen(true);
  };

  const [formData, setFormData] = useState({
    id: nanoid(),
    label: "",
    area: "",
    country: "",
    state: "",
    city: "",
    postcode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ 
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addresses.find((addr) => addr.id === formData.id)) {
      dispatch(updateAddress(formData));
      toast.success("Address updated!");
    } else {
      dispatch(addAddress(formData));
      toast.success("Address added!");
    }
    setIsModalOpen(false);
    setFormData({
      id: nanoid(),
      label: "",
      area: "",
      country: "",
      state: "",
      city: "",
      postcode: "",
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (formData.id) {
  //     if (formData.id === Date.now()) {
  //       // New address
  //       dispatch(addAddress(formData));
  //       toast.success("Address added!");
  //     } else {
  //       // Updating existing address
  //       dispatch(updateAddress(formData));
  //       toast.success("Address updated!");
  //     }
  //   }

  //   setFormData({
  //     id: Date.now(),
  //     label: "",
  //     area: "",
  //     country: "",
  //     state: "",
  //     city: "",
  //     postcode: "",
  //   });
  //   setIsModalOpen(false); // Close modal after submit
  // };

  const handleCancel = () => {
    setFormData({
      id: nanoid(),
      label: "",
      area: "",
      country: "",
      state: "",
      city: "",
      postcode: "",
    });
    //setIsModalOpen(false); // Close modal on cancel
  };

  const handleDelete = (id) => {
    dispatch(deleteAddress({ id }));
  };

  // const handleEdit = (address) => {
  //   setFormData(address);
  //   setIsModalOpen(true); // Open modal for editing
  // };

  return (
    <div className="container mx-auto py-6 px-4">
      <h2 className="text-2xl font-bold mb-6">Address Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div className="flex flex-col">
          <label htmlFor="label" className="font-base text-sm">
            Address Label <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="label"
            name="label"
            placeholder="Ex. : Home, Office etc..."
            onChange={handleChange}
            className="mt-2 p-2 border border-gray-300 w-full"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="area" className="font-base text-sm">
            Address Apartment, Suite, etc.
          </label>
          <input
            type="text"
            id="area"
            name="area"
            onChange={handleChange}
            className="mt-2 p-2 border border-gray-300 w-full"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/3">
            <label htmlFor="country" className="font-base text-sm">
              Country/Region <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="country"
              name="country"
              onChange={handleChange}
              className="mt-2 p-2 border border-gray-300 w-full"
              required
            />
          </div>

          <div className="w-full md:w-1/3">
            <label htmlFor="state" className="font-base text-sm">
              State <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="state"
              name="state"
              onChange={handleChange}
              className="mt-2 p-2 border border-gray-300 w-full"
              required
            />
          </div>

          <div className="w-full md:w-1/3">
            <label htmlFor="city" className="font-base text-sm">
              City <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              onChange={handleChange}
              className="mt-2 p-2 border border-gray-300 w-full"
              required
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="postcode" className="font-base text-sm">
            Postal/Zip Code <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            id="postcode"
            name="postcode"
            onChange={handleChange}
            className="mt-2 p-2 border border-gray-300 w-full"
            required
          />
        </div>
        
        <div className="flex justify-between gap-4 pt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white font-semibold hover:bg-white hover:text-black w-full md:w-auto"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 bg-black text-white font-semibold hover:bg-white hover:text-black w-full md:w-auto"
          >
            Cancel
          </button>
        </div>
      </form>

      <h3 className="text-lg font-bold mt-6 mb-3">Your Addresses</h3>
      <div>
        {addresses.map((address) => (
          <div key={address.id} className="container mx-auto mt-2 py-6 px-4 border border-gray-300">
            <p>{address.label}</p>
            <p>{address.area}</p>
            <p>{address.city}, {address.state}, {address.country} - {address.postcode}</p>
            {/* <button onClick={() => handleDelete(address.id)} className="text-red-600">Delete</button> */}
            <div className="flex justify-start gap-4 pt-2">
              <button
                type="button"
                // onClick={() => handleEdit(address)}
                onClick={() => handleEdit(address)}
                className="px-4 py-1 border border-black bg-white text-black font-base hover:bg-black hover:text-white w-full md:w-auto"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => handleDelete(address.id)}
                className="px-4 py-1 border border-black bg-white text-black font-base hover:bg-black hover:text-white w-full md:w-auto"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
            <h3 className="text-lg font-bold mb-4">Edit Address</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="label">Address Label</label>
                <input
                  type="text"
                  id="label"
                  name="label"
                  value={formData.label}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-md"
                  disabled // Prevent label changes
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="area">Apartment, Suite, etc.</label>
                <input
                  type="text"
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="postcode">Postal Code</label>
                <input
                  type="text"
                  id="postcode"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="flex justify-between gap-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white hover:bg-gray-800"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-black hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressBook; 

