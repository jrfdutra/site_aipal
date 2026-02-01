import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, Phone, Book, MapPin } from "lucide-react";
import logo from "../assets/logo.png.png";

const cities = [
  { name: "Portugal", active: true },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-padding-sm">
        <div className="max-w-7xl mx-auto">

          {/* ===================== PAÍS ===================== */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-6 md:gap-8 mb-16"
          >
            {cities.map((city, index) => (
              <span key={city.name}>
                <a
                  href="#"
                  className={`city-link ${city.active ? "active" : ""}`}
                >
                  {city.name}
                </a>
                {index < cities.length - 1 && (
                  <span className="ml-6 md:ml-8 text-primary-foreground/30">
                    |
                  </span>
                )}
              </span>
            ))}
          </motion.div>

          {/* ===================== CONTEÚDO PRINCIPAL ===================== */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 text-center md:text-left">

            {/* LOGO */}
            <div className="text-center">
              <img
                src={logo}
                alt="AIPAL"
                className="h-20 mx-auto mb-1 brightness-0 invert"
              />
              <p className="text-primary-foreground/60 text-sm body-elegant">
                Padarias e Pastelarias
              </p>
            </div>

            {/* CONTACTOS / RECLAMAÇÕES / ENDEREÇO */}
            <div className="flex flex-col md:flex-row md:col-span-2 gap-12 md:gap-16 justify-center md:justify-start">

              {/* CONTACTOS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center md:items-start"
              >
                <h4 className="text-xs tracking-[0.15em] uppercase mb-2 text-primary-foreground/80">
                  Contactos
                </h4>

                <div className="flex flex-col gap-1 text-sm text-primary-foreground/60">
                  <a
                    href="mailto:aipal@aipal.pt"
                    className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                  >
                    <Mail size={16} />
                    aipal@aipal.pt
                  </a>

                  <div>
                    <a
                      href="tel:+351227331240"
                      className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                    >
                      <Phone size={16} />
                      +351 227 331 240
                    </a>
                    <p className="text-[0.6rem] text-primary-foreground/50 mt-0.5">
                      (Chamada para rede fixa)
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* RECLAMAÇÕES */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col items-center md:items-start"
              >
                <h4 className="text-xs tracking-[0.15em] uppercase mb-2 text-primary-foreground/80">
                  Reclamações
                </h4>

                <a
                  href="https://www.livroreclamacoes.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  <Book size={16} />
                  Livro de Reclamações Online
                </a>
              </motion.div>

              {/* ENDEREÇO */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center md:items-start"
              >
                <h4 className="text-xs tracking-[0.15em] uppercase mb-2 text-primary-foreground/80">
                  Endereço
                </h4>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rua+19+nº241+4500-256+Espinho+Edifício+Sede+da+AIPAL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  <MapPin size={16} />
                  <span>
                    Rua 19, nº241<br />
                    4500-256 Espinho<br />
                    Edifício Sede da AIPAL
                  </span>
                </a>
              </motion.div>
            </div>

            {/* ===================== REDES SOCIAIS ===================== */}
            <div className="flex flex-col items-center md:items-end">
              <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-primary-foreground/80">
                Siga-nos
              </h4>

              <div className="flex items-center gap-4">
                {/* FACEBOOK */}
                <a
                  href="https://www.facebook.com/p/Aipal-Espinho-100057142943336/?locale=pt_PT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/60 hover:text-primary-foreground hover:scale-110 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/aipal_espinho/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/60 hover:text-primary-foreground hover:scale-110 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

          </div>

          {/* ===================== COPYRIGHT ===================== */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center">
            <p className="text-xs text-primary-foreground/40 tracking-wide">
              © {new Date().getFullYear()} Aipal Padarias e Pastelarias. Todos os direitos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
