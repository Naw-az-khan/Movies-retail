import './Head.css'

function Head(){
    return(
        <div className='head'> 
            <a>
             <img className='img' src="https://mini-movie-app.netlify.app/static/media/reactMovie_logo.08494abf.png " alt="logo"></img>
        </a>
        <img className='img2' src='https://mini-movie-app.netlify.app/static/media/tmdb_logo.30cd724b.svg'></img>
        </div>
        
    );
}

export default Head;