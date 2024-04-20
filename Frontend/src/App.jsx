
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Mainlayout from './Pages/More/Mainlayout';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard';
import Integrations from './Pages/Integrations';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout/>,
      children: [
        {
          path: "/Home",
          element:<Home/>
        },
        {
          path: "/Dashboard",
          element:<Dashboard/>
        },
        {
          path: "/Integrations",
          element:<Integrations/>
        }

      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
