import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Home/Authentication/Login";
import Register from "../Pages/Home/Authentication/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddPublisher from "../Pages/Dashboard/AddPublisher/AddPublisher";
import AddArticle from "../Pages/AddArticle/AddArticle";
import AllArticles from "../Pages/Dashboard/AllArticles/AllArticles";
import AllArticlesGeneral from "../Pages/AllArticlesGeneral/AllArticlesGeneral";
import ArticleDetail from "../Pages/ArticleDetail/ArticleDetail";
import Subscription from "../Pages/Subscription/Subscription";
import MyArticles from "../Pages/MyArticles/MyArticles";
import PrivateRouter from "./PrivateRoute";
import UpdatePage from "../Pages/MyArticles/UpdatePage/UpdatePage";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";


export const route = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/admin/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: '/admin/dashboard/addpublisher',
                        element: <AddPublisher></AddPublisher>
                    },
                    {
                        path: '/admin/dashboard/allusers',
                        element: <AllUsers></AllUsers>
                    },
                    {
                        path: '/admin/dashboard/allarticles',
                        element: <AllArticles></AllArticles>
                    },
                ]
            },
            
            {
                path: '/addarticle',
                element: <AddArticle></AddArticle>
            },
            
            {
                path: '/allarticles',
                element: <AllArticlesGeneral></AllArticlesGeneral>
            },
            {
                path: '/allarticles/articledetail/:id',
                element: <ArticleDetail></ArticleDetail>,
                loader: ({params})=> fetch(`http://localhost:5000/articles/${params.id}`)
            },
            {
                path: '/subscription',
                element: <Subscription></Subscription>
            },
            {
                path: '/myarticles',
                element: <PrivateRouter><MyArticles></MyArticles></PrivateRouter>,
            },
            {
                path: '/update/:id',
                element: <UpdatePage></UpdatePage>,
                loader: ({params})=>fetch(`http://localhost:5000/articles/${params.id}`)
            },

        ]
    }
])