import BlogSection from "./components/BlogSection"
import ExploreTopics from "./components/ExploreTopics"
import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import InfoSection from "./components/InfoSection"
import NavBar from "./components/NavBar"
import Testimonials from "./components/Testimonials"
import TrendingCourses from "./components/TrendingCourses"
import WorldClassSection from "./components/WorldClassSection"

function App() {

  return (
    <div>
      <NavBar />
      <Hero />
      <InfoSection />
      <FeatureSection />
      <TrendingCourses />
      <WorldClassSection />
      <ExploreTopics />
      <Testimonials />
      <BlogSection />
      <Footer />
    </div>
  )
}

export default App
