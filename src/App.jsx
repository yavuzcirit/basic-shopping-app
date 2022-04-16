import Home from "./home/Home";
import Topbar from "./topbar/Topbar";

const App = () => {
  return (
    <div className="bg-slate-100 h-full mx-[auto] flex w-full max-w-[114.4rem] flex flex-col">
      <Topbar />
      <Home />
    </div>
  );
};

export default App;
