import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";

export default function Home() {
  return (
    <>
      <AboutMe />
      <MySkills />
      {/* <MyPortfolio /> */}
      {/* <Testimonial /> */}
      <ContactMe />
      <Footer />
    </>
  );
}
