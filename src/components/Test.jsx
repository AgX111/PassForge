import { useParams } from "react-router-dom";

export default function Test() {
  
  const { domainName } = useParams();
  
  return (
    <div>
      <h1 className="container">Welcome to {domainName}</h1>
    </div>
  );
}