import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import Welcome from '../Components/SubComponents/About/Welcome'

export default function About() {
  return (
    <>
      <NavBar />
      <main>
        <Welcome />
      </main>
      <Footer />
    </>
  )
}
