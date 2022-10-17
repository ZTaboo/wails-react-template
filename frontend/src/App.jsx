import {useRoutes} from "react-router-dom";
import routes from "./router/router.jsx";
import "@arco-design/web-react/dist/css/arco.css";

function App() {
    return useRoutes(routes)
}

export default App
