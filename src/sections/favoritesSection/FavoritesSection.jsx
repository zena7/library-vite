import { useState } from "react";
import { Section } from "../../shared/ui/Section/Section";
import winterBook1 from "../../assets/favoritesSection/winter/book.jpg";
import winterBook2 from "../../assets/favoritesSection/winter/book-1.jpg";
import winterBook3 from "../../assets/favoritesSection/winter/book-2.jpg";
import winterBook4 from "../../assets/favoritesSection/winter/book-3.jpg";
import summerBook1 from "../../assets/favoritesSection/summer/book.jpg";
import summerBook2 from "../../assets/favoritesSection/summer/book-1.jpg";
import summerBook3 from "../../assets/favoritesSection/summer/book-2.jpg";
import summerBook4 from "../../assets/favoritesSection/summer/book-3.jpg";
import springBook1 from "../../assets/favoritesSection/spring/book.jpg";
import springBook2 from "../../assets/favoritesSection/spring/book-1.jpg";
import springBook3 from "../../assets/favoritesSection/spring/book-2.jpg";
import springBook4 from "../../assets/favoritesSection/spring/book-3.jpg";
import autumnBook1 from "../../assets/favoritesSection/autumn/book.png";
import autumnBook2 from "../../assets/favoritesSection/autumn/book-1.png";
import autumnBook3 from "../../assets/favoritesSection/autumn/book-2.png";
import autumnBook4 from "../../assets/favoritesSection/autumn/book-3.png";
import * as classes from "./FavoritesSection.module.css";

