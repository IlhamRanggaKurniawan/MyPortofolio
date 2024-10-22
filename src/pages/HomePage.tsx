import Tile from '../components/Tile'
import expo from "../assets/expo-logo.webp"
import TileBoard from '../components/TileBoard'
import SplashScreen from '../components/SplashScreen'



const HomePage = () => {

  return (
    <div className='bg-[#3B3030] w-full h-[100vh]'>
      <SplashScreen />
      
      <TileBoard />
    </div>
  )
}

export default HomePage