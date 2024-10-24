import Tile from '../components/Tile'
import expo from "../assets/expo-logo.webp"
import TileBoard from '../components/TileBoard'
import ClockAnimation from '../components/ClockAnimation'



const HomePage = () => {

  return (
    <div className='bg-[#3B3030] w-full h-[100vh]'>
      <ClockAnimation >
        <TileBoard />
      </ClockAnimation>
    </div>
  )
}

export default HomePage