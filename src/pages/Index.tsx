import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Staff from "@/components/Staff";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Showcase />
      <Menu />
      <About />
      <Staff />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
