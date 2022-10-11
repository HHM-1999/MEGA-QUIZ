import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './App.css';
import Main from './Layouts/Main';
import Home from './Components/home/Home'
import Blog from './Components/blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          loader:()=>fetch(' https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
         {
      path: "/blog",
      element:<Blog></Blog>
      
    }
      ]
    },
   
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    
    </div>    
  );
}

export default App;
