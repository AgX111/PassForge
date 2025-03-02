import "./App.css";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Test from "./components/Test";
import { Routes, Route } from "react-router-dom";

function App() {
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
          <Route path="/" element={<MainContent />} />
          <Route path="/details/:domainName" element={<Test />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
