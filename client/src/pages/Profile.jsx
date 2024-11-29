import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoggedIn } from "../context/LoggedInContext";
import { UserContext } from "../context/UserContext";
// import AddAddress from "../components/AddAddress";

const Profile = () => {
  const { users, loading, error } = useContext(UserContext);
  const { isLoggedIn, currentUserId } = useLoggedIn();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      console.log(localStorage.getItem("UserID"));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    console.log("Users:", users);
    console.log("currentUserId:", currentUserId);
  }, [users, currentUserId]);

  if (loading) {
    return <p>Laster brukerdata...</p>;
  }

  if (error) {
    return <p>Feil: {error}</p>;
  }

  let currentUser = null;
  if (currentUserId !== null) {
    currentUser = users.find(
      (user) => user.UserID === parseInt(currentUserId) // Sørg for at begge er tall
    );
    if (!currentUser) {
      return <p className="text-center text-red-500">Brukeren finnes ikke.</p>;
    }
  }

  if (!isLoggedIn || currentUserId === null) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">
            Du er ikke innlogget
          </h1>
          <p className="mb-4">
            Det ser ikke ut til at du er logget inn. Ønsker du å{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Logge deg inn?
            </a>{" "}
            eller{" "}
            <a href="/create-account" className="text-blue-600 hover:underline">
              opprette en bruker?
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md bg-white p-8 rounded-lg w-full sm:w-96 shadow-2xl">
        <div className="flex justify-center mb-4">
          <img
            src="/assets/images/default_profile.jpg"
            alt="Profilbilde"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Brukernavn
          </label>
          <p className="text-lg">{currentUser.Username}</p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Epost
          </label>
          <p className="text-lg">{currentUser.Email}</p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Adresse
          </label>
          <button>
            <a href="/add-address">Legg til adresse</a>
          </button>
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline"
          >
            Logg ut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
