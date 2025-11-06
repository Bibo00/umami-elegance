const menuCategories = [
  {
    name: "Sushi",
    items: [
      { name: "Nigiri Sake", description: "Salmone fresco", price: "4.50€" },
      { name: "Nigiri Maguro", description: "Tonno rosso", price: "5.00€" },
      { name: "Nigiri Ebi", description: "Gambero", price: "4.00€" },
      { name: "Nigiri Unagi", description: "Anguilla", price: "5.50€" },
    ],
  },
  {
    name: "Sashimi",
    items: [
      { name: "Sashimi Misto", description: "12 pezzi assortiti", price: "18.00€" },
      { name: "Sashimi di Salmone", description: "8 pezzi", price: "14.00€" },
      { name: "Sashimi di Tonno", description: "8 pezzi", price: "16.00€" },
    ],
  },
  {
    name: "Roll",
    items: [
      { name: "California Roll", description: "Surimi, avocado, cetriolo", price: "8.00€" },
      { name: "Spicy Tuna Roll", description: "Tonno piccante, cipollotto", price: "10.00€" },
      { name: "Dragon Roll", description: "Anguilla, avocado, tobiko", price: "12.00€" },
      { name: "Philadelphia Roll", description: "Salmone, philadelphia", price: "9.00€" },
    ],
  },
  {
    name: "Piatti Caldi",
    items: [
      { name: "Ramen", description: "Brodo di maiale, noodles, uovo", price: "14.00€" },
      { name: "Tempura Mista", description: "Gamberi e verdure fritte", price: "12.00€" },
      { name: "Gyoza", description: "Ravioli al vapore o fritti", price: "7.00€" },
    ],
  },
  {
    name: "Bevande",
    items: [
      { name: "Sake Caldo/Freddo", description: "Bicchiere", price: "6.00€" },
      { name: "Birra Asahi", description: "33cl", price: "5.00€" },
      { name: "Tè Verde", description: "Teiera", price: "3.00€" },
    ],
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Il Nostro Menù</h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {menuCategories.map((category) => (
            <div key={category.name} className="space-y-6">
              <h3 className="text-2xl font-semibold border-b border-border pb-3">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className="font-medium text-lg">{item.name}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                    <span className="text-accent font-semibold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
