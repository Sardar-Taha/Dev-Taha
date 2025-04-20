import { useEffect, useState } from "react";
import { Page, PageAnimatorWrapper } from "./element";

function PageAnimator() {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 991px)");

    const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        setIsToggled(true);
      } else {
        setIsToggled(false);
      }
    };

    handleResize(mediaQuery);

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const numberofLines = isToggled ? 2 : 5;

  return (
    <div>
      <PageAnimatorWrapper key={"nav"}>
        {[...Array(numberofLines)].map((item, index) => (
          <Page
            className={
              (index % 2 === 1 && "odd") ||
              (index === 0 && "no-border") ||
              (index === 4 && "no-right-border")
            }
            initial={index % 2 === 0 ? { y: -1000 } : { y: 1000 }}
            animate={{ y: 0 }}
            transition={{ delay: index * 0.1, duration: 1 }}
            exit={index % 2 === 1 ? { y: -1000 } : { y: 1000 }}
          />
        ))}
      </PageAnimatorWrapper>
    </div>
  );
}

export default PageAnimator;
