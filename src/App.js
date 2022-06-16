import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import MainNav from './components/MainNav';

function App() {
  return (
    <div className="App">
      <MainNav />
      <Header/>
    </div>
  );
}

export default App;
