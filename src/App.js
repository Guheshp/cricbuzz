import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Error from './components/Error';
import NavBar from './components/NavBar';
import Body from './components/Body';
import SubNavBar from './components/SubNavBar';
import Scorecard from './components/Scorecard';
import Squad from './components/Squad';


function Main() {

  return (
    <div className="px-60 ">
      <NavBar />
      <Body />

    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/scorecard",
        element: <Scorecard />
      },
      {
        path: "/squads",
        element: <Squad />
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
