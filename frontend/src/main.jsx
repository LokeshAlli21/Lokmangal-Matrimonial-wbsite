import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, LoginPage, SignUpPage } from './pages/index.js'
import { Provider } from 'react-redux'
import store from './store/store.js'
import AuthLayout from './components/AuthLayout.jsx'

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
              <AuthLayout authentication={false}>
                  <LoginPage />
              </AuthLayout>
          ),
        },
        {
          path: "/signup",
          element: (
              <AuthLayout authentication={false}>
                  <SignUpPage  />
              </AuthLayout>
          ),
        },
    ],
  },  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
