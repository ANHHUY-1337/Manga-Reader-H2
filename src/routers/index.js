import Home from "../pages/Home.js"
import Info from "../pages/Info.js"
import Read from "../pages/Read.js"
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/info/:slug', component: Info },
    { path: '/read/:slug/:id', component: Read },
]

export default publicRoutes