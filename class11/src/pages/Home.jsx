import React, { lazy, Suspense } from 'react'
const Cards = lazy(() => import("../components/Cards"))

const Home = () => {
    return (
        <div>
            hello home
            <Suspense fallback={<h1> loading .....</h1>}>
                <Cards />
            </Suspense>
        </div>
    )
}

export default Home
