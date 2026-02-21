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

import Dashboard from "./components/Dashboard"

function App() {

  return (
    <div>
      {/* <Dashboard /> */}
      <NavBar />
      <Hero />
      <section id="why-borcelle" className="scroll-mt-20">
        <InfoSection />
      </section>
      <FeatureSection />
      <section id="courses" className="scroll-mt-20">
        <TrendingCourses />
      </section>
      <section id="student-life" className="scroll-mt-20">
        <WorldClassSection />
      </section>
      <ExploreTopics />
      <section id="testimonials" className="scroll-mt-20">
        <Testimonials />
      </section>
      <section id="blog" className="scroll-mt-20">
        <BlogSection />
      </section>
      <Footer />
    </div>
  )
}

export default App
