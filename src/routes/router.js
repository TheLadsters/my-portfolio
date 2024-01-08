import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../pages/Error";
import Main from "../pages/Main";

const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <Error />,
            children: [
                {
                    path: "/my-portfolio",
                    element: <Main />,
                },
            ]
        }, 
    ],
);
export default router;