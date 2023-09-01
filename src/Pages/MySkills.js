// import data from "../data/index.json"
import productchain from "../image/product-chain-1.png"
import tag1 from "../image/tag-1.png"
import featherpen2 from "../image/feather-pen-2.png"
import featherpen1 from "../image/feather-pen-1.png"
export default function MySkills() {

  var skills=[
    {
      id: 1,
      src:productchain,
      title: "Web Development",
      description: "Highlight your expertise in both front-end and back-end web development. Mention the technologies you are proficient in, such as HTML, CSS, JavaScript, and  relevant frameworks React js."
    },
    {
      id: 2,
      src: tag1,
      title: "Backend Development",
      description: "Discuss your proficiency in server-side technologies and frameworks (Node.js, Django, Ruby on Rails, etc.). Explain how you can build robust and scalable server-side components to power dynamic web applications"
    },
    {
      id: 3,
      src: featherpen2,
      title: "Responsive Design",
      description: " Emphasize your understanding of responsive design principles and your ability to create websites that work seamlessly across different devices and screen sizes."
    },
    {
      id: 4,
      src: featherpen1,
      title: "Project Managment",
      description: "In my portfolio, web development project management skills hold a special place. I strategize to complete projects on time by planning, prioritizing tasks, and employing various competitive and technological approaches within the given time frame."
    }

]
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <div className="section--title">What I Do</div>
        <div className="skills--section--heading">My Services</div>
      </div>
      <div className="skills--section--container">
        {skills.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
