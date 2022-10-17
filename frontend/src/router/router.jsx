import Home from "../views/Home/Home.jsx";
import About from "../views/About/About.jsx";

const routes = [
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: 'about',
        element: <About/>,
    },
];

export default routes;