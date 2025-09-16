
import './App.css'
import TourCard from './Components/TourCard'
import AboutPage from './pages/AboutPage'
import ActivitiesDetailsPage from './pages/ActivitiesDetailsPage'
import ActivitiesPage from './pages/ActivitiesPage'
import BlogDetailsPage from './pages/BlogDetailsPage'
import BlogPage from './pages/BlogPage'
import BlogWithSliderPages from './pages/BlogWithSliderPages'
import DestinationDetailsPage from './pages/DestinationDetailsPage'
import DestinationPage from './pages/DestinationPage'
import Home from './pages/Home'
import OurFaqPage from './pages/OurFaqPage'
import TeamDetailsPage from './pages/TeamDetailsPage'
import TeamPage from './pages/TeamPage'
import TourDetailsPage from './pages/TourDetailsPage'
import TourPage from './pages/TourPage'
import ContactPage from "./pages/ContactPage"
import { Route, Routes } from 'react-router-dom'
import GlobalHeader from './Components/GlobalHeader'
import BookingPage from "./pages/BookingPage"
import UserProfile from "./pages/UserProfile"
import AuthPage from './pages/AutPage'



function App() {
  return (
    <section>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/aboutPage' element={<AboutPage></AboutPage>}/>
        <Route path='/destinationPage' element={<DestinationPage></DestinationPage>}/>
        <Route path='/bookingPage' element={<BookingPage></BookingPage>}/>
        <Route path='/destinationDetails' element={<DestinationDetailsPage></DestinationDetailsPage>}/>
        <Route path='/tourPage' element={<TourPage></TourPage>}/>
        <Route path='/tourDetails' element={<TourDetailsPage></TourDetailsPage>}/>
        <Route path='/activitiesPage' element={<ActivitiesPage></ActivitiesPage>}/>
        <Route path='/activitiesDetails' element={<ActivitiesDetailsPage></ActivitiesDetailsPage>}/>
        <Route path='/teamPage' element={<TeamPage></TeamPage>}/>
        <Route path='/teamDetails' element={<TeamDetailsPage></TeamDetailsPage>}/>
        <Route path='/faqpage' element={<OurFaqPage></OurFaqPage>}/>
        <Route path='/blogPage' element={<BlogPage></BlogPage>}/>
        <Route path='/blogSlider' element={<BlogWithSliderPages></BlogWithSliderPages>}/>
        <Route path='/blogDetails' element={<BlogDetailsPage></BlogDetailsPage>}/>
        <Route path='/contactPage' element={<ContactPage></ContactPage>}/>
        <Route path='/userProfile' element={<UserProfile></UserProfile>}/>
        <Route path='/authPage' element={<AuthPage></AuthPage>}/>
      </Routes>
    </section>
  )

}

export default App
