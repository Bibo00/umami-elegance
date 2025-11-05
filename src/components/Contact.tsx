import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleCallClick = () => {
    window.location.href = "tel:+390123456789";
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary-foreground">
          Contattaci
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent flex items-center justify-center shrink-0 rounded-lg shadow-md">
                <Phone className="text-accent-foreground" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-secondary-foreground">Telefono</h3>
                <p className="text-secondary-foreground/80 text-lg">+39 012 345 6789</p>
                <Button
                  onClick={handleCallClick}
                  className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                >
                  Chiama Ora
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent flex items-center justify-center shrink-0 rounded-lg shadow-md">
                <MapPin className="text-accent-foreground" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-secondary-foreground">Indirizzo</h3>
                <p className="text-secondary-foreground/80">
                  Via Roma 123
                  <br />
                  20100 Milano, Italia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent flex items-center justify-center shrink-0 rounded-lg shadow-md">
                <Clock className="text-accent-foreground" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-secondary-foreground">Orari di Apertura</h3>
                <div className="text-secondary-foreground/80 space-y-1">
                  <p>Martedì - Domenica</p>
                  <p className="font-semibold">12:00 - 15:00 | 19:00 - 23:00</p>
                  <p className="text-sm mt-2">Chiuso il lunedì</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] md:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.0!2d9.19!3d45.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI3JzM2LjAiTiA5wrAxMScyNC4wIkU!5e0!3m2!1sit!2sit!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
