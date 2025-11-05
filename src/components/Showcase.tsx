import processNigiri from "@/assets/process-nigiri.jpg";
import productSashimi from "@/assets/product-sashimi.jpg";
import processMaki from "@/assets/process-maki.jpg";
import productRolls from "@/assets/product-rolls.jpg";

const showcaseItems = [
  {
    id: 1,
    image: processNigiri,
    title: "L'Arte del Nigiri",
    description: "Ogni nigiri è modellato a mano con precisione millimetrica. Il riso, condito con la giusta proporzione di aceto di riso, viene pressato delicatamente per creare la base perfetta su cui adagiare il pesce freschissimo."
  },
  {
    id: 2,
    image: productSashimi,
    title: "Sashimi di Prima Qualità",
    description: "Selezioniamo solo i tagli migliori di pesce fresco, rispettando la tradizione giapponese. Ogni fetta viene tagliata seguendo la venatura naturale del pesce per esaltarne sapore e consistenza."
  },
  {
    id: 3,
    image: processMaki,
    title: "La Preparazione dei Maki",
    description: "I nostri maki sono realizzati con tecnica tradizionale usando il makisu (stuoia di bambù). La pressione perfetta garantisce roll compatti ma mai schiacciati, con ogni ingrediente perfettamente bilanciato."
  },
  {
    id: 4,
    image: productRolls,
    title: "Roll Creativi",
    description: "Uniamo tradizione e innovazione nei nostri roll speciali. Ingredienti premium selezionati si fondono in combinazioni armoniose che rispettano l'equilibrio dei sapori della cucina giapponese."
  }
];

const Showcase = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Il Nostro Processo</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ogni piatto è il risultato di anni di esperienza, dedizione e rispetto per la tradizione
          </p>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {showcaseItems.map((item, index) => (
            <div
              key={item.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative h-[350px] overflow-hidden rounded-lg shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="p-6">
                  <h3 className="text-3xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
