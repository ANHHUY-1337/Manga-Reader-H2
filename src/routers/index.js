import Home from "../pages/Home.js"
import Info from "../pages/Info.js"
import Read from "../pages/Read.js"
import Search from "../pages/Search.js"
import Archive from "../pages/Archive.js"
import History from "../pages/History.js"

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/info/:slug', component: Info },
    { path: '/read/:slug/:id', component: Read },
    { path: '/search/:query', component: Search },
    { path: '/detail/danh-sach/truyen-moi', component: Home },
    { path: '/archive', component: Archive },
    { path: '/history', component: History },
]

export default publicRoutes