const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary-foreground">
            Chi Siamo
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-16"></div>

          <div className="space-y-8 text-secondary-foreground">
            <div>
              <h3 className="text-2xl font-semibold mb-4">La Nostra Storia</h3>
              <p className="text-lg leading-relaxed text-secondary-foreground/90">
                Sakura Sushi nasce dalla passione per la tradizione culinaria giapponese e dal desiderio
                di offrire un'esperienza autentica e di alta qualità. Fondato nel 2015, il nostro ristorante
                è diventato un punto di riferimento per gli amanti del sushi nella città.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">La Nostra Filosofia</h3>
              <p className="text-lg leading-relaxed text-secondary-foreground/90">
                Crediamo nella semplicità e nella perfezione. Ogni piatto è preparato con ingredienti
                freschi selezionati giornalmente, seguendo le tecniche tradizionali giapponesi.
                La freschezza è la nostra priorità: il pesce arriva ogni mattina direttamente dal mercato.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">I Nostri Valori</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center p-6 border border-border rounded-lg bg-card/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-xl mb-2 text-accent">Freschezza</h4>
                  <p className="text-muted-foreground">
                    Ingredienti selezionati quotidianamente
                  </p>
                </div>
                <div className="text-center p-6 border border-border rounded-lg bg-card/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-xl mb-2 text-accent">Tradizione</h4>
                  <p className="text-muted-foreground">
                    Tecniche autentiche giapponesi
                  </p>
                </div>
                <div className="text-center p-6 border border-border rounded-lg bg-card/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-xl mb-2 text-accent">Eccellenza</h4>
                  <p className="text-muted-foreground">
                    Qualità in ogni dettaglio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
