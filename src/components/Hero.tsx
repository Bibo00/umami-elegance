import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-sushi.jpg";

const Hero = () => {
  const handleCallClick = () => {
    window.location.href = "tel:+390123456789";
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 tracking-tight">
          L'Arte del Sushi
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-light">
          Tradizione giapponese autentica. Ingredienti freschi selezionati. Esperienza indimenticabile.
        </p>
        <Button
          onClick={handleCallClick}
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 py-6 group"
        >
          <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
          Chiama per Prenotare
        </Button>
      </div>
    </section>
  );
};

export default Hero;
