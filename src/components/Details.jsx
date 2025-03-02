import DetailsCard from "./DetailsCard.jsx";
import { useParams, Link } from "react-router-dom";

export default function Details({ passwordEntries }) {
  const { domainName } = useParams();

  return (
    <div className="container mx-auto p-4">
      <div className="breadcrumbs text-sm">
        <ul>
          <li><Link to="/">Passwords</Link></li>
          <li>{domainName}</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        {passwordEntries[domainName]?.map((item) => (
          <DetailsCard key={item.id} passwordEntry={item} />
        ))}
      </div>
    </div>
  );
}
