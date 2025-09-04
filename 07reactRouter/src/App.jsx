
import './App.css'

import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import Layout from './layout.jsx'
import Home from './componenets/Home/Home.jsx'
import About from './componenets/About/About.jsx'
import Contact from './componenets/Contact/Contact.jsx'
import User from './componenets/User/User.jsx'
import Github, { githubInfo } from './componenets/Github/Github.jsx'

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: "",
  //         element: <Home />
  //       },
  //       {
  //         path:"about",
  //         element:<About />
  //       },
  //       {
  //         path:"contact",
  //         element:<Contact />
  //       }

  //     ]
  //   }
  // ])


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='user/:id' element={<User />} />
        <Route path='github' element={<Github />}
          loader={githubInfo}
        />
      </Route>
    )



  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
