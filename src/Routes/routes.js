import RegistrationPage from "../Pages/PublicPages/RegistrationPage";
import LoginPage from "../Pages/PublicPages/LoginPage";
import HomePage from "../Pages/PrivatePages/HomePage"
import TodoPage from "../Pages/PrivatePages/TodoPage";

const ROUTES = {
    PUBLIC_ROUTES:[
        {
            name: 'Sign up',
            path: '/registration',
            component: <RegistrationPage/>,
        }, 
        {
            name: 'Sign in',
            path: '/login',
            component: <LoginPage/>,
        },
    ],

    PRIVATE_ROUTES:[
        {
            name: 'Home',
            path: '/home',
            component: <HomePage/>,
            }, 
            {
            name: 'Todo',
            path: '/todo/:id',
            component: <TodoPage/>,
            },
            {
            name: 'Sign up',
            path: '/registration',
            component: <RegistrationPage/>,
            }, 
            {
            name: 'Sign in',
            path: '/login',
            component: <LoginPage/>,
            },
    ],
};

export default ROUTES