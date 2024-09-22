import "./App.css";
import { Route, Routes } from "react-router-dom";
import Wallet from "./Pages/Wallet";
import WalletManager from "./Pages/WalletManager";
import AccountManager from "./Pages/AccountManager";
// import Navbar from "./components/Navbar";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Wallet />} />
      <Route path="/account" element={<AccountManager />} />
      <Route path="/walletmanager" element={<WalletManager />} />
    </Routes>
    // <Navbar />
  );
}

export default App;
