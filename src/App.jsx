import './App.css'
import AchievementsSection from './components/Achievements/AchievementsSection'
import ContactSection from './components/Contact/ContactSection'
import EducationSection from './components/Education/EducationSection'
import ExperienceSection from './components/Experience/ExperienceSection'
import Hero from './components/Hero/Hero'
import NavContainer from './components/Navbar/NavContainer'
import ProjectsSection from './components/Projects/ProjectsSection'
import ScrollTopBtn from './components/ScrollToTop/ScrollTopBtn'
import SkillSection from './components/Skills/SkillSection'

function App() {

  return (
    <div className='div'>
    <NavContainer />
    <Hero />
    <SkillSection/>
    <ExperienceSection/>
    <ProjectsSection/>
    <EducationSection/>
    <AchievementsSection/>
    <ContactSection/>
    <ScrollTopBtn/>
    </div>
  )
}

export default App
