import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import GlobalStyle from "globalStyles";
import { useEffect, useState } from "react";
import { HomeCom, WorkCom, ServicesCom, AboutUsCom } from "components";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Footer, InQuirySection } from "components/common";
import PageAnimator from "components/pageChangeAnimation";

function App() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showScrollbar, setShowScrollbar] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true); // New state variable

  const handleExitComplete = () => {
    setIsAnimating(false);
    setShowScrollbar(true);
  };

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 2500);
  }, [location]);

  useEffect(() => {
    if (!isFirstRender) {
      setShowScrollbar(false);
      document.body.style.overflow = "hidden";
      setIsAnimating(true);
    } else {
      setIsFirstRender(false);
    }
  }, [location]);

  useEffect(() => {
    if (isAnimating) {
      document.body.style.overflow = "hidden";
    } else {
      if (showScrollbar) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
    }
  }, [isAnimating, showScrollbar]);

  return (
    <div>
      <motion.div
        className="custom-cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
      <GlobalStyle />

      <AnimatePresence onExitComplete={handleExitComplete}>
        {isAnimating && <PageAnimator />}
      </AnimatePresence>
      <Routes>
        <Route path="/" element={<HomeCom />} />
        <Route path="/work" element={<WorkCom />} />
        {/* <Route path="/services" element={<ServicesCom />} /> */}
        <Route path="/about" element={<AboutUsCom />} />
      </Routes>
      <InQuirySection />
      <Footer />
    </div>
  );
}

export default App;
