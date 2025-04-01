import "./App.css";
import MainContent from "./components/MainContent.jsx";
import SideBar from "./components/SideBar.jsx";
import Header from "./components/Header.jsx";
import Details from "./components/Details.jsx";
import Error from "./components/Error.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const arr = {
    "100xdevs.com": [
      {
        credentialId: 685,
        userId: 1,
        url: "https://100xdevs.com/",
        credentialPassword: "password1",
        credentialUsername: "username1",
        domainName: "100xdevs.com",
        note: "Notes for 100xdevs.com",
      },
    ],
    "accenture.com": [
      {
        credentialId: 686,
        userId: 1,
        url: "https://accenture.com/myzone",
        credentialPassword: "password1",
        credentialUsername: "username1",
        domainName: "accenture.com",
        note: "Notes for accenture.com",
      },
      {
        credentialId: 687,
        userId: 1,
        url: "https://accenture.com/myzone",
        credentialPassword: "password2",
        credentialUsername: "username2",
        domainName: "accenture.com",
        note: "",
      },
    ],
    "adidas.co.in": [
      {
        credentialId: 688,
        userId: 1,
        url: "https://www.adidas.co.in/",
        credentialPassword: "password1",
        credentialUsername: "username1",
        domainName: "adidas.co.in",
        note: "Notes for adidas.co.in",
      },
    ],
    "adobe.com": [
      {
        credentialId: 689,
        userId: 1,
        url: "https://adobe.com",
        credentialPassword: "password1",
        credentialUsername: "username1",
        domainName: "adobe.com",
        note: "Notes for adobe.com",
      },
    ],
    "amazon.in": [
      {
        credentialId: 690,
        userId: 1,
        url: "https://www.amazon.in/ap/signin",
        credentialPassword: "password1",
        credentialUsername: "username1",
        domainName: "amazon.com",
        note: "Notes for amazon.in",
      },
      {
        credentialId: 692,
        userId: 1,
        url: "https://www.amazon.in/ap/register",
        credentialPassword: "password2",
        credentialUsername: "username2",
        domainName: "amazon.in",
        note: "Notes for amazon.in",
      },
      {
        credentialId: 693,
        userId: 1,
        url: "https://www.amazon.in/ap/signin",
        credentialPassword: "password3",
        credentialUsername: "username3",
        domainName: "amazon.in",
        note: "Notes for amazon.in",
      },
    ],
  };

  return (
    <div className="w-full">
      <Header />
      <SideBar />
      {/*
        I Want the container to start from 16/60 that's why did not use padding.
        Also gave a max-w-250 to limit the width of the main content when full screen
      */}
      <main className="ml-16 lg:ml-60 max-w-250 bg-base-100 rounded-sm">
        <Routes>
          <Route path="/" element={<Navigate to="/passwords" replace />} />
          <Route path="passwords">
            <Route path="" element={<MainContent credentials={arr} />} />
            <Route path="details/:domainName" element={<Details credentials={arr} />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
