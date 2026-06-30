import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';
import addPopularMovie from '../hooks/usePopoularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';

const Browse = () => {

  //? Call the useNowPlayingMovies Hook Custom Hook
  useNowPlayingMovies();
  addPopularMovie();
  useTopRated();
  useUpcoming();
  // console.log(useNowPlayingMovies());

  return (
    <div className=''>
      <Header />
      <MainContainer />
      <SecondContainer />

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