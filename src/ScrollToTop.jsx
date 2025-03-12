import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        // Only scroll to top if the pathname changes, not when query params or hash change
        if (location.pathname !== window.location.pathname) {
            window.scrollTo(0, 0);
        }
    }, [location.pathname]); // Triggers only when the main path changes

    return <>{children}</>;
};

export default ScrollToTop;
