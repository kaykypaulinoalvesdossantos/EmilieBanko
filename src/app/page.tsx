import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import FindyourPerfectHome from './Components/SubComponents/Home/FindyourPerfectHome'
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
        <ReserveNow />
      </main>
      <Footer />
    </>
  )
}
