
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div style={{ background: "#0b0b0b", color: "white", minHeight: "100vh", fontFamily: "Arial" }}>

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "100px 20px" }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: "48px", fontWeight: "bold" }}
        >
          Rey Marques Investor LLC
        </motion.h1>

        <p style={{ color: "#bbb", maxWidth: "600px", margin: "20px auto" }}>
          Inversión inmobiliaria estratégica con visión moderna y enfoque en crecimiento patrimonial.
        </p>
            
          <a href="mailto:info@reymarques.com">
  <button
    style={{
      marginTop: "20px",
      padding: "15px 30px",
      background: "transparent",
      color: "white",
      border: "1px solid white",
      borderRadius: "12px",
      cursor: "pointer",
      fontSize: "16px"
    }}
  >
    Agenda una Consulta
  </button>
</a>  
     
      </section>

      {/* About */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", padding: "60px 40px" }}>
        <div style={{ background: "#1a1a1a", padding: "20px", borderRadius: "16px" }}>
          <h2>Nuestra Visión</h2>
          <p style={{ color: "#aaa" }}>
            Construimos riqueza sostenible a través de oportunidades inmobiliarias inteligentes.
          </p>
        </div>

        <div style={{ background: "#1a1a1a", padding: "20px", borderRadius: "16px" }}>
          <h2>Nuestro Enfoque</h2>
          <p style={{ color: "#aaa" }}>
            Subastas, tax deeds y estrategias de crédito empresarial.
          </p>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "60px 40px", textAlign: "center" }}>
        <h2>Servicios</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginTop: "30px" }}>
          {["Subastas", "Crédito Empresarial", "Adquisición"].map((item) => (
            <div key={item} style={{ background: "#1a1a1a", padding: "20px", borderRadius: "16px" }}>
              <h3>{item}</h3>
              <p style={{ color: "#aaa" }}>
                Estrategias de inversión estructuradas.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "80px 20px" }}>
        <h2>Construyamos el futuro hoy</h2>
        <p style={{ color: "#bbb" }}>Cada decisión inmobiliaria importa.</p>
      </section>

      <footer style={{ textAlign: "center", padding: "20px", borderTop: "1px solid #333" }}>
        © {new Date().getFullYear()} Rey Marques Investor LLC
      </footer>

    </div>
  );
}
