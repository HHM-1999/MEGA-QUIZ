import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './App.css';
import Main from './Layouts/Main';
import Home from './Components/home/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          element: <Home></Home>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    
    </div>    
  );
}

export default App;
