import { motion } from 'framer-motion';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

const ProductCard = ({ image, title, description, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="product-card aspect-[4/5] mb-6 overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <h3 className="font-serif text-xl md:text-2xl tracking-wide mb-2 group-hover:text-muted-foreground transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm body-elegant">
        {description}
      </p>
    </motion.div>
  );
};

export default ProductCard;
