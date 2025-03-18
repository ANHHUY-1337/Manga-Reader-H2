import { Fragment } from 'react'

import { nowReleased, comicNew, completed, comingSoon } from '../api/'
import Comics from '../layout/components/Comics';

function Home() {
    return (
        <Fragment>
            <Comics api={comicNew}/>
            <Comics api={comingSoon}/>
            <Comics api={nowReleased}/>
            <Comics api={completed}/>
        </Fragment>
     );
}

export default Home;