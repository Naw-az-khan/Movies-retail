import SearchIcon from '@mui/icons-material/Search';
import './Search.css'
function Search(){
    return(
        <div className='box'>
           <section className='mar'>
           <SearchIcon color="primary"/>
           </section>
            
            <input type="text" className='text' placeholder='Search Movie and click Enter' />

        </div>

    );

}
export default Search;