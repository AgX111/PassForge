import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function PasswordList({ domainNames, searchValue }) {
  const filteredDomainNames = Object.keys(domainNames).filter((domainName) =>
    domainName.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <>
      {/* domainNames count */}
      <div>
        {filteredDomainNames.length != 1
          ? filteredDomainNames.length + " sites or apps"
          : filteredDomainNames.length + " site or app"}
      </div>
      <ul className="list bg-base-100 rounded-box shadow-md">
        {/* Temporary gave the domainName as the "key" prop to each item in List */}
        {filteredDomainNames.map((domainName) => (
          <Link to={`/details/${domainName}`} key={domainName}>
            <li
              className="list-row hover:bg-base-200 cursor-pointer transition-colors duration-50"
              onClick={() => {}}
            >
              <div>
                <img
                  className="size-10 rounded-box"
                  src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                  alt={domainName}
                />
              </div>
              <div>
                <div>{domainName}</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  2 accounts
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
  // domainNames should be an array of strings
  domainNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  // searchValue should be a string
  searchValue: PropTypes.string.isRequired,
};

// Default props in case they're not provided
PasswordList.defaultProps = {
  searchValue: "",
};
