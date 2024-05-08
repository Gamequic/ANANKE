import './App.css';

import DCNavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Article from './components/Article.js'

import Content from './info.js';

function App() {
  return (
    <div className="App bg-background">
      <DCNavBar />

      <Article
        title='Sobre Nosotras'
        content={Content.Spanish.AboutUs}
        img={process.env.PUBLIC_URL + '/photos/decorations/aboutUs.jpg'}
      ></Article>

      <Article
        decorationIsOnLeft
        title='Contactanos'
      ></Article>

      <Article
        decorationIsNotImage
        title='Que es el tarot?'
      ></Article>

      <Article
        title='Visitanos'
      ></Article>

      <Footer></Footer>
    </div>
  )
}

export default App;
