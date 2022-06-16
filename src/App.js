import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GetStarted from './components/GetStarted';
import Header from './components/Header';
import MainNav from './components/MainNav';
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
    </div>
  );
}

export default App;
