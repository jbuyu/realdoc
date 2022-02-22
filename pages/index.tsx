import Body from './components/Body'
import Choice from './components/Choice'
import Footer from './components/Footer'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Wave from './components/Wave'
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-center font-mono text-slate-700 ">
      <Header />
      <NavBar />
      <Body />
      <Choice />
      <Wave />

      <Footer />
    </div>
  )
}
