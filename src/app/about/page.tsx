import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import Welcome from '../Components/SubComponents/About/Welcome'
import Maps from '../Components/SubComponents/About/Maps'
import Contact from '../Components/SubComponents/About/Contact'

export default function About() {
  return (
    <>
      <NavBar />
      <main>
        <Welcome />
        <Maps />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
