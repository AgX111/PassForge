import { useState } from "react";
import PropTypes from "prop-types";

export default function DetailsCard({ credential }) {
  const [clickedOnEye, setClickedOnEye] = useState(false);

  function handleClickOnEye() {
    setClickedOnEye((prev) => !prev);
  }

  return (
    <div className="card bg-base-100 w-full max-w-md shadow-sm rounded-md">
      <figure className="p-2 bg-base-200">
        <div className="h-10 w-full flex justify-start items-center gap-4">
          <span className="p-2 bg-base-300 rounded-md">
            <svg
              aria-hidden="true"
              className="h-5 w-5 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A8.46 8.46 0 0 0 9 17.96V17c0-.41.16-.78.44-1.06l2.58-2.58a3.72 3.72 0 0 1 .51-2.36H5.01Zm5.15 7.85c.1.1.21.15.35.15h2c.11 0 .2-.03.27-.07.07-.04.12-.1.15-.17a.86.86 0 0 0 .06-.24l.02-.25V18l.56-.02a.47.47 0 0 0 .3-.12c.07-.07.11-.17.12-.3L14 17h.5c.1 0 .2-.02.27-.07a.5.5 0 0 0 .15-.17.65.65 0 0 0 .07-.24 2.34 2.34 0 0 0 .01-.5v-.2c.17.07.35.11.52.14a2.87 2.87 0 0 0 2.62-.86A3.11 3.11 0 0 0 19 13a2.94 2.94 0 0 0-.88-2.13 3 3 0 0 0-5.03 2.84l-2.94 2.94c-.1.1-.15.21-.15.35v1.5c0 .14.05.25.15.35Zm7.13-7.13c.15.14.22.32.22.53 0 .2-.07.39-.22.53a.72.72 0 0 1-.53.22.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53c0-.2.07-.39.22-.53a.72.72 0 0 1 .53-.22c.2 0 .39.07.53.22Z"></path>
            </svg>
          </span>
          <h2 className="card-title">{credential.credentialUsername}</h2>
        </div>
        <span
          role="button"
          className="p-1 tooltip tooltip-left hover:bg-base-300 cursor-pointer rounded-sm"
          data-tip="Copy username"
          onClick={() => {
            navigator.clipboard.writeText(credential.credentialUsername);
          }}
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8ZM7 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4ZM4 6a2 2 0 0 1 1-1.73V14.5A2.5 2.5 0 0 0 7.5 17h6.23A2 2 0 0 1 12 18H7.5A3.5 3.5 0 0 1 4 14.5V6Z"></path>
          </svg>
        </span>
      </figure>
      <div className="card-body p-2 gap-0">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Password</legend>
          <div className="flex flex-row items-center">
            <p>
              {!clickedOnEye
                ? "************************"
                : credential.credentialPassword}
            </p>
            <span
              role="button"
              className="p-1 tooltip tooltip-left hover:bg-base-300 cursor-pointer rounded-sm"
              data-tip={!clickedOnEye ? "Show password" : "Hide password"}
              onClick={handleClickOnEye}
            >
              {!clickedOnEye ? (
                <svg
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.26 11.6A6.97 6.97 0 0 1 10 6c3.2 0 6.06 2.33 6.74 5.6a.5.5 0 0 0 .98-.2A7.97 7.97 0 0 0 10 5a7.97 7.97 0 0 0-7.72 6.4.5.5 0 0 0 .98.2ZM10 8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-2.5 3.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"></path>
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.85 2.15a.5.5 0 1 0-.7.7l3.5 3.5a8.1 8.1 0 0 0-3.37 5.05.5.5 0 1 0 .98.2 7.09 7.09 0 0 1 3.1-4.53l1.6 1.59a3.5 3.5 0 1 0 4.88 4.89l4.3 4.3a.5.5 0 0 0 .71-.7l-15-15Zm9.27 10.68a2.5 2.5 0 1 1-3.45-3.45l3.45 3.45Zm-2-4.83 3.38 3.38A3.5 3.5 0 0 0 10.12 8ZM10 6c-.57 0-1.13.07-1.67.21l-.8-.8A7.65 7.65 0 0 1 10 5c3.7 0 6.94 2.67 7.72 6.4a.5.5 0 0 1-.98.2A6.97 6.97 0 0 0 10 6Z"></path>
                </svg>
              )}
            </span>
            <span
              role="button"
              className="p-1 tooltip tooltip-left hover:bg-base-300 cursor-pointer rounded-sm"
              data-tip="Copy password"
              onClick={() => {
                navigator.clipboard.writeText(credential.credentialPassword);
              }}
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8ZM7 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4ZM4 6a2 2 0 0 1 1-1.73V14.5A2.5 2.5 0 0 0 7.5 17h6.23A2 2 0 0 1 12 18H7.5A3.5 3.5 0 0 1 4 14.5V6Z"></path>
              </svg>
            </span>
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Site</legend>
          <div className="flex flex-row items-center">
            <p>{credential.url}</p>
            <span
              role="button"
              className="p-1 tooltip tooltip-left hover:bg-base-300 cursor-pointer rounded-sm"
              data-tip="Go to site"
              onClick={() => {
                window.open(credential.url, "_blank", "noopener,noreferrer");
              }}
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-2.5a.5.5 0 0 1 1 0V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h2.5a.5.5 0 0 1 0 1H6Zm5-.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V4.7l-4.15 4.15a.5.5 0 0 1-.7-.7L15.29 4H11.5a.5.5 0 0 1-.5-.5Z"></path>
              </svg>
            </span>
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Note</legend>
          <p>
            {credential.note.length !== 0
              ? credential.note
              : "No note added"}
          </p>
        </fieldset>
        {/* All the fieldset's also have py-1, so this "card-actions" is also given one. */}
        <div className="card-actions py-1">
          <button className="btn min-w-20 border-base-content">Edit</button>
          <button className="btn min-w-20 border-base-content">Delete</button>
        </div>
      </div>
    </div>
  );
}

DetailsCard.propTypes = {
  credential: PropTypes.shape({
    credentialUsername: PropTypes.string.isRequired,
    credentialPassword: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired
  }).isRequired
};