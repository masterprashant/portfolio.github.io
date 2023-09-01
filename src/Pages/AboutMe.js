import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import about from "../image/about.png"

export default function AboutMe() {
  return (<div>
    <section style={{display:'flex',justifyContent:'center'}}>
      <div style={{fontFamily:'poppins',fontSize:'34px',
  fontWeight: 700}}>About Me</div>
    </section>
     
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={about} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="who" >
          I am enthusiastic and dedicated to honing my skills in this dynamic field.
          </p>
          <p className="hero--section-description">
          A highly skilled and dedicated React full stack developer with a strong
academic background in Computer Science, currently pursuing a B.Tech
degree. Seeking challenging opportunities to apply my expertise in web
development and contribute to innovative projects.

          </p>
          <p className='adress'><CalendarMonthIcon style={{fontSize:'21px'}}/>Age:20 years old</p>
          <p className='adress'><PhoneIcon style={{fontSize:'21px'}}/> Phone:7470578247</p>
          <p className='adress'><EmailIcon style={{fontSize:'21px'}}/> Email:prashantprajapti9310@gmail.com</p>
          <p className='adress'><LocationOnIcon style={{fontSize:'21px'}}/>Location:Gwalior madhya pradesh</p>
        </div>

        
      </div>
    </section>
    
  </div>);
}
