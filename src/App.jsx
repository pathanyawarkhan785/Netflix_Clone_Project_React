import React from 'react';
import siteData from "./siteData"
import Heading from './Heading';
import Images from './Images';

const netflix = 'Netflix Original Series'
const watch = "Watch Now"

const App = () => {
    return (
        <>
            <h1 className='movieList'>Movies list</h1>
            <div className='list'>
                {siteData.map((movie) =>
                    <div className='each-movie' key={movie.id}>
                        <Images thumbnail={movie.thumbnail} />
                        <Heading title={movie.title} />
                        <a href={movie.watchLink} target="_blank" rel="noreferrer" className='link spaceMargin'>{watch}</a>
                        <div className='netflix spaceMargin'>{netflix}</div>
                    </div>
                )}
            </div>
        </>
    )
}

export default App