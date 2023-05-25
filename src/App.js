import Header from "./pages/Header";
import Section from "./pages/Section";
import Provider from "./context/SectionContext";
import Footer from "./pages/Footer";
import { Routes,Route,Link,NavLink } from "react-router-dom";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import SectionLayout from "./pages/SectionLayout";
import Url from "../src/pages/Url"
import "../src/index.css"
import { Profiles } from "react";
import Profil from "./pages/Profil";
import Login from "./pages/Login";
import LoginLayout from "./pages/LoginLayout";
import ProfilLayout from "./pages/ProfilLayout";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Provider>
        <Routes>
          <Route path="/" element={<SectionLayout/>}>
            <Route index={true} element={<Section/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="/profil" element={<LoginLayout><Profil/></LoginLayout>}/>
            <Route path="url/:id" element={<Url/>}/>
          </Route>

          <Route path="/login" element={<ProfilLayout/>}>
          <Route index={true} element={<Login/>}/>


          </Route>




{/* 
          <Route path="secLoy" element={<LoginLayout><Profil/></LoginLayout>}/>
          <Route path="login" element={<Login/>}/> */}

          {/* <Route path="/" element={<Section/>}/>
          <Route path="bloq" element={<Blog/>}/>
          <Route path="contact" element={<Contact/>}/> */}
        </Routes>
        {/* <Header/>
        <Section/>
        <Footer/> */}
      </Provider>

    </div>
  );
}

export default App;
