import "./App.css";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full">
      <Header />
      <SideBar />
      {/* I Want the container to start from 16/60 that's why did not use padding. */}
      <main className="ml-16 lg:ml-60  bg-base-100 rounded-sm">
        <MainContent />
      </main>
    </div>
  );
}

export default App;
