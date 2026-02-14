import productsImg from "@/assets/chocolate-products.jpg";

const products = [
  { name: "Dark Truffle Box", price: "Rs. 2,500", desc: "An exquisite collection of Belgian dark chocolate truffles" },
  { name: "Milk Chocolate Bar", price: "Rs. 800", desc: "Silky smooth milk chocolate made with pure milk" },
  { name: "White Chocolate Gift", price: "Rs. 3,000", desc: "Premium white chocolate gift set" },
  { name: "Mixed Truffle Box", price: "Rs. 4,500", desc: "The finest selection of every type of chocolate" },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold tracking-[0.2em] uppercase text-sm mb-3">Our Products</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-cream">
            Delicious <span className="text-gold-gradient">Chocolate Collection</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-card rounded-lg overflow-hidden group hover:ring-1 hover:ring-gold/30 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={productsImg}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-cream font-display text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{product.desc}</p>
                <p className="text-gold font-bold text-lg">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
