import React from "react";
import PathConstants from "./PathConstants";

const Home=React.lazy(()=>import("../Pages/Home"))
const Team=React.lazy(()=>import("../Pages/Team"))
const Portfolio=React.lazy(()=>import("../Pages/Portfolio"))
const About=React.lazy(()=>import("../Pages/About"))


const routes = [
    {path:PathConstants.HOME , element:<Home/> },
    {path:PathConstants.TEAM , element:<Team/> },
    {path:PathConstants.PORTFOLIO , element:<Portfolio/>},
    {path:PathConstants.ABOUT , element:<About/> }
]
export default routes