import Home from '../containers/home';
import Auth from './../hoc/Auth';

const appRoutes = [
    {
        path: "/",
        title: "Home",
        component: Auth(Home)
    },
    {
        redirect: true,
        path: "*",
        to: "/",
        component: Auth(Home)
    }
];

export default appRoutes
