import PropTypes from "prop-types";
import successIcon from "../assets/images/icon-success.svg";

export default function PopUp({ email, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col bg-white px-8 py-10 justify-between lg:justify-center lg:items-center lg:bg-slate-800 ">
      <div className="flex flex-col justify-between lg:bg-white lg:max-w-96 lg:rounded-2xl lg:p-8">
        <img className="h-16 w-16 mb-4" src={successIcon} alt="success icon" />
        <h1 className="text-left font-bold text-4xl my-8">
          Thanks for subscribing!
        </h1>
        <p>
          A confirmation email has been sent to{" "}
          <span className="font-bold">{email}</span>. Please open it and click
          the button inside to confirm your subscription
        </p>
        <button
          className="mt-64 text-white font-bold text-center py-4 bg-blue-950 rounded-lg lg:mt-8"
          onClick={onClose}
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
}

PopUp.propTypes = {
  email: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
