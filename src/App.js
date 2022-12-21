import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './App.css';
import Main from './Layouts/Main';
import Home from './Components/home/Home'
import Blog from './Components/blog/Blog';
import Mcq from './Components/MCQ/Mcq';
import SalesChart from './Components/SalesChart/SalesChart';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Home></Home>
        },
        {
          path: "/blog",
          element: <Blog></Blog>

        },
        {
          path: '/quiz/:id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Mcq></Mcq>
        },
        {
          path: "/staticties",
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <SalesChart></SalesChart>
        }

      ]
    },
    {
      path: '*',
      element: <div className='position-absolute bottom-50 end-50'>
        <h1>404</h1>
        <h2>Oops!! You're Lost 😥</h2>
        <p>The Page you are looking for was not found................</p>
      </div>

    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
