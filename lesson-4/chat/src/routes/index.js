import Settings from "../containers/Settings";
import Home from "../containers/Home";

export const paths = {
    SETTINGS: '/settings',
    HOME: '/'
}

export default routes = [
    { path: paths.SETTINGS, component: Settings },
    { path: paths.HOME, component: Home }
]