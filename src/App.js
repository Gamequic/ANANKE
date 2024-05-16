import './App.css';

import DCNavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Article from './components/Article.js'
import ButtonSocialMedia from './components/ButtonSocialMedia/ButtonSocialMedia.js';
import Map from './components/Map.js';
import CardsTarot from './components/Cards/Cards.js';

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
        content={(
          <div className="flex">
          <ButtonSocialMedia
            img={`${process.env.PUBLIC_URL}/photos/logos/socialMedia/Facebook.svg`}
            link={'https://www.facebook.com/somosuacj/'}
          />
          <ButtonSocialMedia
            img={`${process.env.PUBLIC_URL}/photos/logos/socialMedia/Instagram.svg`}
            link={'https://www.instagram.com/somosuacj/'}
          />
          <ButtonSocialMedia
            img={`${process.env.PUBLIC_URL}/photos/logos/socialMedia/YT.svg`}
            link={'https://www.youtube.com/UACJTV'}
          />
        </div>
        )}
      ></Article>

      <Article
        decorationIsNotImage
        title='Que es el tarot?'
        content={Content.Spanish.WhatisTarot}
      >
        <CardsTarot />
      </Article>

      <Article
        decorationIsNotImage
        decorationIsOnLeft
        title='Visitanos'
      >
        <Map></Map>
      </Article>

      <Footer></Footer>
    </div>
  )
}

export default App;
