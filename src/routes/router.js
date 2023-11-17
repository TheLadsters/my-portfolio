import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../pages/Error";
import About from "../pages/About";
import Experiences from "../pages/Experiences";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <Error />,
            children: [
                {
                    path: "/",
                    element: <About />,
                },
                {
                    path: "/experiences",
                    element: <Experiences />,
                },
                {
                    path: "/projects",
                    element: <Projects />,
                },
                {
                    path: "/contact",
                    element: <Contact />,
                },
            ]
        }, 
    ],
);
export default router;