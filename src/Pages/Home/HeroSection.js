import { Cursor , useTypewriter } from 'react-simple-typewriter'


export default function HeroSection() {

  const [text] = useTypewriter({
    words: ['prashant prajapati', 'react  developer', 'web designer'],
    loop: 0,
    typeSpeed:60,
    deleteSpeed:80,
    delaySpeed:1500

  })

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title" style={{fontSize:'30px',color:'blue'}}>Hey, I'm </p>
          <div className="hero--section--title">
            <span className="hero--section-title--color">{text}</span><span><Cursor/></span>
          </div>
          <p className="hero--section-description">
          I'm a budding Web Developer enthusiastic about embarking on this dynamic journey. While my experience is just beginning, I'm excited to dive into the world of web development with a passion for creating captivating website designs and more...
          </p>
        </div>
        <button className="btn btn-primary"><a className='resume' href='prashantresume.pdf' download="prashantprajapatiresume.pdf">Download Resume</a></button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero1.png" alt="Hero Section" />
      </div>
    </section>
  );
}
