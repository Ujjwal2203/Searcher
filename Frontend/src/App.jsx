
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Mainlayout from './Pages/More/Mainlayout';
import Home from './Pages/Home/Home';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout/>,
      children: [
        {
          path: "/",
          element:<Home/>
        },

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
