import React from 'react';
import siteData from "./siteData"

const netflix = 'Netflix Original Series'
const watch = "Watch Now"

const App = () => {
    return (
        <>

            <h1 className='movieList'>Movies list</h1>
            <div className='list'>
                <div className='each-movie'>
                    <img src={siteData[0].thumbnail} alt='loading' width="250px" height="300px"></img>
                    <h1 className='title'>{siteData[0].title}</h1>
                    <a href={siteData[0].watchLink} target="_blank" rel="noreferrer" className='link spaceMargin'>{watch}</a>
                    <div className='netflix spaceMargin'>{netflix}</div>
                </div>


                <div className='each-movie'>
                    <img src={siteData[1].thumbnail} alt='loading' width="250px" height="300px"></img>
                    <h1 className='title'>{siteData[1].title}</h1>
                    <a href={siteData[1].watchLink} target="_blank" rel="noreferrer" className='link spaceMargin'>{watch}</a>
                    <div className='netflix spaceMargin'>{netflix}</div>
                </div>


                <div className='each-movie'>
                    <img src={siteData[2].thumbnail} alt='loading' width="250px" height="300px"></img>
                    <h1 className='title'>{siteData[2].title}</h1>
                    <a href={siteData[2].watchLink} target="_blank" rel="noreferrer" className='link spaceMargin'>{watch}</a>
                    <div className='netflix spaceMargin'>{netflix}</div>
                </div>
            </div>
        </>

    )
}

export default App