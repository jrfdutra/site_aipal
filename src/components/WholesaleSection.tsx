import { motion } from 'framer-motion';

const WholesaleSection = () => {
  return (
    <section id="wholesale" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Encomendas
          </h2>
          <div className="divider-elegant" />
          <p className="mt-8 text-muted-foreground body-elegant text-lg max-w-2xl mx-auto">
            Estamos localizados em toda a região de Espinho com o nosso pão e pastelaria acabados de sair do forno.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10"
          >
            <a 
              href="mailto:aipal@aipal.pt" 
              className="btn-artisan btn-artisan-primary"
            >
              Contacte-nos
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WholesaleSection;
