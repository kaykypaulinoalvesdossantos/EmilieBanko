import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import Depositions from './Components/SubComponents/Home/Depositions'
import FindyourPerfectHome from './Components/SubComponents/Home/FindyourPerfectHome'
import Highlights from './Components/SubComponents/Home/Highlights'
import OptionsForAllTastes from './Components/SubComponents/Home/OptionsForAllTastes'

import ReserveNow from './Components/SubComponents/Home/ReserveNow'
import SliderFull from './Components/SubComponents/Home/SliderFull/SliderFull'

export default function Page() {
  return (
    <>
      <NavBar />
      <main>
        <SliderFull />
        <FindyourPerfectHome />
        <OptionsForAllTastes />
        <Highlights />
        <Depositions />
        <ReserveNow />
      </main>
      <Footer />
    </>
  )
}
