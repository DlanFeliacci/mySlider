import './App.css';
import Slider from './components/Slider'
import TextTop from './components/TextTop'
// import dataSlider from './components/dataSlider'

function App() {
  return (
    <div className="App">
      <TextTop />
      <Slider />
      <div style={{textAlign: 'center', marginTop: '40px', fontWeight: 'bolder', color: '#303548'}}>By Adlene Feliachi</div>
    </div>
  );
}

export default App;
