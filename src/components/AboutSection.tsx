import aboutImg from "@/assets/chocolate-about.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="rounded-lg overflow-hidden">
            <img
              src={aboutImg}
              alt="Melting chocolate"
              className="w-full h-72 sm:h-96 object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-gold tracking-[0.2em] uppercase text-sm mb-3">About Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-6 leading-snug">
              A Tradition of <span className="text-gold-gradient">Pure Taste</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We handcraft our chocolates using the finest selected cocoa beans. Every piece is a beautiful blend of quality, love, and artistry.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our mission is to make every moment special  whether it's a celebration, a gift, or your personal indulgence.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { num: "100%", label: "Pure Cocoa" },
                { num: "50+", label: "Flavors" },
                { num: "10K+", label: "Happy Customers" },
              ].map((stat) => (
                <div key={stat.label} className="bg-secondary rounded-lg p-4">
                  <p className="text-gold text-xl sm:text-2xl font-bold">{stat.num}</p>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
