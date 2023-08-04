import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = (e) => {
      const clickedElement = e.target;
      const isWatchAnimationLink = clickedElement.classList.contains(
        "prt__game-container_article-content_watch-animation"
      );
      const isCloseButton = clickedElement.classList.contains("close-video");

      if (!isWatchAnimationLink && !isCloseButton) {
        window.scrollTo(0, 0, { behavior: "auto" });
      }
    };

    // Add a click event listener to the window
    window.addEventListener("click", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleScroll);
    };
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
