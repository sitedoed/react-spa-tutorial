import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import MainNav from './components/MainNav';
import WhyReact from './components/WhyReact';

function App() {
  return (
    <div className="App">
      <MainNav />
      <Header/>
      <WhyReact />
    </div>
  );
}

export default App;
