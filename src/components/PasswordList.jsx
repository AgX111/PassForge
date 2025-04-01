import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import WebsiteFavicon from "./WebsiteFavicon";

export default function PasswordList({ credentials, searchValue }) {
  const filteredCredentials = Object.keys(credentials).filter((domainName) =>
    domainName.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <>
      {/* credentials count */}
      <div>
        {filteredCredentials.length != 1
          ? filteredCredentials.length + " sites or apps"
          : filteredCredentials.length + " site or app"}
      </div>
      <ul className="list bg-base-100 rounded-box shadow-md">
        {/* Temporary gave the domainName as the "key" prop to each item in List */}
        {filteredCredentials.map((domainName) => (
          <Link to={`/passwords/details/${domainName}`} key={domainName}>
            <li
              className="list-row hover:bg-base-200 cursor-pointer transition-colors duration-50"
              onClick={() => {}}
            >
              <div>
                {/* <img
                  className="size-10 rounded-box"
                  src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                  alt={domainName}
                /> */}
                <WebsiteFavicon domainName={domainName} size={32} />
              </div>
              <div>
                <div>{domainName}</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  {credentials[domainName].length} accounts
                </div>
              </div>
              <div className="text-2xl">🢒</div>
              {/* </div> */}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

PasswordList.propTypes = {
  // credentials should be an array of strings
  credentials: PropTypes.arrayOf(PropTypes.string).isRequired,
  // searchValue should be a string
  searchValue: PropTypes.string.isRequired,
};

// Default props in case they're not provided
PasswordList.defaultProps = {
  searchValue: "",
};
