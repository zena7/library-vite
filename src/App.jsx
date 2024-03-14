import "normalize.css";
import "./App.css";
import { Header } from "./header/Header";
import { Section } from "./shared/ui/Section/Section";
import { Slider } from "./slider/Slider";
import { useState } from "react";


function App() {
  const [season, setSeason] = useState("winter");

  const handleSeasonChange = (event) => {
    setSeason(event.target.value);
  };
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
          <p>Pick favorites of season</p>
          <div
            className='chooseSeason'
            onChange={(event) => handleSeasonChange(event)}>
            <input
              type='radio'
              name='season'
              id='winter'
              value='winter'></input>
            <label htmlFor='winter'>Winter</label>
            <input
              type='radio'
              name='season'
              id='spring'
              value='spring'></input>
            <label htmlFor='spring'>Spring</label>
            <input
              type='radio'
              name='season'
              id='summer'
              value='summer'></input>
            <label htmlFor='summer'>Summer</label>
            <input
              type='radio'
              name='season'
              id='autumn'
              value='autumn'></input>
            <label htmlFor='autumn'>Autumn</label>
          </div>
          <p>It's {season}</p>
        </Section>
        <Section className='coffeeShop' id='coffeeShop'>
          <h2>Coffee shop</h2>
          <p>
            In our library, we have of cozy coffee shop, welcoming in customers
            with frothy cappuccinos and friendly conversation. You can get a
            favorite book and read in coffee shop. Our barista to cook you best
            coffee, and also you can try desserts from bakery.
          </p>
          <div className='foodMenu'>
            <div className='drinks'>
              <h3>Coffee & Tea</h3>
              <ul>
                <li>
                  Cold Brew Coffee <span>$3</span>
                </li>
                <li>
                  French Press Pot <span>$5</span>
                </li>
                <li>
                  Espresso <span>$2</span>
                </li>
                <li>
                  Cappuccino <span>$4</span>
                </li>
                <li>
                  Hot tea <span>$2</span>
                </li>
                <li>
                  Cold tea <span>$2</span>
                </li>
              </ul>
            </div>
            <div className='desserts'>
              <h3>Desserts & Cakes </h3>
              <ul>
                <li>
                  Forest Gateau <span>$16</span>
                </li>
                <li>
                  Blue Moon <span>$16</span>
                </li>
                <li>
                  Truffle Cake <span>$15</span>
                </li>
                <li>
                  Chocolate Cake <span>$18</span>
                </li>
                <li>
                  Poet's Dream Cake <span>$16</span>
                </li>
                <li>
                  Pineapple Cake <span>$14</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>
        <Section className='contacts' id='contacts'>
          <h2>Our Contacts</h2>
          <h3>For all Library inquiries:</h3>
          <p>
            Please call (617) 730-2370
            <br /> For TTY service, please call (617)730-2370 <br />
            Putterham Library: (617) 730-2385
          </p>
          <h3>Senior Staff</h3>
          <p>
            Library Director: <span>Amanda Hirst</span>
          </p>
          <iframe
            src='https://yandex.ru/map-widget/v1/?um=constructor%3Ac93972da89a32fd07a8439f24089948346489379cc6d0add0b735b3a7348e94e&amp;source=constructor'
            width='70%'
            height='400'
            frameBorder='0'></iframe>

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
