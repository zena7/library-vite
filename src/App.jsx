import "normalize.css";
import "./App.css";
import { Header } from "./header/Header";
import { Section } from "./shared/ui/Section/Section";
import { Slider } from "./slider/Slider";

function App() {
  return (
    <>
      <main>
        <Header />
        <Section className='welcome' id='welcome'>
          <h2>
            welcome
            <br /> to the brooklyn <br /> library
          </h2>
        </Section>
        <Section className='about' id='about'>
          <h2>About</h2>
          <p>
            The Brooklyn Library is a free workspace, a large number of books
            and a cozy coffee shop inside{" "}
          </p>
          <Slider />
        </Section>
        <Section className='favorites' id='favorites'>
          <h2>Favorites</h2>
        </Section>
        <Section className='coffeeShop' id='coffeeShop'>
          <h2>Coffee shop</h2>
          <p>
            In our library, we have of cozy coffee shop, welcoming in customers
            with frothy cappuccinos and friendly conversation. you can get a
            favorite book and read in coffee shop. Our barista to cook you best
            coffee, and also you can try desserts from bakery.
          </p>
          <h3>Coffee & Tea</h3>
          <ul>
            <li>Cold Brew Coffee</li>
            <li>French Press Pot</li>
            <li>Espresso</li>
            <li>Cappuccino</li>
            <li>Hot tea</li>
            <li>Cold tea</li>
          </ul>
          <h3>Desserts & Cakes </h3>
          <ul>
            <li>Cold Brew Coffee</li>
            <li>French Press Pot</li>
            <li>Espresso</li>
            <li>Cappuccino</li>
            <li>Hot tea</li>
            <li>Cold tea</li>
          </ul>
        </Section>
        <Section className='contacts' id='contacts'>
          <h2>Our Contacts</h2>
          {/* <iframe
            src='https://yandex.ru/map-widget/v1/?um=constructor%3Ac93972da89a32fd07a8439f24089948346489379cc6d0add0b735b3a7348e94e&amp;source=constructor'
            width='70%'
            height='400'
            frameBorder='0'></iframe> */}
        </Section>
        <Section className='libraryCard' id='libraryCard'>
          <h2>Digital Library Cards</h2>
        </Section>
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
