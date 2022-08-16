import './App.css';
import logo from './image/WD.svg';
import laptop from './image/img-01.svg';
import numberItems from './image/numbers__item.svg'
import MyWorkPlay from './image/play.svg'
import myWork from './image/my_work.png'
import GalleryPicture from './image/img-04.jpg'
import GalleryPicture1 from './image/img-03.jpg'
import SectionSkillImage from './image/img-02.png'
import Microsoft from './image/microsoft.svg'
import socialImage from './image/social_vk.svg'






const Header = () => 
<header class="header">

<div class="header-wrap">

        <a href="#" class="logo">
            <img src={logo} alt="logo">
            </img>
        </a>

    <nav class="nav">

        <input type="checkbox" id="burger" class="burger-checkbox"></input>
        <label for="burger" class="burger">
            <span></span>
        </label>

        <ul class="header-list">
            <HeaderItem>
              ГЛАВНАЯ
            </HeaderItem>
          
           <HeaderItem url='https://google.com'>
             Об Авторе
           </HeaderItem>

           <HeaderItem>работы</HeaderItem>
            <HeaderItem>Процесс</HeaderItem>
             <HeaderItem>контакты</HeaderItem>
        </ul>
    </nav>

</div>


</header>

const HeaderItem = ({children='Главная', url='#'}) => 
    <li><a href={url} class="header-item">{children}</a></li>

const SectionBanner = ({children='SectionBanner'}) =>

<section className="section-banner">
<div class="container">
    <div class="banner-wrap">
        <div class="col col--img">
            <img src={laptop} alt="image description"></img>
        </div>
        <div class="col col--description">
            <header class="section-header">
                <h1 class="title">Дизайн и верстка</h1>
            </header>
            <div class="holder">
                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
            </div>
            <a href="#" class="btn">НАПИСАТЬ МНЕ</a>
        </div>
    </div>
</div>
</section>

const SectionHowWork = ({children='SectionHowWork'}) =>

<section class="my_work">
<div class="my_work__text">
    <h2>Как я работаю</h2>
    <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>    
</div>
<div class="my_work__video">

  <img src={myWork} alt="my_work"></img>
  <div class="play">
    <img src={MyWorkPlay}alt=""></img>
</div>
</div>
</section>

const SectionBlueBox = ({children='SectionBlueBox'}) =>
<>
  <div class="blue_box">
      <div class="blue_box__images">
        
        <img src={numberItems} alt="number_item"></img>
        <img src={numberItems} alt="number_item"></img>
        <img src={numberItems} alt="number_item"></img>
        <img src={numberItems} alt="number_item"></img>
        <img src={numberItems} alt="number_item"></img>
        <img src={numberItems} alt="number_item"></img>

      </div>
  </div>

</>

const SectionImage = ({children='SectionImage'}) =>
<>
 <div class="row">

    <a href="#" class="col"><img src={GalleryPicture}></img></a>
    <a href="#" class="col"><img src={GalleryPicture1}></img></a>
    <a href="#" class="col"><img src={GalleryPicture}></img></a>
    <a href="#" class="col"><img src={GalleryPicture1}></img></a>
    <a href="#" class="col"><img src={GalleryPicture}></img></a>
    <a href="#" class="col"><img src={GalleryPicture1}></img></a>
    <a href="#" class="col"><img src={GalleryPicture}></img></a>
    <a href="#" class="col"><img src={GalleryPicture1}></img></a>

 </div>
</>

const SectionSkill = ({children='SectionSkill'}) =>
<>
            <section class="section-skill">
                <div class="container">
                    <div class="skill-row">
                        <div class="skill-col skill-descr">
                            <header class="section-header">
                                <h2 class="title">Мои навыки</h2>
                            </header>
                            <div class="skill-box">
                                <div class="skill-this">
                                    <span class="skill-label">Adobe Photoshop</span>
                                    <div class="skill-loader">
                                        <div class="skill-load"></div>
                                    </div>
                                </div>
                                <div class="skill-this">
                                    <span class="skill-label">Adobe Photoshop</span>
                                    <div class="skill-loader">
                                        <div class="skill-load"></div>
                                    </div>
                                </div>
                                <div class="skill-this">
                                    <span class="skill-label">Adobe Photoshop</span>
                                    <div class="skill-loader">
                                        <div class="skill-load"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="skill-col skill-img"><img src={SectionSkillImage}></img></div>
                    </div>
                </div>
            </section>
</>


const SectionGallery = ({children='SectionGallery'}) => 
<section class="section-gellary">

 <SectionImage>

 </SectionImage>

</section>

const MicrosoftBox = ({children='MicrosoftBox'}) =>
<>
        <section class="microsoft_box">
                <div class="microsoft">

                    <img src={Microsoft} alt="microsoft"></img>
                    <img src={Microsoft} alt="microsoft"></img>
                    <img src={Microsoft} alt="microsoft"></img>
                    <img src={Microsoft} alt="microsoft"></img>
                </div>
        </section>
</>


const FeedBack = ({children='FeedBack'}) => 
<>
            <section class="feedback">
                <div class="feedback__col">

                    <h2>Хотите веб-сайт?</h2>

                    <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>

                </div>



                    <form class="form_action">

                            <input type="text" name="name" placeholder="Ваше имя"></input>

                            <input type="email" name="e-mail" placeholder="Ваш e-mail"></input>

                            <input type="text" name="text" placeholder="Сообщение"></input>

                            <a href="#" class="btn btn_send">Отправить</a>

                    </form>

            </section>
</>

const Main = () => 
<main class="main">
  <div class="wrapper">

  <SectionBanner>
 
  </SectionBanner>

           <div class="box_text_second">
                 <div class="about_me">
                     <h1>Обо мне</h1>
                     <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                 </div>
           </div>
 
 
    <SectionBlueBox>

    </SectionBlueBox>

    <SectionSkill>
      
    </SectionSkill>

    <SectionHowWork>

    </SectionHowWork>

    <SectionGallery>
      
    </SectionGallery>

    <MicrosoftBox>

    </MicrosoftBox>

    <FeedBack>

    </FeedBack>
 
  </div>


  
 


</main>



const SocialCol = ({children='SocialCol'}) => 
<div class="social_col">
      <img src={socialImage} alt="social_link"></img>
      <img src={socialImage} alt="social_link"></img>
      <img src={socialImage} alt="social_link"></img>
</div>

const Footer = () => 

    <footer class="footer">
      <div class="footer_col">
          <h3>Иванов Иван</h3>
          <p>(с) 2018. Все права защищены.</p>
      </div>
      <SocialCol>
        
      </SocialCol>
    </footer>

function App() {
  return (
  <>
    <Header />
    <Main />
    <Footer />
  </>
  );
}

export default App;
