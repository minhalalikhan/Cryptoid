import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Wallet from "./Pages/Wallet";
import WalletManager from "./Pages/WalletManager";
import AccountManager from "./Pages/AccountManager";
import { AnimatePresence, motion } from "framer-motion";
import CreateWallet from "./Pages/CreateWallet";

import { ReactNode } from "react";
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

function customPath(path: string = '', int: number) {
  // returns the first path of pathname to prevent main key change.
  //animated presence uses key change  to detect a comp being removed 

  const finalpath = '/' + path.split('/')[int]
  console.log('final path for key :', finalpath)
  return finalpath
}
function App() {
  // const [count, setCount] = useState(0)
  const location = useLocation()

  const bg = location.state?.Background
  // console.log('normal path : ', location.pathname)

  console.log('location ', location)
  // console.log('custom parent path : ', customPath(location.pathname, 1))
  console.log('bg in app tsx', bg)
  return (
    <AnimatePresence >
      <Wallet />
      <Routes

        location={ bg || location }
        // key={ location.pathname }
        key={ customPath(bg ? bg?.pathname : location.pathname, 1) }
      >

        <Route path="/account"
          element={
            <motion.div
              initial="initial"
              animate="in"
              key={ 'account' }
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


        {/* </Route> */ }
        <Route path="/walletmanager" element={

          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            key={ 'walletmanager' }
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

        } >


          <Route path="*" element={ <></> } />

        </Route>

        {/* <Route path="/createwallet"
          // key={ location.pathname }
          element={
            <NestedMotionDiv KEY="createwallet" >
              <CreateWallet />
            </NestedMotionDiv>
          } /> */}
        {/* <Route path='*' element={ <></> } /> */ }
      </Routes>
      <Routes location={ location } key={ "=" + location.pathname }>

        <Route path="/createwallet"
          // key={ location.pathname }
          element={
            <NestedMotionDiv KEY="createwallet" >
              <CreateWallet />
            </NestedMotionDiv>
          } />
      </Routes>
    </AnimatePresence>
    // <Navbar />
  );
}

export default App;


function NestedMotionDiv({ children, KEY }: { children: ReactNode, KEY?: string }) {

  const SubpageVariants = {
    initial: {
      // opacity: 0,
      x: "100vw",  // Page starts below the viewport
    },
    in: {
      // opacity: 1,
      x: 0,  // Page slides in to its position
    },
    out: {
      // opacity: 0,
      x: "100vw",  // Page slides down when leaving
    },
  };

  const SubpageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.5,
  };
  return (
    <motion.div
      initial="initial"
      animate="in"
      key={ KEY }
      exit="out"
      variants={ SubpageVariants }
      transition={ SubpageTransition }
      style={ {
        position: "absolute", // Make sure it appears on top of HomePage
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 20, // Ensure it's above HomePage
      } }
    >
      { children }
    </motion.div>
  )
}