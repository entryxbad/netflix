import React from 'react'
import Main from '../components/Main/Main'
import Row from '../components/Row/Row'
import requests from '../utils/Requests'

const Home = () => {
    return (
        <>
            <Main />
            <Row title='Upcoming' fetchURL={requests.requestUpcoming} />
            <Row title='Popular' fetchURL={requests.requestPopular} />
            <Row title='Top Rated' fetchURL={requests.requestTopRated} />
            <Row title='Trending' fetchURL={requests.requestTrending} />
            <Row title='Now Playing' fetchURL={requests.requestNowPlaying} />
        </>
    )
}

export default Home