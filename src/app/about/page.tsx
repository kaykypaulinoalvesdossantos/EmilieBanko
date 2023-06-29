import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import Welcome from '../Components/SubComponents/About/Welcome'
import Maps from '../Components/SubComponents/About/Maps'

export default function About() {
  return (
    <>
      <NavBar />
      <main>
        <Welcome />
        <Maps />
      </main>
      <Footer />
    </>
  )
}
