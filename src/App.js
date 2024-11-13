import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Error from './components/Error';
import NavBar from './components/NavBar';
import Body from './components/Body';


function Main() {

  return (
    <div className='border px-3'>
      <NavBar />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Body />
      },
    ],
    errorElement: <Error />
  }
])

function App() {
  return (
    <div className=''>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
