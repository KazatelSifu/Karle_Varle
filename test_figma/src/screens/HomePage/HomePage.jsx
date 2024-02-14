import React from "react";
import { VuesaxBoldAndroid } from "../../icons/VuesaxBoldAndroid";
import { VuesaxBoldEye } from "../../icons/VuesaxBoldEye";
import { VuesaxBoldUser } from "../../icons/VuesaxBoldUser";
import { VuesaxBrokenCode } from "../../icons/VuesaxBrokenCode";
import { VuesaxJavascript } from "../../icons/VuesaxJavascript";
import { VuesaxOutlineRulerPen } from "../../icons/VuesaxOutlineRulerPen";
import { VuesaxRulerPen } from "../../icons/VuesaxRulerPen";
import "./style.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper"><section id="section1">Zdravím tě, já jsem</section></div>
          <p className="p">
            Student střední školy baltaci ve Zlíně. Je mi 19 let a zabývám se web designem a vytvářením webů, s tím že
            se stanu v budoucnu učitelem.
          </p>
          <div className="text-wrapper-2">Petr Zachariáš</div>
          <div className="overlap-group">
            <img className="ellipse" alt="Ellipse" src="/img/ellipse-1.png" />
            <div className="rectangle" />
          </div>
          <div className="projects-button">
            <a href="https://acme.cz/">
              <div className="text-wrapper-3">Web osobního obchodu</div>
            </a>
            <VuesaxBoldEye class="vuesax-bold-eye"/>
          </div>
          <div className="about-me-button">
            <a href="https://acme.cz/">
              <div className="text-wrapper-4">O mně</div>
            </a>
            <VuesaxBoldUser className="vuesax-bold-user" />
          </div>
        </div>

        <div className="text-wrapper-6"><section id="section3">Osobní Portfolio:</section></div>
        <div className="text-wrapper-7"><section id="section5">Kontaktuj mě:</section></div>
        <p className="text-wrapper-8">Líbí se ti moje práce? Kontaktuj mě.</p>
        <div className="text-wrapper-9">@2023 Petr Zachariáš</div>
        <div className="text-wrapper-10">Budoucí učitel</div>
        <div className="text-wrapper-11">Web Creator</div>
        <div className="text-wrapper-12">Web Designer</div>
        <div className="text-wrapper-13">Designed by @PetrZacharias</div>
        <p className="text-wrapper-14">Spoj se se mnou a zažij skvělou spolupráci.</p>
        <p className="text-wrapper-15">
          Pracoval jsem na mnoha projectech, ze kterých jsem čerpal spoustu znalostí a praxe. Toto jsou moje osobní a
          nejlepší aplikace, které jsem vytvořil.
        </p>

        <div className="text-wrapper-5"><section id="section2">O mně</section></div>
        <section id="section2">
          <div className="overlap-2">
            <div className="overlap-3">
              <div className="text-wrapper-16">1+</div>
              <p className="text-wrapper-17">
                Ahoj, jmenuji se Petr Zachariáš, jsem webový vývojář, návrhář uživatelského rozhraní a mobilní vývojář.
                Zdokonalil jsem si své dovednosti v oblasti vývoje webu a mám základní znalosti o zásadách návrhu
                uživatelského rozhraní. Zde jsou hlavní dovednosti, které mám.
              </p>
            </div>
            <p className="text-wrapper-18">
              Roky zkušeností. Specializuji se na vytváření aplikací a zároveň zajišťuji bezproblémový provoz webové
              zkušenosti pro koncové uživatele.
            </p>
          </div>
        </section>

        <div className="navbar">
          <div className="text-wrapper-19">Petr Zachariáš</div>
          <div className="navbar-2">
            <ul className="menu-list">
              <div className="text-wrapper-20"><li><a href="#section1">Domů</a></li></div>
              <div className="text-wrapper-21"><li><a href="#section2">O mně</a></li></div>
              <div className="text-wrapper-21"><li><a href="#section3">Portfolio</a></li></div>
              <div className="text-wrapper-21"><li><a href="#section4">Servis</a></li></div>
              <div className="text-wrapper-21"><li><a href="#section5">Kontakt</a></li></div>
              <div className="text-wrapper-21"><li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Reference</a></li></div>
              </ul>
            </div>

        </div>
        <div className="frame">
          <div className="overlap-4">
            <div className="flexcontainer">
              <p className="text">
                <span className="span">
                  Designový Vývojář
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="span">Pokročilý</span>
              </p>
            </div>
            <VuesaxOutlineRulerPen className="vuesax-outline-ruler" />
          </div>
          <div className="overlap-5">
            <div className="flexcontainer-2">
              <p className="span-wrapper">
                <span className="span">
                  Webový Vývojář
                  <br />
                </span>
              </p>
              <p className="span-wrapper">
                <span className="span">Pokročilý</span>
              </p>
            </div>
            <VuesaxBrokenCode className="vuesax-broken-code" />
          </div>
          <div className="overlap-group-2">
            <div className="flexcontainer-3">
              <p className="span-wrapper">
                <span className="span">
                  Mobilní Vývojář
                  <br />
                </span>
              </p>
              <p className="span-wrapper">
                <span className="span">Málo Pokročilý</span>
              </p>
            </div>
            <VuesaxBoldAndroid className="vuesax-bold-android" />
          </div>
          <div className="overlap-6">
            <div className="flexcontainer-4">
              <p className="span-wrapper">
                <span className="span">
                  Vývojář Pythonu
                  <br />
                </span>
              </p>
              <p className="span-wrapper">
                <span className="span">Začátečník</span>
              </p>
            </div>
            <img className="python-svg" alt="Python svg" src="/img/python-svg.png" />
          </div>
        </div>
        <div className="text-wrapper-22"><section id="section4">Servisy:</section></div>
        <div className="frame-2">
          <div className="div-2">
            <div className="UI-UX-designer">UI &amp; UX Designer</div>
            <VuesaxRulerPen className="vuesax-ruler-pen" />
            <p className="text-wrapper-23">Designování ve Figmě, Photoshopu a Adobe XD</p>
          </div>
          <div className="overlap-7">
            <div className="text-wrapper-24">Webový Vývojář</div>
            <VuesaxBrokenCode className="vuesax-code" />
            <p className="text-wrapper-25">
              Vytvářím krásné iterface s jednoduchým HTML, CSS a JavaScript a také frameworky jako Angular a ReactJS
            </p>
          </div>
          <div className="overlap-8">
            <div className="text-wrapper-26">Mobilní Vývojář</div>
            <VuesaxBoldAndroid className="vuesax-android" />
            <p className="text-wrapper-27">
              Jsem pokročilý mobilní vývojář. Mám zkušenosti s používáním Flutter a React Native.
            </p>
          </div>
          <div className="overlap-9">
            <div className="text-wrapper-28">Online Verzovací nástroje</div>
            <img className="vuesax-git-repo" alt="Vuesax git repo" src="/img/vuesax-git-repo.svg" />
            <div className="rectangle-2" />
            <p className="um-m-dob-e-pou-vat">Umím dobře používat systémy pro správu verzí a Git &amp; Mecurial.</p>
          </div>
          <div className="overlap-10">
            <div className="text-wrapper-29">NodeJS a React</div>
            <VuesaxJavascript className="vuesax-javascript" />
            <div className="div-2" />
            <p className="text-wrapper-30">
              Mám základní znalosti o Reactu. Mohu také vyvíjet aplikace pro všeobecné použití s ​​NodeJS
            </p>
          </div>
          <div className="overlap-11">
            <div className="text-wrapper-31">Úprava Webů</div>
            <p className="text-wrapper-32">
              Mohu shromažďovat obsah a data z webové stránky a poté s nimi manipulovat a analyzovat podle potřeby.
            </p>
            <div className="rectangle-3" />
            <img className="vuesax-slider" alt="Vuesax slider" src="/img/vuesax-slider.svg" />
          </div>
        </div>
        <div className="overlap-12">
          <div className="text-wrapper-33">Poke Maps</div>
          <p className="text-wrapper-34">
            Mapy eventu, nejčastějších pokemonů a nejlepší lokace na shiny a vzácné pokémony.
          </p>
          <div className="thumbnail">
            <div className="rectangle-4" />
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-35">Github Repo</div>
          </div>
          <div className="about-me-button-2">
            <div className="text-wrapper-36">View Live</div>
          </div>
        </div>
        <div className="overlap-13">
          <p className="text-wrapper-37">Aplikace na streamování na vašem telefonu, streamujte a sledujte ostatní.</p>
          <div className="text-wrapper-38">LIVENTS</div>
          <div className="rectangle-wrapper">
            <div className="rectangle-4" />
          </div>
          <div className="projects-button-2">
            <div className="text-wrapper-35">Github Repo</div>
          </div>
          <div className="about-me-button-3">
            <div className="text-wrapper-36">View Live</div>
          </div>
        </div>
        <div className="overlap-14">
          <p className="text-wrapper-39">Aplikace na aktuální polohu objednávky v reálném čase. Stále se vyvýjí.</p>
          <div className="text-wrapper-38">MOVE A$$</div>
          <div className="thumbnail-2">
            <div className="rectangle-4" />
          </div>
          <div className="projects-button-3">
            <div className="text-wrapper-35">Github Repo</div>
          </div>
          <div className="about-me-button-4">
            <div className="text-wrapper-36">View Live</div>
          </div>
        </div>
        <form action="mailto:pitr.zach@post.cz" method="post" >
          <div className="overlap-15">
            <label htmlFor="jmeno" className="text-wrapper-40">Jméno:<input type="text" id="jmeno" name="jmeno"/></label>

          </div>

          <div className="overlap-16">
            <label htmlFor="email" className="text-wrapper-40">Email:<input type="email" id="email" name="email" /></label>

          </div>

          <div className="overlap-17">
            <label htmlFor="zprava" className="text-wrapper-41">Zpráva:<textarea id="zprava" name="zprava"></textarea></label>

          </div>

          <div className="overlap-18">
            <button type="submit" className="text-wrapper-42">Send</button>
          </div>
        </form>





      </div>
    </div>
  );
};
