import './App.css'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {RootLayout} from "./components/layout/RootLayout.tsx";
import {NotFoundPage} from "./pages/NotFoundPage.tsx";
import {UserSignUpPage} from "./pages/UserSignUpPage.tsx";
import {UserSignInPage} from "./pages/UserSignInPage.tsx";
import {DashboardPage} from "./pages/DashboardPage.tsx";
import {FieldsPage} from "./pages/FieldsPage.tsx";
import {CropsPage} from "./pages/CropsPage.tsx";
import {StaffPage} from "./pages/StaffPage.tsx";
import {LogsPage} from "./pages/LogsPage.tsx";
import {VehiclePage} from "./pages/VehiclePage.tsx";
import {EquipmentPage} from "./pages/EquipmentPage.tsx";

function App() {

    const routes = createBrowserRouter([
        {
            path: '',
            element : <RootLayout />,
            children : [
                { path: '', element: <Navigate to="/signin" replace /> },
                { path : '/signin', element : <UserSignInPage/>},
                { path : '/signup', element : <UserSignUpPage/>},
                { path : '/dashboard', element : <DashboardPage/>},
                { path : '/dashboard/fields', element : <FieldsPage/> },
                { path: '/dashboard/crops', element: <CropsPage/> },
                { path: '/dashboard/staffs', element: <StaffPage /> },
                { path: '/dashboard/logs', element: <LogsPage/> },
                { path: '/dashboard/vehicles', element: <VehiclePage/> },
                { path: '/dashboard/equipment', element: <EquipmentPage/> },
                { path: '/logout', element: <Navigate to="/signin" replace /> },
            ]
        },
        {
            path: "*",
            element: <NotFoundPage/>
        }
    ])

    return (
        <>
            <RouterProvider router={routes} />
        </>
    )
}

export default App