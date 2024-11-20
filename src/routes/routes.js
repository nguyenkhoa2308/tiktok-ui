import config from '~/config';

//Layout
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Live from '~/pages/Live';
import Explore from '~/pages/Explore';
import Friends from '~/pages/Friends';
import Messages from '~/pages/Messages';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.live, component: Live },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.friends, component: Friends },
    { path: config.routes.messages, component: Messages, layout: HeaderOnly },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
