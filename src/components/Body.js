import Login from './Login'
import Browse from "./Browse"
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'


const Body = () => {


    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />

        },
        {
            path: "/Browse",
            element: <Browse />
        }
    ])

    return (
        <div className=''>
            {/* 
            the router provider or useNavigate can only use in the child component of the body whic is the appRouter component  */}
            <RouterProvider router={appRouter} />

        </div>
    )
}

export default Body