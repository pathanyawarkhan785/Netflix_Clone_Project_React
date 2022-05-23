import React from 'react';
import siteData from "./siteData"

const netflix = 'Netflix Original Series'
const watch = "Watch Now"

const App = () => {
    return (
        <>

            <h1 className='movieList'>Movies list</h1>
            <div className='list'>
                {siteData.map((movie) =>
                    <div className='each-movie'>
                        <img src={movie.thumbnail} alt='loading' width="250px" height="300px"></img>
                        <h1 className='title'>{movie.title}</h1>
                        <a href={movie.watchLink} target="_blank" rel="noreferrer" className='link spaceMargin'>{watch}</a>
                        <div className='netflix spaceMargin'>{netflix}</div>
                    </div>
                )}
            </div>
        </>
    )
}

export default App