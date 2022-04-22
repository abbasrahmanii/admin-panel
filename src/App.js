import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div className="min-h-screen">
      <Topbar />
      <div className="container flex">
        <Sidebar />
        {/* <div className="others bg-green-700" style={{ flex: 4 }}>
          other pages
        </div> */}
      </div>
    </div>
  );
}

export default App;
