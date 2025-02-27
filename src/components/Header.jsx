import ThemeController from "./ThemeController.jsx";

export default function Header() { 
  return (
    <header>
      <div className="p-5 flex justify-between items-start">
        <h1 className="text-3xl font-bold text-base-content">PassForge</h1>
        <ThemeController/>
      </div>
    </header>
  );
}