import { Outlet, RouterProvider } from "react-router";
import Footer from "./layouts/Footer";
import NavBar from "./layouts/NavBar";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/catalog",
                element: <Catalog />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
