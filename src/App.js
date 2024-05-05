import './App.css';

import DCNavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Article from './components/Article.js'

function App() {
  return (
    <div className="App bg-background">
      <DCNavBar></DCNavBar>
      <Article><h1>About us</h1></Article>
      <Article><h1>Call me</h1></Article>
      <Article><h1>Que es el tarot</h1></Article>
      <Article><h1>Location</h1></Article>
      <Footer></Footer>
    </div>
  )
}

export default App;
