import ThemeController from "./ThemeController.jsx";

export default function Header() { 
  return (
    <header>
      <div className="p-5 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-base-content">PassForge</h1>
        <div className="space-x-5">
          <ThemeController/>
          {/* Email */}
          <button className="btn ">
            <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="currentColor" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
            Login
          </button>
        </div>
      </div>
    </header>
  );
}