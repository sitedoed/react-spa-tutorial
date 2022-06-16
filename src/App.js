import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';
import Header from './components/Header';
import MainNav from './components/MainNav';
import SocialLinks from './components/SocialLinks';
import UsefulLinks from './components/UsefulLinks';
import WhyReact from './components/WhyReact';

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
