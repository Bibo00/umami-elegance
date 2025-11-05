import chef1 from "@/assets/chef-1.jpg";
import chef2 from "@/assets/chef-2.jpg";
import staff1 from "@/assets/staff-1.jpg";

const staffMembers = [
  {
    name: "Hiroshi Tanaka",
    role: "Head Sushi Chef",
    image: chef1,
    quote: "Ogni piatto racconta una storia di tradizione e passione.",
  },
  {
    name: "Yuki Yamamoto",
    role: "Sushi Chef",
    image: chef2,
    quote: "La perfezione si trova nei dettagli più piccoli.",
  },
  {
    name: "Marco Rossi",
    role: "Responsabile di Sala",
    image: staff1,
    quote: "La vostra esperienza è la nostra priorità.",
  },
];

const Staff = () => {
  return (
    <section id="staff" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Il Nostro Staff</h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {staffMembers.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="relative overflow-hidden mb-6 aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500"></div>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
              <p className="text-accent font-medium mb-4">{member.role}</p>
              <p className="text-muted-foreground italic">"{member.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;
