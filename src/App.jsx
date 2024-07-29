import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./routes/ItemListContainer.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage.jsx";
import ItemDetailContainer from "./routes/ItemDetailContainer.jsx";

const greeting = "Welcome to the best store for geeks!";
const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBar/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <ItemListContainer greeting={greeting}/> ,
            },
            {
                path: "/category/:categoryId",
                element: <ItemListContainer greeting={greeting}/> ,
            },
            {
                path: "/items/:itemId",
                element: <ItemDetailContainer/>,
            },
        ]
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App;