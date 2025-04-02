import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Login, SignUp } from './pages/index.js'

// path: "/login",
//           element: (
//               <AuthLayout authentication={false}>
//                   <Login />
//               </AuthLayout>
//           ),

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
          path: "/login",
          element: (
                  <Login />
          ),
      },
      {
          path: "/signup",
          element: (
                  <SignUp />
          ),
      },
    ],
},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
