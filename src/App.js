
import './App.css';
import Noticeboard from './Components/Noticeboard';
import Header from './Components/Header';
import Searchbar from './Components/Searchbar';
import Landingpage from './Page/Landingpage';
import FeaturedCoarses from './Components/FeaturedCoarses';
import BottomSection from './Components/BottomSection';
import Quote from './Components/Quote';
import ContactAccelebrate from './Page/ContactAccelebrate';
import {
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Enterprise from './Page/Enterprise';
import Search from './Page/Search';
import AgileLeadership from './Page/AgileLeadership';
import AcLearningProcess from './Page/AcLearningProcess';
import NewCoarses from './Page/NewCoarses';
import Webinarvideos from './Page/Webinarvideos';
import Casestudies from './Page/Casestudies';

const App = () => {

  return (
    <div>
<Router>
<Header/>
<Searchbar/>

<Routes>
   <Route path="/" element={<Landingpage/>}/>
   <Route path="contact" element={<ContactAccelebrate/>}/>
   <Route path="enterprise" element={<Enterprise/>}/>
   <Route path="Search" element={<Search/>}/>
   <Route path="AgileLeadership" element={<AgileLeadership/>}/>
   <Route path="AgileLearningProcess" element={<AcLearningProcess/>}/>
   <Route path="NewCoarses" element={<NewCoarses/>}/>
   <Route path="Webinarvideos" element={<Webinarvideos/>}/>
   <Route path="Casestudies" element={<Casestudies/>}/>
</Routes>
<BottomSection/>
</Router>
      {/* <ContactAccelebrate/> */}
      </div>
  )


}

export default App;
