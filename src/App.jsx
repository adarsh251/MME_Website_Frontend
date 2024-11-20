
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
// import Programs from './Components/Programs/Programs'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import { BrowserRouter,Routes,Route } from 'react-router-dom';// line 1 added
import Footer from './Components/Footer/Footer'
import Wonder from './Components/Wonders/Wonder'
import Research from './Components/Research/Research'
import Page1 from './Components/Researchpages/Page1'
import Page2 from './Components/Researchpages/Page2'
import Page3 from './Components/Researchpages/Page3'
import Page4 from './Components/Researchpages/Page4'
import Page5 from './Components/Researchpages/Page5'
 
import Faculty from './Components/Faculty/Faculty'
import Facility from './Components/Facility/Facility'
import Facility1 from './Components/FacilityPages/Facility1'
import Facility2 from './Components/FacilityPages/Facility2'
import Facility3 from './Components/FacilityPages/Facility3'
import Facility4 from './Components/FacilityPages/Facility4'
import Facility5 from './Components/FacilityPages/Facility5'
import Facility6 from './Components/FacilityPages/Facility6'
import Facility7 from './Components/FacilityPages/Facility7'
import Facility8 from './Components/FacilityPages/Facility8'
import Admission from './Components/Admission/Admission'
import Career from './Components/Career/Career'
import Booking from './Components/Booking/Booking'
import EPage1 from './Components/ExtendedPages/Epage1'
import EPage2 from './Components/ExtendedPages/Epage2'
import EPage3 from './Components/ExtendedPages/Epage3'
import ScrollToTopLayout from './Components/ScrollTo/ScrollToTopLayout';
import Login from './Components/Admin/Login'
import PendingLabs from './Components/Admin/PendingLabs'
import NewBlog from './Components/Blog/NewBlog'
import BlogList from './Components/Blog/BlogList'
import BlogDetail from './Components/Blog/BlogDetail'
import PendingBlogs from './Components/Admin/PendingBlogs'
import Dashboard from './Components/Admin/Dashboard'

const App = () => {
  return (
    <BrowserRouter> 
    <div>
         
   
         
    <Navbar/>
       
       <Routes>
      

        <Route path="/" element={ <ScrollToTopLayout><Hero/></ScrollToTopLayout>}/>
           <Route path="/about" element={ <ScrollToTopLayout><About/></ScrollToTopLayout>} />
           {/* <Route path="/Programs" element={<ScrollToTopLayout><Programs/></ScrollToTopLayout>} /> */}
           <Route path="/contact" element={ <ScrollToTopLayout><Contact/></ScrollToTopLayout>} />
           <Route path="/wonder" element={<ScrollToTopLayout><Wonder/></ScrollToTopLayout>} />
           <Route path="/research" element={<ScrollToTopLayout><Research/></ScrollToTopLayout>} />
           <Route path="/booking" element={<ScrollToTopLayout><Booking/></ScrollToTopLayout>} />
           <Route path="/blog" element={<ScrollToTopLayout><BlogList/></ScrollToTopLayout>} />
           <Route path="/blog/:id" element={<ScrollToTopLayout><BlogDetail/></ScrollToTopLayout>} />
           <Route path="/blog/new" element={<ScrollToTopLayout><NewBlog/></ScrollToTopLayout>} />
           <Route path="/login" element={<ScrollToTopLayout><Login/></ScrollToTopLayout>} />
           <Route path="/admin/dashboard" element={<ScrollToTopLayout><Dashboard/></ScrollToTopLayout>} />
           <Route path="/admin/dashboard/labs" element={<ScrollToTopLayout><PendingLabs/></ScrollToTopLayout>} />
           <Route path="/admin/dashboard/blogs" element={<ScrollToTopLayout><PendingBlogs/></ScrollToTopLayout>} />
           
           <Route path="/page1" element={<ScrollToTopLayout><Page1/></ScrollToTopLayout>} />
           <Route path="/page2" element={<ScrollToTopLayout><Page2/></ScrollToTopLayout>} />
           <Route path="/page3" element={<ScrollToTopLayout><Page3/></ScrollToTopLayout>} />
           <Route path="/page4" element={<ScrollToTopLayout><Page4/></ScrollToTopLayout>} />
           <Route path="/page5" element={<ScrollToTopLayout><Page5/></ScrollToTopLayout>} />
          
           <Route path="/faculty" element={<ScrollToTopLayout><Faculty/></ScrollToTopLayout>} />
           <Route path="/facility" element={<ScrollToTopLayout><Facility/></ScrollToTopLayout>} />
           <Route path="/facility1" element={<ScrollToTopLayout><Facility1/></ScrollToTopLayout>} />
           <Route path="/facility2" element={<ScrollToTopLayout><Facility2/></ScrollToTopLayout>} />
           <Route path="/facility3" element={<ScrollToTopLayout><Facility3/></ScrollToTopLayout>} />
           <Route path="/facility4" element={<ScrollToTopLayout><Facility4/></ScrollToTopLayout>} />
           <Route path="/facility5" element={<ScrollToTopLayout><Facility5/></ScrollToTopLayout>} />
           <Route path="/facility6" element={<ScrollToTopLayout><Facility6/></ScrollToTopLayout>} />
           <Route path="/facility7" element={<ScrollToTopLayout><Facility7/></ScrollToTopLayout>} />
           <Route path="/facility8" element={<ScrollToTopLayout><Facility8/></ScrollToTopLayout>} />
           <Route path="/admission" element={<ScrollToTopLayout><Admission/></ScrollToTopLayout>} />
           <Route path="/career" element={<ScrollToTopLayout><Career/></ScrollToTopLayout>} />

           <Route path="/industry-consultancy" element={<ScrollToTopLayout><EPage1/></ScrollToTopLayout>} />
           <Route path="/training" element={<ScrollToTopLayout><EPage2/></ScrollToTopLayout>} />
           <Route path="/workshop" element={<ScrollToTopLayout><EPage3/></ScrollToTopLayout>} />
           
           
      



     

      </Routes>

      
      <Footer/>
      
    </div>
    </BrowserRouter>
  )
}

export default App
