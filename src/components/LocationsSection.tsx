import { motion } from 'framer-motion';
import LocationCard from './LocationCard';
import bakeryInterior from '@/assets/bakery-interior.jpg';

const locations = [
  { name: 'Rua 19, 241 - Sede Aipal', address: 'R. 19 241, 4500-227 Espinho', hours: 'Mon–Fri 7:30–18:00 · Sat–Sun 8:00–18:00' },
  { name: 'Rua 23, 53', address: 'R. 23 53, 4500-368 Espinho', hours: 'Mon–Fri 7:00–17:00 · Sat–Sun 8:00–17:00' },
  { name: 'Loja Noturna', address: 'R. 19 241, 4500-227 Espinho', hours: 'Mon–Fri 7:30–17:00 · Sat–Sun 8:00–17:00' },
  { name: 'Rua 26, 972', address: 'R. 26 972, 4500-284 Espinho', hours: 'Mon–Fri 7:00–18:00 · Sat 8:00–17:00 · Sun Closed' },
  { name: 'Rua 39, 239', address: 'R. 39 239, 4500-166 Espinho', hours: 'Mon–Fri 7:00–17:00 · Sat–Sun 8:00–16:00', center: true },
];

const LocationsSection = () => {
  return (
    <section id="locations" className="bg-secondary relative z-10">
      {/* Image Banner */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={bakeryInterior}
          alt="Fabrique Bakery Interior"
          className="w-full h-full object-cover object-[0_30%] brightness-75"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h2 className="heading-display text-white text-3xl md:text-4xl lg:text-5xl text-center z-20">
            Visite uma de nossas lojas
          </h2>
        </motion.div>
      </div>

      {/* Locations Grid */}
      <div className="section-padding relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {locations.map((location, index) => {
              const isLastCentered = location.center;
              const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`;

              return (
                <motion.div
                  key={location.name + index}
                  className={`w-full ${isLastCentered ? 'md:col-span-1 md:justify-self-center' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <LocationCard
                    {...location}
                    index={index}
                    linkHref={mapsLink}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
