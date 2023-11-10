import Navbar from './Navbar'
import Banner from './Banner'
import Section from './Section'
import Carousel from './Carousel'
import Sectiontwo from './Sectiontwo'
import Footer from './Footer'
import './index.css'

function App() {
  
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Section />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <Sectiontwo />
      </div>
      <Footer />
    </>
  )
}

export default App
