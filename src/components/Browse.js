import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';
import addPopularMovie from '../hooks/usePopoularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptView = useSelector(store => store.gpt.showGptSearch);


  //? Call the useNowPlayingMovies Hook Custom Hook
  useNowPlayingMovies();
  addPopularMovie();
  useTopRated();
  useUpcoming();
  // console.log(useNowPlayingMovies());

  return (
    <div className=''>
      <Header />
      {showGptView ? <GPTSearch /> :
        <>
          <MainContainer />
          <SecondContainer />
        </>

      }

      {/* 
        MAinContainer 
          - VideoIn Bg 
          - Viedo Title
          - Viedo Description
        
        - SecondContainer
          - VideoList  * n
          - cards * n
     */}
    </div>
  )
}

export default Browse