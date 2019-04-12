import Settings from "../containers/Settings";
import Home from "../containers/Home";

export const paths = {
    SETTINGS: '/settings',
    HOME: '/'
}

const routes = [
    { path: paths.HOME, component: Home, title: 'Home', exact: true },
    { path: paths.SETTINGS, component: Settings, title: 'Settings', exact: false }
]

export default routes;