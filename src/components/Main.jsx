// COMPONENTS
import { Projects } from './Projects'

export const Main = () => {
  return (
    <main id='main'>
      <section id='introducingSection'>
        <div>
          <p>Hello, My name is</p>
          <h2>Carlos <span className='highlight'>Manuel Hernández</span>,<br />
            I am a Frontend developer
          </h2>
        </div>
        <div className='img-container'>
          <img src='./src/img/yo.jpg' />
        </div>
      </section>

      <section id='aboutSection'>
        <div>
          <img src='../src/img/CodeTyping.png' />
          <h2>About <span className='highlight'>Me</span></h2>
          <p>I am a self-taught <span className='highlight'>Frontend Junior Developer</span> passionated about creating interactive and engaging web experiences.</p>
          <p>With solid knowledge of HTML, CSS and JAVASCRIPT. Seeking for new oportunities to grow professionally and contribute my creativity and technic skills in a collaborative enviroment.</p>
        </div>
      </section>

      <Projects />

      <section id='contactSection'>
        <h2>Contact <span className='highlight'>ME</span></h2>
        <div>
          <img
            src='./src/img/icons/email.png'
            className='icon'
            alt='email icon'
          />
          <p>carloshernandezp21@gmail.com</p>
        </div>
        <div>
          <img
            src='./src/img/icons/address.png'
            className='icon'
            alt='address icon'
          />
          <p>Valencia - España</p>
        </div>
        <div>
          <img
            src='./src/img/icons/phone.png'
            className='icon'
            alt='phone icon'
          />
          <p>+(34) 654-652-782</p>
        </div>
      </section>
    </main>
  )
}
