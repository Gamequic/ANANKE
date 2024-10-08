import './App.css';

import DCNavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Article from './components/Article/Article.js'
import ButtonSocialMedia from './components/ButtonSocialMedia/ButtonSocialMedia.js';
import CardsTarot from './components/Cards/Cards.js';

import Content from './info.js';

function App() {
  return (
    <div className="App bg-background">
      <DCNavBar />

      <Article
        decorationIsOnLeft
        title='Sobre Nosotras'
        content={Content.Spanish.AboutUs}
        img={process.env.PUBLIC_URL + '/photos/decorations/aboutUs.jpg'}
        background
      ></Article>

      <Article
        decorationIsNotImage
        title='Que es el tarot?'
        content={Content.Spanish.WhatisTarot}
      >
        <CardsTarot />
      </Article>

      <Article
        decorationIsOnLeft
        decorationOnTopMobile
        title='Contactanos'
        background
        content={(
          <div className="flex">
            <ButtonSocialMedia
              img={`${process.env.PUBLIC_URL}/photos/logos/socialMedia/Facebook.svg`}
              link={'https://www.facebook.com/share/tW1AuDbpccz5jY5g/?mibextid=qi2Omg/'}
            />
            <ButtonSocialMedia
              img={`${process.env.PUBLIC_URL}/photos/logos/socialMedia/Instagram.svg`}
              link={'https://www.instagram.com/ananke.mediumpsiquica?igsh=cXNtYW9xMDk1N2xz/'}
            />
            <ButtonSocialMedia
              img={`${process.env.PUBLIC_URL}/photos/logos/socialMedia/Facebook.svg`}
              link={'https://www.facebook.com/ZoEambarTarot/'}
              ZoeAmbar
            />
            <ButtonSocialMedia
              img={`${process.env.PUBLIC_URL}/photos/logos/socialMedia/Instagram.svg`}
              link={'https://www.instagram.com/zoeambartarot?igsh=MWE1NGRvNmFxM3Fk/'}
              ZoeAmbar
            />
            <ButtonSocialMedia
              img={`${process.env.PUBLIC_URL}/photos/logos/socialMedia/TikTok.svg`}
              link={'https://www.tiktok.com/@zoeambartarot?_t=8pmrcnbpKjt&_r=1'}
              ZoeAmbar
            />
        </div>
        )}
      ></Article>

      <Footer />
    </div>
  )
}

export default App;
