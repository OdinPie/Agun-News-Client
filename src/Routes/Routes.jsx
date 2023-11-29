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
                element: <Dashboard></Dashboard>
            },
            {
                path: '/admin/addpublisher',
                element: <AddPublisher></AddPublisher>
            },
            {
                path: '/addarticle',
                element: <AddArticle></AddArticle>
            },
            {
                path: '/admin/allarticles',
                element: <AllArticles></AllArticles>
            },
            {
                path: '/allarticles',
                element: <AllArticlesGeneral></AllArticlesGeneral>
            },
            {
                path: '/allarticles/articledetail/:id',
                element: <ArticleDetail></ArticleDetail>,
                loader: ({params})=> fetch(`http://localhost:5000/articles/${params.id}`)
            }
        ]
    }
])