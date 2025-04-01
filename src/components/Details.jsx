import DetailsCard from "./DetailsCard.jsx";
import { useParams, Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Details({ credentials }) {
  const { domainName } = useParams();

  return (
    <div className="container mx-auto p-4 flex flex-col flex-start gap-4">
      <div className="breadcrumbs text-sm">
        <ul>
          <li><Link to="/passwords">Passwords</Link></li>
          <li>{domainName}</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        {credentials[domainName]?.map((item) => (
          <DetailsCard key={item.credentialId} passwordEntry={item} />
        ))}
      </div>
    </div>
  );
}

Details.propTypes = {
  credentials: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        credentialId: PropTypes.string.isRequired,
        // Add other expected properties if known
      })
    )
  ).isRequired
};
