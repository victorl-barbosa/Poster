import Card from "./components/Card";
import swPosterImg from './assets/ba9464145eba8762f6286a3c8387c951 (1).jpg'
import esbPosterImg from './assets/esb-poster.jpg'
import rotjPosterImg from './assets/rotj-poster.jpg'

function App() {
  return (
    <>
      <Card title="Pôster: Star Wars (1977)" posterImg={swPosterImg}/>
      <Card title="Pôster: Empire Stikes Back (1980)" posterImg={esbPosterImg}/>
      <Card title="Pôster: Return of the Jedi (1983)" posterImg={rotjPosterImg}/>
    </>
  );
}

export default App;