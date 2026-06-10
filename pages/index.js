import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [openSection, setOpenSection] = useState(null);
  const [openService, setOpenService] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
    setOpenService(null);
  };

  const toggleService = (service) => {
    setOpenService(openService === service ? null : service);
  };

  return (
    <div
      style={{
        background: "#556B4D",
        color: "#F5F5F0",
        minHeight: "100vh",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
          position: "sticky",
          top: 0,
          background: "#556B4D",
          zIndex: 1000,
        }}
      >
        <h2 style={{ margin: 0 }}>Rey Marques Investor LLC</h2>

        <div
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          <button
            style={menuButton}
            onClick={() => toggleSection("home")}
          >
            HOME
          </button>

          <button
            style={menuButton}
            onClick={() => toggleSection("services")}
          >
            SERVICES
          </button>

          <button
            style={menuButton}
            onClick={() => toggleSection("about")}
          >
            ABOUT
          </button>

          <button
            style={menuButton}
            onClick={() => toggleSection("contact")}
          >
            CONTACT
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          padding: "120px 20px 80px",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div
            style={{
              fontSize: "90px",
              lineHeight: "1",
              marginBottom: "20px",
            }}
          >
            👑
            <br />
            RM
          </div>

          <h1
            style={{
              fontSize: "42px",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            Building Value Through Integrity,
            <br />
            Service and Purpose.
          </h1>
        </motion.div>
      </section>

      {/* HOME */}
      {openSection === "home" && (
        <SectionCard title="HOME">
          <p>
            Rey Marques Investor LLC is aligned with human development,
            service and social impact.
          </p>

          <p>
            We build a sustainable future through strategic real estate
            opportunities, restoring properties and strengthening
            communities for present and future generations.
          </p>
        </SectionCard>
      )}

      {/* SERVICES */}
      {openSection === "services" && (
        <SectionCard title="STRUCTURED INVESTMENT STRATEGY">
          <p>
            A comprehensive approach to identifying, acquiring,
            managing and transforming real estate opportunities
            responsibly and sustainably.
          </p>

          <div style={serviceGrid}>
            <button
              style={serviceButton}
              onClick={() => toggleService("analysis")}
            >
              Analysis
            </button>

            <button
              style={serviceButton}
              onClick={() => toggleService("acquisition")}
            >
              Acquisition
            </button>

            <button
              style={serviceButton}
              onClick={() => toggleService("management")}
            >
              Management
            </button>

            <button
              style={serviceButton}
              onClick={() => toggleService("closing")}
            >
              Closing
            </button>
          </div>

          {openService === "analysis" && (
            <ServiceCard>
              Market evaluation, property research, risk assessment and
              strategic opportunity identification.
            </ServiceCard>
          )}

          {openService === "acquisition" && (
            <ServiceCard>
              Strategic acquisition of real estate assets through
              disciplined evaluation and long-term value creation.
            </ServiceCard>
          )}

          {openService === "management" && (
            <ServiceCard>
              Property oversight, asset preservation, operational
              coordination and community-focused stewardship.
            </ServiceCard>
          )}

          {openService === "closing" && (
            <ServiceCard>
              Structured transaction completion, documentation review,
              compliance and successful execution.
            </ServiceCard>
          )}
        </SectionCard>
      )}

      {/* ABOUT */}
      {openSection === "about" && (
        <SectionCard title="ABOUT US">
          <p>
            Rey Marques Investor LLC identifies strategic real estate
            opportunities through acquisition, restoration and
            responsible stewardship.
          </p>

          <p>
            Our mission is to strengthen communities while creating
            sustainable value through integrity, service and long-term
            vision.
          </p>
        </SectionCard>
      )}

      {/* CONTACT */}
      {openSection === "contact" && (
        <SectionCard title="CONTACT">
          <p>Interested in working with us?</p>

          <a
            href="mailto:info@reymarques.com"
            style={{
              color: "#F5F5F0",
              fontSize: "20px",
              textDecoration: "none",
            }}
          >
            info@reymarques.com
          </a>

          <br />
          <br />

          <a href="mailto:info@reymarques.com">
            <button style={contactButton}>
              Schedule a Consultation
            </button>
          </a>
        </SectionCard>
      )}

      {/* LANGUAGE */}
      <div
        style={{
          textAlign: "center",
          padding: "80px 20px 40px",
        }}
      >
        <button style={menuButton}>Español</button>
      </div>
    </div>
  );
}

function SectionCard({ title, children }) {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "30px auto",
        padding: "40px",
        background: "#6E8B5E",
        borderRadius: "20px",
      }}
    >
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function ServiceCard({ children }) {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        background: "#556B4D",
        borderRadius: "15px",
      }}
    >
      {children}
    </div>
  );
}

const menuButton = {
  background: "transparent",
  border: "none",
  color: "#F5F5F0",
  cursor: "pointer",
  fontSize: "15px",
  fontWeight: "bold",
};

const serviceGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "15px",
  marginTop: "30px",
};

const serviceButton = {
  padding: "15px",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  background: "#556B4D",
  color: "#F5F5F0",
  fontWeight: "bold",
};

const contactButton = {
  padding: "15px 30px",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  background: "#F5F5F0",
  color: "#556B4D",
  fontWeight: "bold",
};
