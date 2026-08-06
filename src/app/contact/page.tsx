import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/home/ContactForm";
import { contactInfo, offices } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";
import styles from "./contact.module.css";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with the NanoPrep team to request a free trial, arrange a site assessment, or ask a question about our corrosion protection products.",
  path: "/contact",
});

const cards = [
  {
    title: "Get in touch",
    text: (
      <>
        Send us an email –<br />
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
      </>
    ),
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  },
  {
    title: "Give us a call",
    text: <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>,
    icon: (
      <path d="M4 4h4l2 5-2.5 2a11 11 0 0 0 5.5 5.5l2-2.5 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
    ),
  },
  {
    title: "Online form",
    text: "Fill out the form below and we'll get back to you as soon as possible",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 9h10M7 13h6" />
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact"
        highlight="Us"
        sub="Have a question about NanoPrep, or want to arrange a site assessment or free product trial? Fill out the form below and our team will be in touch."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.cards}>
            {cards.map((card) => (
              <div key={card.title} className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {card.icon}
                  </svg>
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>

          <div className={styles.formPanel}>
            <ContactForm />
          </div>

          <div className={styles.offices}>
            {offices.map((office) => (
              <div key={office.name} className={styles.office}>
                <h3>{office.name}</h3>
                <address className={styles.officeAddress}>
                  {office.addressLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
                <a href={office.phoneHref} className={styles.officeLine}>
                  {office.phone}
                </a>
                <a href={`mailto:${office.email}`} className={styles.officeLine}>
                  {office.email}
                </a>
                <div className={styles.map}>
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&output=embed`}
                    title={`Map — ${office.name}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <a href={office.mapLink} target="_blank" rel="noopener noreferrer" className={styles.directions}>
                  Get Directions ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
