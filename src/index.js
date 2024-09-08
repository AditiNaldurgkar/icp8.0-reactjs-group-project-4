import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './views/Home/Home';
import Search from './views/Search/Search';
import 'remixicon/fonts/remixicon.css'


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
      path:"/",
      element:<Home />,
    },
    {
      path:"/search",
      element:<Search/>,
    }
])
root.render(<RouterProvider router={router}/>);



