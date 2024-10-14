import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../pages/Main/Main";
import InfoTable from "../components/InfoTable/InfoTable/InfoTable";

export const appRouter = createBrowserRouter([
    {
        element: <App />,
        errorElement: <div>Error</div>,
        children: [
            { path: "/", element: <Main /> },
            { path: "/info/:id", element: <InfoTable /> }

        ]
    }
])