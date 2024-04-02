import validator from "validator";
import { useState } from "react";
import PopUp from "./popUp";

export default function EmailForm() {
  const inputValidClass =
    "border-2 border-gray-300 px-4 py-3 rounded-lg focus:outline-none";
  const inputInvalidClass =
    "border-2 border-red-400 text-red-400 bg-red-200 px-4 py-3 rounded-lg focus:outline-none";

  // State to manage popup visibility
  const [showPopup, setShowPopup] = useState(false);

  // State to hold inputTailwind class
  const [inputClass, setInputClass] = useState(inputValidClass);

  // State to hold the email input
  const [email, setEmail] = useState(null);

  // State to hold any validation error messages
  const [error, setError] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      validateEmail();
    }
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    // Update the email state with the input
    setEmail(event.target.value);
  };

  // Function to validate the entered email
  const validateEmail = () => {
    // Check if the email input is empty
    if (!email) {
      setError("Email is required.");
      setInputClass(inputInvalidClass);
      return;
    }

    // Check if the input is a valid email using the validator library
    if (validator.isEmail(email)) {
      setError("");
      setInputClass(inputValidClass);
      setShowPopup(true);
    } else {
      setError("Valid email required");
      setInputClass(inputInvalidClass);
    }
  };

  return (
    <div className="w-full flex flex-col">
      <div className="flex mb-2 justify-between">
        <label className="font-bold" htmlFor="emailForm">
          Email address
        </label>
        {error !== "" ? (
          <label className="font-bold text-red-400" htmlFor="emailForm">
            Valid email required
          </label>
        ) : null}
      </div>
      <input
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        className={inputClass}
        placeholder="email@company.com"
        id="emailForm"
        type="email"
      />
      <button
        onClick={validateEmail}
        className="mt-5 text-white font-bold text-center py-3 bg-blue-950 rounded-lg"
      >
        Subscribe to monthly newsletter
      </button>
      {showPopup && (
        <PopUp message={email} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}
