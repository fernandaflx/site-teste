
import Hero from "./components/Hero/page";
import NavBar from "./components/NavBar/page";
import About from "./components/About/page";
import Courses from "./components/Courses/page";
import Testimonials from "./components/Testimonials/page";
import Contact from "./components/Contact/page";
import Footer from "./components/Footer/page";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Courses />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
