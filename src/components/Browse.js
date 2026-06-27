import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';

const Browse = () => {

  //? Call the useNowPlayingMovies Hook Custom Hook
  useNowPlayingMovies();

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