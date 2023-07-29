import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';
import ServiceForms from './components/ServiceForms/ServiceForms';

function App() {
  return (
    <div className='container'>
      <Header />
      <div className='main-content'>
        <Navigation />
        <Main />
        <ServiceForms />
      </div>
     <Footer />
    </div>
  );
}

export default App;
