import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rey Marques Investor LLC</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <div
        style={{
          fontFamily: "Georgia, serif",
          background: "#8EA78A",
          color: "#F8F4EC",
        }}
      >
        {/* NAVBAR */}

        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 40px",
            background: "linear-gradient(90deg,#2F3B2B 0%,#44533F 50%,#2F3B2B 100%)",
            position: "sticky",
            top: 0,
            zIndex: 100,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Image
              src="/logo.png"
              alt="Rey Marques"
              width={95}
              height={95}
            />

            <div>
              <div
                style={{
                  fontSize: "38px",
                  letterSpacing: "2px",
                  color: "#D4AF37",
                  fontWeight: "600",
                }}
              >
                REY MARQUES
              </div>

              <div
                style={{
                  fontSize: "14px",
                  letterSpacing: "4px",
                  color: "#D4AF37",
                }}
              >
                INVESTOR LLC
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "25px",
              alignItems: "center",
            }}
          >
            <a href="#home" style={menuLink}>
              HOME
            </a>

            <a href="#services" style={menuLink}>
              SERVICES
            </a>

            <a href="#about" style={menuLink}>
              ABOUT
            </a>

            <a href="#contact" style={menuLink}>
              CONTACT
            </a>

          </div>
        </nav>

        {/* HERO */}

        <section
          id="home"
          style={{
            minHeight: "100vh",
            backgroundImage:
              "linear-gradient(rgba(68,83,63,.45),rgba(68,83,63,.45)),url('/hero-house.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "20px",
            }}
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={260}
              height={260}
              priority
            />

            <h1
              style={{
                fontSize: "72px",
                maxWidth: "1000px",
                lineHeight: "1.1",
                marginTop: "25px",
              }}
            >
              Building Value Through Integrity,
              <br />
              Service and Purpose.
            </h1>

            <div
              style={{
                width: "220px",
                height: "2px",
                background: "#D4AF37",
                margin: "25px 0",
              }}
            />

            <p
              style={{
                letterSpacing: "3px",
              }}
            >
              REAL ESTATE INVESTMENT • STRATEGIC GROWTH • LONG TERM VALUE
            </p>
          </div>
        </section>
 {/* SERVICES */}

        <section
          id="services"
          style={{
            padding: "90px 40px",
            background: "#7D9474",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              color: "#F8F4EC",
              marginBottom: "50px",
            }}
          >
            OUR SERVICES
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "25px",
            }}
          >
            <div style={serviceCard}>
              <h3>ACQUISITION</h3>

              <p>
                Strategic identification of real estate
                opportunities with long-term potential.
              </p>
            </div>

            <div style={serviceCard}>
              <h3>INVESTMENT</h3>

              <p>
                Disciplined capital deployment and value
                creation through carefully selected assets.
              </p>
            </div>

            <div style={serviceCard}>
              <h3>MANAGEMENT</h3>

              <p>
                Professional stewardship, preservation and
                optimization of investment properties.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}

        <section
          id="about"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(400px,1fr))",
            background: "#6F8668",
          }}
        >
          <div
            style={{
              padding: "80px 50px",
            }}
          >
            <h2
              style={{
                fontSize: "48px",
                color: "#F8F4EC",
              }}
            >
              ABOUT US
            </h2>

            <p
              style={{
                lineHeight: "1.8",
                fontSize: "18px",
              }}
            >
              Rey Marques Investor LLC is committed to
              responsible real estate investment,
              community enhancement and sustainable
              long-term value creation.
            </p>

            <p
              style={{
                lineHeight: "1.8",
                fontSize: "18px",
              }}
            >
              Our mission is to build opportunities that
              strengthen communities while preserving
              integrity, service and purpose.
            </p>

            <a
              href="#contact"
              style={{
                display: "inline-block",
                marginTop: "25px",
                border: "1px solid #D4AF37",
                color: "#D4AF37",
                padding: "14px 24px",
                textDecoration: "none",
              }}
            >
              LEARN MORE
            </a>
          </div>

          <div
            style={{
              minHeight: "500px",
              backgroundImage:
                "url('/hero-house.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </section>

        {/* CONTACT */}

        <section
          id="contact"
          style={{
            background: "#44533F",
            padding: "80px 20px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#D4AF37",
              fontSize: "42px",
            }}
          >
            CONTACT US
          </h2>

          <p
            style={{
              fontSize: "20px",
            }}
          >
            info@reymarques.com
          </p>

          <a
            href="mailto:info@reymarques.com"
            style={{
              display: "inline-block",
              marginTop: "20px",
              border: "1px solid #D4AF37",
              color: "#D4AF37",
              padding: "15px 30px",
              textDecoration: "none",
            }}
          >
            Schedule a Consultation
          </a>
        </section>

        {/* FOOTER */}

        <footer
          style={{
            background: "#354130",
            padding: "30px",
            textAlign: "center",
          }}
        >
          © 2023 Rey Marques Investor LLC.
          All Rights Reserved.
        </footer>
      </div>
    </>
  );
}

const menuLink = {
  color: "#F8F4EC",
  textDecoration: "none",
};

const serviceCard = {
  background: "#44533F",
  padding: "35px",
  borderRadius: "14px",
  border: "1px solid rgba(212,175,55,.30)",
};
