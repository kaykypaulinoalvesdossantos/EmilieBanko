import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import FindyourPerfectHome from './Components/SubComponents/Home/FindyourPerfectHome'
import OptionsForAllTastes from './Components/SubComponents/Home/OptionsForAllTastes'
import ReserveNow from './Components/SubComponents/Home/ReserveNow'

export default function Page() {
  return (
    <>
      <NavBar />
      <main>
        <FindyourPerfectHome />
        <OptionsForAllTastes />
        <ReserveNow />
      </main>
      <Footer />
    </>
  )
}
