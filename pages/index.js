import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      style={{
        background: "#0b0b0b",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial"
      }}
    >
<nav
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid #222",
    position: "sticky",
    top: 0,
    background: "#0b0b0b",
    zIndex: 1000
  }}
>
  <h2 style={{ fontSize: "20px" }}>
    Rey Marques
  </h2>

  <div
    style={{
      display: "flex",
      gap: "20px"
    }}
  >
    <a href="#" style={{ color: "white", textDecoration: "none" }}>
      Home
    </a>

    <a href="#services" style={{ color: "white", textDecoration: "none" }}>
      Services
    </a>

    <a href="#about" style={{ color: "white", textDecoration: "none" }}>
      About
    </a>

    <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
      Contact
    </a>
  </div>
</nav>
      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 20px"
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "48px",
            fontWeight: "bold"
          }}
        >
          Rey Marques Investor LLC
        </motion.h1>

        <p
          style={{
            color: "#bbb",
            maxWidth: "600px",
            margin: "20px auto"
          }}
        >
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

      {/* Services */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontSize: "32px" }}>
          Servicios
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "40px"
          }}
        >
          <div
            style={{
              background: "#161616",
              padding: "30px",
              borderRadius: "20px"
            }}
          >
            <h3>Inversión en Subastas</h3>
            <p style={{ color: "#aaa" }}>
              Estrategias enfocadas en oportunidades inmobiliarias inteligentes.
            </p>
          </div>

          <div
            style={{
              background: "#161616",
              padding: "30px",
              borderRadius: "20px"
            }}
          >
            <h3>Crédito Empresarial</h3>
            <p style={{ color: "#aaa" }}>
              Construcción de capital y financiamiento empresarial.
            </p>
          </div>

          <div
            style={{
              background: "#161616",
              padding: "30px",
              borderRadius: "20px"
            }}
          >
            <h3>Análisis de Propiedades</h3>
            <p style={{ color: "#aaa" }}>
              Evaluación estratégica para adquisiciones rentables.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
