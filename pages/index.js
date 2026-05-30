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
    Rey Marques Investor LLc
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
            Construyendo Valor con Integridad, Servicio y Proposito.
        </motion.h1>

        <p
          style={{
            color: "#bbb",
            maxWidth: "600px",
            margin: "20px auto"
          }}
        >
          Rey Marques Investor LLc esta alineada con el desarrollo humano, el servicio y la ayuda social. Construimos un futuro sostenible a traves de oportunidades inmobiliarias inteligentes,restaurando propiedades y fortaleciendo comunidades para las generaciones presentes y futuras.
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
        id="Services"
        style={{
          padding: "60px 20px",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontSize: "32px" }}>
            Estrategia de Inversion Estructurada
        </h2>

             <p
  style={{
    color: "#aaa",
    maxWidth: "700px",
    margin: "20px auto"
  }}
>
  Un enfoque integral para identificar, adquirir, administrar y transformar oportunidades inmobiliarias de manera responsable y sostenible.
</p> 
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
            <h3>Analisis</h3>
            <p style={{ color: "#aaa" }}>
             Ver mas
            </p>
          </div>

          <div
            style={{
              background: "#161616",
              padding: "30px",
              borderRadius: "20px"
            }}
          >
            <h3>Adquisicion</h3>
            <p style={{ color: "#aaa" }}>
              ver mas
            </p>
          </div>

          <div
            style={{
              background: "#161616",
              padding: "30px",
              borderRadius: "20px"
            }}
          >
            <h3>Administracion</h3>
            <p style={{ color: "#aaa" }}>
              ver mas
            </p>
            <div
  style={{
    background: "#161616",
    padding: "30px",
    borderRadius: "20px"
  }}
>
<div
  style={{
    background: "#161616",
    padding: "30px",
    borderRadius: "20px"
  }}
>
  <h3>Cierre</h3>

  <p style={{ color: "#aaa" }}>
    Ver más
  </p>
</div>
    
          </div>
        </div>
      </section>
       {/* About */}
      <section
        id="about"
        style={{
          padding: "60px 20px",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontSize: "32px" }}>
          Sobre Nosotros
        </h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "20px auto",
            color: "#aaa",
            lineHeight: "1.8"
          }}
        >
         Rey Marques Investor LLC identifica oportunidades inmobiliarias estratégicas mediante la adquisición y recuperación de propiedades. Nuestro objetivo es restaurar activos, fortalecer comunidades y promover el desarrollo sostenible a través de una administración responsable y una visión de largo plazo.
Operamos bajo principios de integridad, servicio y responsabilidad, buscando generar valor económico y social para las comunidades donde trabajamos.
        </p>
      </section> 
         {/* Contact */}
      <section
        id="contact"
        style={{
          padding: "60px 20px",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontSize: "32px" }}>
          Contacto
        </h2>

        <p style={{ color: "#aaa" }}>
          ¿Interesado en trabajar con nosotros?
        </p>

        <a
          href="mailto:info@reymarques.com"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "20px"
          }}
        >
          info@reymarques.com
        </a>
      </section>   
    </div>
  );
}
