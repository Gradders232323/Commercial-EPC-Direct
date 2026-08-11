const industryLogos = [
  { src: "/ecmk.png", alt: "ECMK", className: "logo-ecmk" },
  { src: "/elmhurst-energy.png", alt: "Elmhurst Energy", className: "logo-elmhurst" },
  { src: "/quidos.jpeg", alt: "Quidos", className: "logo-quidos" },
  { src: "/designbuilder.png", alt: "DesignBuilder Software", className: "logo-designbuilder" },
];

export default function IndustryLogos() {
  return (
    <section className="industry-logos" aria-labelledby="industry-logos-title">
      <div>
        <span className="kicker" id="industry-logos-title">Accreditation schemes &amp; industry software</span>
        <p>Recognised names supporting energy assessment standards, certification and professional workflows.</p>
      </div>
      <div className="industry-logo-grid">
        {industryLogos.map((logo) => (
          <div className={logo.className} key={logo.alt}><img src={logo.src} alt={logo.alt} /></div>
        ))}
      </div>
    </section>
  );
}
