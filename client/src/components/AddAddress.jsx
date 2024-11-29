import React, { useState } from "react";
import { useLoggedIn } from "../context/LoggedInContext"; // Bruker context for å sjekke innlogging
import { Link } from "react-router-dom";
import axios from "axios";

const AddAddress = () => {
  const { isLoggedIn } = useLoggedIn(); // Bruker contexten for å sjekke om bruker er logget inn
  const [address, setAddress] = useState({
    street_address: "",
    city: "",
    zip_code: "",
    country: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Hvis ikke logget inn, vis feilmelding
    if (!isLoggedIn) {
      setError(
        "Ser ikke ut som du er logget inn. Ønsker du å logge inn eller lage en bruker?"
      );
      return;
    }

    try {
      // Anta at vi sender en post-request til backend med adresseinformasjonen
      const response = await axios.post(
        "http://localhost:4000/profile/address",
        address
      );
      setSuccess(response.data.message);
      setError(""); // Clear any previous errors
    } catch (err) {
      setError(
        err.response?.data?.message || "Noe gikk galt, vennligst prøv igjen."
      );
      setSuccess("");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">
          Legg til adresse
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Gateadresse
            </label>
            <input
              type="text"
              name="street_address"
              value={address.street_address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              By
            </label>
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Postnummer
            </label>
            <input
              type="text"
              name="zip_code"
              value={address.zip_code}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Land
            </label>
            <input
              type="text"
              name="country"
              value={address.country}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md"
          >
            Legg til adresse
          </button>
        </form>

        {/* Hvis ikke logget inn, vis lenker til logg inn/registrering */}
        {!isLoggedIn && error && error.includes("logget inn") && (
          <div className="mt-4 text-center">
            <p>Ser ikke ut som du er logget inn. Ønsker du å:</p>
            <Link to="/login" className="text-blue-600 hover:underline">
              Logge inn
            </Link>
            <span className="mx-2">eller</span>
            <Link
              to="/create-account"
              className="text-blue-600 hover:underline"
            >
              Lage en bruker
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddAddress;
