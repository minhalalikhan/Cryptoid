import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Wallet from "./Pages/Wallet";
import WalletManager from "./Pages/WalletManager";
import AccountManager from "./Pages/AccountManager";
import { AnimatePresence, motion } from "framer-motion";

// import Navbar from "./components/Navbar";


const pageVariants = {
  initial: {
    // opacity: 0,
    y: "100vh",  // Page starts below the viewport
  },
  in: {
    // opacity: 1,
    y: 0,  // Page slides in to its position
  },
  out: {
    // opacity: 0,
    y: "100vh",  // Page slides down when leaving
  },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5,
};
function App() {
  // const [count, setCount] = useState(0)
  const location = useLocation()
  return (
    <AnimatePresence>
      <Wallet />
      <Routes location={ location } key={ location.pathname }>
        {/* <Route path="/"
          element={ <motion.div
          // initial="initial"
          // animate="in"
          // exit="out"
          // variants={ pageVariants }
          // transition={ pageTransition }
          >

          
          </motion.div>
          }
        /> */}
        <Route path="/account"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={ pageVariants }
              transition={ pageTransition }
              style={ {
                position: "absolute", // Make sure it appears on top of HomePage
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 10, // Ensure it's above HomePage
              } }
            >

              <AccountManager />
            </motion.div>
          } />
        <Route path="/walletmanager" element={

          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={ pageVariants }
            transition={ pageTransition }
            style={ {
              position: "absolute", // Make sure it appears on top of HomePage
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 10, // Ensure it's above HomePage
            } }
          >

            <WalletManager />
          </motion.div>

        } />
      </Routes>
    </AnimatePresence>
    // <Navbar />
  );
}

export default App;
