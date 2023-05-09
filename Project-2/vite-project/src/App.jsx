import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Nothing from "./Pages/Nothing/Nothing";
import Contact from "./Pages/Contact/Contact";
import Gallery from "./Pages/Gallery/Gallery";
import News from "./Pages/News/News";
import Career from "./Pages/Career/Career";
import Story from "./Pages/Story/Story";
import Services from "./Pages/Services/Services";
import { useEffect } from "react";


// images

// images

// Material UI

// Material UI


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element:<Home/>,
      },
      {
        path:'about',
        element:<About/>,
      },
      {
        path:'contact',
        element:<Contact/>,
      },
      {
        path:'news',
        element:<News/>,
      },
      {
        path:'careers',
        element:<Career/>,
      },
      {
        path:'story',
        element:<Story/>,
      },
      {
        path:'gallery',
        element:<Gallery/>,
      },
      {
        path:'services',
        element:<Services/>,
      },
      {
        path:"*",
        element:<Nothing/>
      }
    ]
  }
])

function App()
{

  useEffect(() => {
    AOS.init();
  }, []);
  return <RouterProvider router={router}/>;
}

export default App;
