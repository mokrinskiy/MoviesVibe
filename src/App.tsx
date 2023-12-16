import { Outlet, RouterProvider } from "react-router";
import Footer from "./layouts/Footer";
import NavBar from "./layouts/NavBar";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

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
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
