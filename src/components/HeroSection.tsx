import heroImg from "@/assets/hero-chocolate.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <p className="text-gold tracking-[0.3em] uppercase text-sm sm:text-base mb-4 animate-fade-in">
          Premium Handcrafted
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up leading-tight">
          <span className="text-gold-gradient">The Art of</span>
          <br />
          <span className="text-cream">Fine Chocolate</span>
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          ہر چاکلیٹ میں محبت اور فن کا خوبصورت امتزاج — بہترین کوکوا بینز سے تیار شدہ
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <a href="#products" className="bg-gold-gradient text-primary-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">
            ہماری مصنوعات دیکھیں
          </a>
          <a href="#contact" className="border border-gold text-gold px-8 py-3 rounded-md font-semibold hover:bg-gold/10 transition-colors">
            رابطہ کریں
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
