import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passordene stemmer ikke overens");
      return;
    }

    // const newUser = {
    //   email,
    //   username,
    //   password,
    // };

    // console.log("Sender data:", newUser);

    try {
      const response = await axios.post("http://localhost:4000/register", {
        username,
        email,
        password,
      });
      setMessage(response.data.message);
      setError(null);
      navigate("/login");
    } catch (error) {
      setMessage("");
      setError(error.response?.data?.error || "Noe gikk galt!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rouded-lg shadow-lg ">
        <h2 className="text-2xl font-bold text-center mb-6">Registrer deg!</h2>
        <form onSubmit={handleSubmit}>
          {/* Brukernavn */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Brukernavn
            </label>
            <input
              type="text"
              id="username"
              value={username}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              E-post
            </label>
            <input
              type="email"
              id="email"
              value={email}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Passord */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Passord
            </label>
            <input
              type="password"
              id="password"
              value={password}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Bekreft passord */}
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Bekreft passord
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {message && <p className="text-green-500 text-sm mb-4">{message}</p>}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Registrer
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
