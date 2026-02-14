import productsImg from "@/assets/chocolate-products.jpg";

const products = [
  { name: "ڈارک ٹرفل باکس", price: "Rs. 2,500", desc: "بیلجیئم ڈارک چاکلیٹ ٹرفلز کا شاندار مجموعہ" },
  { name: "ملک چاکلیٹ بار", price: "Rs. 800", desc: "ریشمی ہموار ملک چاکلیٹ، خالص دودھ سے بنی" },
  { name: "وائٹ چاکلیٹ گفٹ", price: "Rs. 3,000", desc: "سفید چاکلیٹ کا پریمیم تحفہ سیٹ" },
  { name: "مکس ٹرفل باکس", price: "Rs. 4,500", desc: "ہر قسم کی چاکلیٹ کا بہترین انتخاب" },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold tracking-[0.2em] uppercase text-sm mb-3">ہماری مصنوعات</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-cream">
            لذیذ <span className="text-gold-gradient">چاکلیٹ کلیکشن</span>
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
