import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import AnimePage from "./pages/AnimePages/AnimePage";
import Layout from "./pages/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import FavoritoPage from "./pages/FavoritoPages/Fovorito";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path:"/",
                element:  <HomePage></HomePage>
            },
            {
                path: "/anime",
                element: <AnimePage></AnimePage>
            },
            {
                path: "/favorito",
                element: <FavoritoPage />,
                loader: async () => {
                    return fetch('https://api.jikan.moe/v4/anime?q=one piece')
                }
            }

        ], errorElement: <ErrorPage></ErrorPage>
    }

])
