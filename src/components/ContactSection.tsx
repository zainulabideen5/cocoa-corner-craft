const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold tracking-[0.2em] uppercase text-sm mb-3">رابطہ کریں</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-cream">
            ہم سے <span className="text-gold-gradient">بات کریں</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-cream font-display text-xl mb-2">ہمارا پتہ</h3>
              <p className="text-muted-foreground">لاہور، پاکستان</p>
            </div>
            <div>
              <h3 className="text-cream font-display text-xl mb-2">فون نمبر</h3>
              <p className="text-muted-foreground">+92 300 1234567</p>
            </div>
            <div>
              <h3 className="text-cream font-display text-xl mb-2">ای میل</h3>
              <p className="text-muted-foreground">info@chocolate.pk</p>
            </div>
            <div>
              <h3 className="text-cream font-display text-xl mb-2">اوقات کار</h3>
              <p className="text-muted-foreground">پیر تا ہفتہ: صبح 10 بجے تا رات 8 بجے</p>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="آپ کا نام"
              className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <input
              type="tel"
              placeholder="فون نمبر"
              className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <textarea
              placeholder="آپ کا پیغام"
              rows={4}
              className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold resize-none"
            />
            <button
              type="submit"
              className="w-full bg-gold-gradient text-primary-foreground py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
            >
              پیغام بھیجیں
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
