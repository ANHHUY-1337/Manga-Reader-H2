import { Fragment } from 'react'

import { comicNew } from '../api/'
import Comics from '../layout/components/Comics';

function Home() {
    return (
        <Fragment>
            <Comics api={comicNew}/>
        </Fragment>
     );
}

export default Home;