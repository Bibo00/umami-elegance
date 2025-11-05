import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary-foreground mb-2">SAKURA SUSHI</h3>
            <p className="text-primary-foreground/70">L'arte del sushi a Milano</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-accent transition-colors duration-300"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-accent transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-primary-foreground/70">+39 012 345 6789</p>
            <p className="text-primary-foreground/70">Via Roma 123, Milano</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {currentYear} Sakura Sushi. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