export function FavoritesSection() {
  const [season, setSeason] = useState("winter");

  const handleSeasonChange = (event) => {
    setSeason(event.target.value);
  };

  const favoritesBooks = {
    winter: [
      {
        title: "the book eaters",
        author: "Sunyi Dean",
        about:
          "An Unusual Sci-Fi Story About A Book Eater Woman Who Tries Desperately To Save Her Dangerous Mind-Eater Son From Tradition And Certain Death. Complete With Dysfunctional Family Values, Light Sapphic Romance, And A Strong, Complex Protagonist. Not For The Faint Of Heart.",
        imgSrc: winterBook1,
      },
      {
        title: "cacle",
        author: " Rachel Harrison",
        about:
          "Are Your Halloween Movies Of Choice The Witches Of Eastwick And Practical Magic? Look No Further Than Here - Where A Woman Recovering From A Breakup Moves To A Quaint Town In Upstate New York And Befriends A Beautiful Witch.",
        imgSrc: winterBook2,
      },
      {
        title: "dante: poet of the secular world",
        author: "Erich Auerbachcacle",
        about:
          "Auerbach's Engaging Book Places The 'Comedy' Within The Tradition Of Epic, Tragedy, And Philosophy In General, Arguing For Dante's Uniqueness As One Who Raised The Individual And His Drama Of Soul Into Something Of Divine Significance—An Inspired Introduction To Dante's Main Themes.",
        imgSrc: winterBook3,
      },
      {
        title: "the last queen",
        author: "Clive Irving",
        about:
          "A Timely And Revelatory New Biography Of Queen Elizabeth (And Her Family) Exploring How The Windsors Have Evolved And Thrived As The Modern World Has Changed Around Them",
        imgSrc: winterBook4,
      },
    ],
    spring: [
      {
        title: "the body",
        author: " Stephen King",
        about:
          "Powerful Novel That Takes You Back To A Nostalgic Time, Exploring Both The Beauty And Danger And Loss Of Innocence That Is Youth",
        imgSrc: springBook1,
      },
      {
        title: "CARRY: A MEMOIR OF SURVIVAL ON STOLEN LAND",
        author: "Toni Jenson",
        about:
          "This Memoir About The Author's Relationship With Gun Violence Feels Both Expansive And Intimate, Resulting In A Lyrical Indictment Of The Way Things Are.",
        imgSrc: springBook2,
      },
      {
        title: "DAYS OF DISTRACTION",
        author: "Alexandra Chang",
        about:
          "A Sardonic View Of Silicon Valley Culture, A Meditation On Race, And A Journal Of Displacement And Belonging, All In One Form-Defying Package Of Spare Prose.",
        imgSrc: springBook3,
      },
      {
        title: "DOMINICANA",
        author: " Angie Cruz",
        about:
          "A Fascinating Story Of A Teenage Girl Who Marries A Man Twice Her Age With The Promise To Bring Her To America. Her Marriage Is An Opportunity For Her Family To Eventually Immigrate. For Fans Of Isabel Allende And Julia Alvarez.",
        imgSrc: springBook4,
      },
    ],
    summer: [
      {
        title: "CRUDE: A MEMOIR",
        author: " Pablo Fajardo & Sophie Tardy-Joubert",
        about:
          "Drawing And Color By Damien Roudeau | This Book Illustrates The Struggles Of A Group Of Indigenous Ecuadoreans As They Try To Sue The ChevronTexaco Company For Damage Their Oil Fields Did To The Amazon And Her People",
        imgSrc: summerBook1,
      },
      {
        title: "LET MY PEOPLE GO SURFING",
        author: " Yvon Chouinard",
        about:
          "Chouinard—Climber, Businessman, Environmentalist—Shares Tales Of Courage And Persistence From His Experience Of Founding And Leading Patagonia, Inc. Full Title: Let My People Go Surfing: The Education Of A Reluctant Businessman, Including 10 More Years Of Business Unusual.",
        imgSrc: summerBook2,
      },
      {
        title: "THE OCTOPUS MUSEUM: POEMS",
        author: "Brenda Shaughnessy",
        about:
          "This Collection Of Bold And Scathingly Beautiful Feminist Poems Imagines What Comes After Our Current Age Of Environmental Destruction, Racism, Sexism, And Divisive Politics.",
        imgSrc: summerBook3,
      },
      {
        title: "SHARK DIALOGUES: A NOVEL",
        author: " Kiana Davenport",
        about:
          "An Epic Saga Of Seven Generations Of One Family Encompasses The Tumultuous History Of Hawaii As A Hawaiian Woman Gathers Her Four Granddaughters Together In An Erotic Tale Of Villains And Dreamers, Queens And Revolutionaries, Lepers And Healers.",
        imgSrc: summerBook4,
      },
    ],
    autumn: [
      {
        title: "CASUAL CONVERSATION",
        author: "Renia White",
        about:
          "White's Impressive Debut Collection Takes Readers Through And Beyond The Concepts Of Conversation And The Casual - Both What We Say To Each Other And What We Don't, Examining The Possibilities Around How We Construct And Communicate Identity.",
        imgSrc: autumnBook1,
      },
      {
        title: "THE GREAT FIRE",
        author: "Lou Ureneck",
        about:
          "The Harrowing Story Of An Ordinary American And A Principled Naval Officer Who, Horrified By The Burning Of Smyrna, Led An Extraordinary Rescue Effort That Saved A Quarter Of A Million Refugees From The Armenian Genocide",
        imgSrc: autumnBook2,
      },
      {
        title: "RICKEY: THE LIFE AND LEGEND",
        author: "Howard Bryant",
        about:
          "With The Fall Rolling Around, One Can't Help But Think Of Baseball's Postseason Coming Up! And What Better Way To Prepare For It Than Reading The Biography Of One Of The Game's All-Time Greatest Performers, The Man Of Steal, Rickey Henderson?",
        imgSrc: autumnBook3,
      },
      {
        title: "SLUG: AND OTHER STORIES",
        author: "Megan Milks",
        about:
          "Exes Tegan And Sara Find Themselves Chained Together By Hairballs Of Codependency. A Father And Child Experience The Shared Trauma Of Giving Birth To Gods From Their Wounds.",
        imgSrc: autumnBook4,
      },
    ],
  };

  return (
    <Section className={classes.favoritesSection} id='favorites'>
      <h2>Favorites</h2>
      <p className={classes.chooseFavPhrase}>Pick favorites of season</p>
      <div
        className={classes.chooseSeason}
        onChange={(event) => handleSeasonChange(event)}>
        <input
          type='radio'
          name='season'
          id='winter'
          value='winter'
          checked={season === "winter"}></input>
        <label
          htmlFor='winter'
          className={season === "winter" && classes.activeLabel}>
          Winter
        </label>
        <input type='radio' name='season' id='spring' value='spring'></input>
        <label
          htmlFor='spring'
          className={season === "spring" && classes.activeLabel}>
          Spring
        </label>
        <input type='radio' name='season' id='summer' value='summer'></input>
        <label
          htmlFor='summer'
          className={season === "summer" && classes.activeLabel}>
          Summer
        </label>
        <input type='radio' name='season' id='autumn' value='autumn'></input>
        <label
          htmlFor='autumn'
          className={season === "autumn" && classes.activeLabel}>
          Autumn
        </label>
      </div>
      <ul className={classes.listOfFavorites}>
        {favoritesBooks[season].map((item, index) => (
          <li key={`${season} - ${index}`} className={classes.listItem}>
            <p className={classes.paragraphPick}>Staff Picks</p>
            <div className={classes.bookInformation}>
              <p className={classes.bookTitle}>{item.title}</p>
              <h3 className={classes.bookAuthor}> By {item.author}</h3>
            </div>
            <p className={classes.paragraphAboutBook}>{item.about}</p>
            <img
              src={item.imgSrc}
              alt={`book - ${item.title} author - ${item.author}`}
              className={classes.bookImg}
            />
            <button type='button' className={classes.btnBuyBook}>
              {" "}
              Buy{" "}
            </button>
          </li>
        ))}
      </ul>
    </Section>
  );
}
