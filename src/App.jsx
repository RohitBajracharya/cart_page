import { ToastContainer } from "react-toastify";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import Checkout from "./Containers/Checkout/Checkout";

function App() {
  return (
    <div className="h-screen p-5">
      <Checkout />
      <ToastContainer />
    </div>
  );
}

export default App;
