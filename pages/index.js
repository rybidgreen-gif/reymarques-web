import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";

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
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        style={{
          background: "#8EA78A",
          color: "#F8F4EC",
          minHeight: "100vh",
          fontFamily: "'Merriweather', serif",
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
            background: "#6F8668",
            zIndex: 1000,
          }}
        >
          <h2
            style={{
              margin: 0,
              color: "#D4AF37",
              fontWeight: 400,
              letterSpacing: "2px",
              fontSize: "28px",
            }}
          >
            Rey Marques Investor LLC
          </h2>

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
            padding: "100px 20px 60px",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "30px",
              }}
            >
              <Image
                src="/logo.png"
                alt="Rey Marques Investor LLC"
                width={500}
                height={500}
                priority
              />
            </div>

            <h1
              style={{
                fontSize: "54px",
                maxWidth: "1000px",
                margin: "0 auto",
                color: "#F8F4EC",
                fontWeight: 300,
                lineHeight: "1.3",
                letterSpacing: "1px",
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
                color: "#F8F4EC",
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
    </>
  );
}

function SectionCard({ title, children }) {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "30px auto",
        padding: "40px",
        background: "#667D5D",
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
        background: "#5B7153",
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
  color: "#F8F4EC",
  cursor: "pointer",
  fontSize: "15px",
  fontWeight: "bold",
  letterSpacing: "1px",
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
  background: "#667D5D",
  color: "#F8F4EC",
  fontWeight: "bold",
};

const contactButton = {
  padding: "15px 35px",
  borderRadius: "12px",
  border: "1px solid #D4AF37",
  cursor: "pointer",
  background: "transparent",
  color: "#F8F4EC",
  fontWeight: "bold",
  letterSpacing: "1px",
};
