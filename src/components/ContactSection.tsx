const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold tracking-[0.2em] uppercase text-sm mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-cream">
            Let's <span className="text-gold-gradient">Talk</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-cream font-display text-xl mb-2">Our Address</h3>
              <p className="text-muted-foreground">Rawalpindi, Pakistan</p>
            </div>
            <div>
              <h3 className="text-cream font-display text-xl mb-2">Phone Number</h3>
              <p className="text-muted-foreground">+92 370 5608682</p>
            </div>
            <div>
              <h3 className="text-cream font-display text-xl mb-2">Email</h3>
              <p className="text-muted-foreground"></p>
            </div>
            <div>
              <h3 className="text-cream font-display text-xl mb-2">Working </h3>
              <p className="text-muted-foreground">Monday to Saturday</p>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold resize-none"
            />
            <button
              type="submit"
              className="w-full bg-gold-gradient text-primary-foreground py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
