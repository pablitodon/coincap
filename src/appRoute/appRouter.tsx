import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import InfoTable from "../components/InfoTable/InfoTable/InfoTable";
import Main from "../pages/Main/Main";

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