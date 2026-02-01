import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import cinnamonBuns from '@/assets/cinnamon-buns.jpg';
import sourdoughLoaf from '@/assets/sourdough-loaf.jpg';
import croissants from '@/assets/croissants.jpg';
import cardamomBuns from '@/assets/cardamom-buns.jpg';
import AIPAL from '@/assets/AIPAL.mp4';

const products = [
  {
    image: sourdoughLoaf,
    title: 'Pães',
    description:
      'Na Aipal, cada pão é feito com carinho e ingredientes selecionados, garantindo sabor irresistível e frescor a cada mordida.',
  },
  {
    image: cinnamonBuns,
    title: 'Pastéis de Nata',
    description:
      'Pastéis de nata douradinhos, cremosos por dentro e crocantes por fora.',
  },
  {
    image: cardamomBuns,
    title: 'Bolas de Berlim',
    description:
      'Douradinhas por fora, suaves e bem recheadas por dentro.',
  },
  {
    image: croissants,
    title: 'Croissants',
    description:
      'Croissants macios, dourados e levemente amanteigados.',
  },
];

const ProductShowcase = () => {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">

        {/* ===================== NOSSA HISTÓRIA ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24"
        >
          {/* TEXTO */}
          <div className="text-justify">
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl mb-6 text-center">
              Nossa História
            </h2>
            <div className="divider-elegant mb-6 mx-auto" />
            <p className="text-muted-foreground body-elegant text-lg">
              A AIPAL foi fundada em 17 de Julho de 1964, resultando da união
              dos Panificadores de Espinho. Desde então, alia tradição,
              qualidade e inovação na produção de pão e pastelaria,
              preservando o saber-fazer artesanal que atravessa gerações.
            </p>
          </div>

          {/* VÍDEO AIPAL */}
          <div className="relative w-full h-[260px] md:h-[320px] lg:h-[360px] overflow-hidden rounded-lg shadow-lg">
            <video
              src={AIPAL}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-contain bg-black"
            />
          </div>
        </motion.div>
        {/* ===================== FIM HISTÓRIA ===================== */}

        {/* ===================== PRODUTOS ===================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {products.map((product, index) => (
            <ProductCard key={product.title} {...product} index={index} />
          ))}
        </div>

        {/* ===================== CTA ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 md:mt-24"
        >
          <a href="#products" className="btn-artisan btn-artisan-outline">
            Conheça os nossos produtos
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductShowcase;
