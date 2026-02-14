import aboutImg from "@/assets/chocolate-about.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="rounded-lg overflow-hidden">
            <img
              src={aboutImg}
              alt="پگھلتی ہوئی چاکلیٹ"
              className="w-full h-72 sm:h-96 object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-gold tracking-[0.2em] uppercase text-sm mb-3">ہمارے بارے میں</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-6 leading-snug">
              خالص ذائقے کی <span className="text-gold-gradient">روایت</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ہم بہترین کوکوا بینز کا انتخاب کر کے ہاتھ سے تیار کردہ چاکلیٹ بناتے ہیں۔ ہماری ہر چاکلیٹ میں معیار، محبت اور فن کا خوبصورت امتزاج ہے۔
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              ہمارا مقصد ہے کہ ہر لمحے کو خاص بنائیں — چاہے وہ تہوار ہو، تحفہ ہو یا آپ کا ذاتی لطف۔
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { num: "100%", label: "خالص کوکوا" },
                { num: "50+", label: "فلیورز" },
                { num: "10K+", label: "خوش گاہک" },
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
