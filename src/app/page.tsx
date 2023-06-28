import NavBar from './Components/NavBar'
import FindyourPerfectHome from './Components/SubComponents/FindyourPerfectHome'
import OptionsForAllTastes from './Components/SubComponents/OptionsForAllTastes'

export default function Page() {
  return (
    <>
      <NavBar />
      <main>
        <FindyourPerfectHome />
        <OptionsForAllTastes />
      </main>
    </>
  )
}
