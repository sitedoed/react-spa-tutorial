import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/style.css';
import './assets/css/animate.min.css';
import MainNav from './components/MainNav';
import Header from './components/Header';
import WhyReact from './components/WhyReact';
import GetStarted from './components/GetStarted';
import UsefulLinks from './components/UsefulLinks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';


function App() {
  return (
    <div className="App">
      <MainNav />
      <Header/>
      <WhyReact />
      <GetStarted />
      <UsefulLinks />
      <SocialLinks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
