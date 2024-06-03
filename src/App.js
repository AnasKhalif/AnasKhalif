import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </main>
    </>
  );
}

export default App;
