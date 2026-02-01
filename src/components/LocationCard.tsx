import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

interface LocationCardProps {
  name: string;
  address: string;
  hours: string;
  index: number;
  linkHref: string; // link para o Maps
}

const LocationCard = ({ name, address, hours, index, linkHref }: LocationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="location-card group p-8 md:p-10 bg-card border border-border hover:border-muted-foreground/20"
    >
      <h3 className="font-serif text-xl md:text-2xl tracking-wide mb-6">
        {name}
      </h3>
      
      <div className="space-y-4 mb-8">
        <div className="flex items-start gap-3 text-muted-foreground">
          <MapPin size={16} className="mt-1 flex-shrink-0" />
          <span className="text-sm body-elegant">{address}</span>
        </div>
        <div className="flex items-start gap-3 text-muted-foreground">
          <Clock size={16} className="mt-1 flex-shrink-0" />
          <span className="text-sm body-elegant">{hours}</span>
        </div>
      </div>

      <a
        href={linkHref} // Link dinâmico para o Maps
        target="_blank" // Abre em nova aba
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-foreground group-hover:text-muted-foreground transition-colors"
      >
        Como chegar
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </a>
    </motion.div>
  );
};

export default LocationCard;
