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
        id: 685,
        userId: 1,
        website: "https://100xdevs.com/",
        password: "password1",
        username: "username1",
        domainName: "100xdevs.com",
        note: "Notes for 100xdevs.com",
      },
    ],
    "accenture.com": [
      {
        id: 686,
        userId: 1,
        website: "https://accenture.com/myzone",
        password: "password1",
        username: "username1",
        domainName: "accenture.com",
        note: "Notes for accenture.com",
      },
      {
        id: 687,
        userId: 1,
        website: "https://accenture.com/myzone",
        password: "password2",
        username: "username2",
        domainName: "accenture.com",
        note: "",
      },
    ],
    "adidas.co.in": [
      {
        id: 688,
        userId: 1,
        website: "https://www.adidas.co.in/",
        password: "password1",
        username: "username1",
        domainName: "adidas.co.in",
        note: "Notes for adidas.co.in",
      },
    ],
    "adobe.com": [
      {
        id: 689,
        userId: 1,
        website: "https://adobe.com",
        password: "password1",
        username: "username1",
        domainName: "adobe.com",
        note: "Notes for adobe.com",
      },
    ],
    "amazon.in": [
      {
        id: 690,
        userId: 1,
        website: "https://www.amazon.in/ap/signin",
        password: "password1",
        username: "username1",
        domainName: "amazon.com",
        note: "Notes for amazon.in",
      },
      {
        id: 692,
        userId: 1,
        website: "https://www.amazon.in/ap/register",
        password: "password2",
        username: "username2",
        domainName: "amazon.in",
        note: "Notes for amazon.in",
      },
      {
        id: 693,
        userId: 1,
        website: "https://www.amazon.in/ap/signin",
        password: "password3",
        username: "username3",
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
            <Route path="" element={<MainContent passwordEntries={arr} />} />
            <Route path="details/:domainName" element={<Details passwordEntries={arr} />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
