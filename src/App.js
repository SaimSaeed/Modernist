import './App.css';
import CardSection from './components/CardSection/CardSection';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import left from "./Assets/left.png"
import right from "./Assets/right.png"



function App() {
  return (
 <>
 <Header left={left} right={right}/>
 <CardSection/>
 <Footer/>
 </>
  );
}

export default App;
