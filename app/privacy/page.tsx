import type { Metadata } from "next";
import SiteNav from "../site-nav";
import SocialLinks from "../social-links";

export const metadata: Metadata = {
  title: "Privacy Notice | Commercial EPC Direct",
  description: "How Commercial EPC Direct collects, uses, stores and protects personal information submitted through this website.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Notice | Commercial EPC Direct",
    description: "How we handle personal information submitted through the Commercial EPC Direct website.",
    url: "https://commercial-epc-direct.gradwell-gro-3352.chatgpt.site/privacy",
  },
};

const sections = [
  ["who-we-are", "Who we are"],
  ["information", "Information we collect"],
  ["how-we-use-it", "How we use it"],
  ["sharing", "Who we share it with"],
  ["retention", "How long we keep it"],
  ["cookies", "Cookies and website data"],
  ["rights", "Your rights"],
  ["contact", "Contact and complaints"],
];

export default function PrivacyPage() {
  return <main className="privacy-page">
    <SiteNav quoteHref="/#quote" />
    <header className="privacy-hero">
      <div className="breadcrumb"><a href="/">Home</a><span>/</span>Privacy notice</div>
      <div className="eyebrow"><span></span> Your information</div>
      <h1>Privacy, explained <em>clearly.</em></h1>
      <p>This notice explains how Commercial EPC Direct collects and uses personal information when you browse our website, contact us or submit a property enquiry.</p>
      <span className="privacy-updated">Last updated: 11 August 2026</span>
    </header>

    <div className="privacy-layout">
      <aside className="privacy-nav" aria-label="Privacy notice contents">
        <span>On this page</span>
        <div>{sections.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
      </aside>

      <article className="privacy-content">
        <section id="who-we-are">
          <h2>1. Who we are</h2>
          <p>Commercial EPC Direct is a commercial property assessment service provided by Gradwell Environmental. For the purposes of UK data protection law, Gradwell Environmental is responsible for deciding how and why personal information submitted through this website is used.</p>
          <div className="privacy-callout"><strong>Our approach</strong><p>We only ask for the information we need to understand and respond to your enquiry. We do not sell personal information.</p></div>
        </section>

        <section id="information">
          <h2>2. Information we collect</h2>
          <p>When you submit an enquiry or contact us, we may collect:</p>
          <ul>
            <li>your name and email address;</li>
            <li>the property postcode and first line of the address;</li>
            <li>information you provide about the property, assessment or service required;</li>
            <li>your correspondence with our team; and</li>
            <li>basic technical information used to operate and protect the website, such as request and security logs.</li>
          </ul>
          <p>Please do not send sensitive personal information through an enquiry form unless we specifically ask for it and explain why it is required.</p>
        </section>

        <section id="how-we-use-it">
          <h2>3. How and why we use your information</h2>
          <div className="privacy-table">
            <div><strong>Responding to enquiries</strong><p>To review the property details, contact you, answer questions and prepare a quotation. We generally rely on taking steps at your request before entering into a contract and on our legitimate interest in responding to business enquiries.</p></div>
            <div><strong>Providing our services</strong><p>To arrange access, complete an instructed assessment, issue documentation, manage payment and keep appropriate business records. This is normally necessary to perform our contract with you and to meet applicable legal obligations.</p></div>
            <div><strong>Operating the website</strong><p>To maintain security, diagnose faults, prevent misuse and improve the reliability of our service. We rely on our legitimate interests in running a secure and effective website.</p></div>
            <div><strong>Legal and regulatory matters</strong><p>To establish or defend legal claims, respond to lawful requests and comply with record-keeping or other legal requirements.</p></div>
          </div>
          <p>We do not currently use information submitted through our enquiry forms to send unrelated marketing. If this changes, we will provide the appropriate choice and update this notice.</p>
        </section>

        <section id="sharing">
          <h2>4. Who we share information with</h2>
          <p>We may share limited personal information with organisations that help us operate the website and deliver the requested service. These may include:</p>
          <ul>
            <li><strong>Web3Forms</strong>, which securely transmits website enquiry submissions to us;</li>
            <li>website hosting, email, IT support and security providers;</li>
            <li>professional advisers, accreditation schemes, lodgement platforms or public registers where relevant to an instructed assessment; and</li>
            <li>regulators, courts, law-enforcement bodies or other parties where disclosure is required by law.</li>
          </ul>
          <p>We require service providers to handle personal information appropriately and only for the agreed purpose. If a provider processes information outside the UK, we take steps to ensure an appropriate transfer safeguard is in place where required.</p>
        </section>

        <section id="retention">
          <h2>5. How long we keep information</h2>
          <p>We keep enquiry information only for as long as it is reasonably needed to respond, provide a quotation and manage any resulting instruction. Enquiries that do not proceed are normally retained for up to 24 months after our last contact so we can deal with follow-up questions and maintain appropriate business records.</p>
          <p>Where you instruct us, related records may be kept for longer where this is necessary for contractual, tax, insurance, accreditation, professional or legal reasons. When information is no longer required, it is deleted or securely anonymised.</p>
        </section>

        <section id="cookies">
          <h2>6. Cookies and website data</h2>
          <p>We may use essential storage or similar technology where it is required for website security and core operation. The website does not currently use advertising or behavioural-marketing cookies.</p>
          <p>If we introduce non-essential analytics, advertising or similar technology, we will provide clear information and an appropriate consent choice before it is used where consent is required.</p>
        </section>

        <section id="rights">
          <h2>7. Your data protection rights</h2>
          <p>Depending on the circumstances, you may have the right to:</p>
          <ul>
            <li>ask for a copy of the personal information we hold about you;</li>
            <li>ask us to correct inaccurate or incomplete information;</li>
            <li>ask us to delete information or restrict how it is used;</li>
            <li>object to processing based on legitimate interests;</li>
            <li>receive certain information in a portable format; and</li>
            <li>withdraw consent where we rely on consent.</li>
          </ul>
          <p>These rights are not absolute and exemptions may apply. We may need to confirm your identity before responding. You will not normally have to pay a fee.</p>
        </section>

        <section id="contact">
          <h2>8. Contact us and make a complaint</h2>
          <p>To ask a privacy question or exercise your rights, contact us using the details below. Please include enough information for us to understand and respond to your request.</p>
          <div className="privacy-contact-card"><strong>Commercial EPC Direct</strong><p>A service provided by Gradwell Environmental</p><p><a href="mailto:hello@commercialepcdirect.co.uk">hello@commercialepcdirect.co.uk</a></p><p><a href="tel:08000000000">0800 000 0000</a></p></div>
          <h3>Complaints</h3>
          <p>If you are unhappy with how we have handled your information, please contact us first so we can try to resolve the matter. You also have the right to complain to the Information Commissioner’s Office. Visit <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noreferrer">ico.org.uk/make-a-complaint</a> for current contact details and guidance.</p>
          <h3>Changes to this notice</h3>
          <p>We may update this notice when our services, suppliers or legal obligations change. The latest version will always be published on this page with its revision date.</p>
        </section>
      </article>
    </div>

    <footer><a className="brand brand-footer" href="/"><span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>Commercial EPC <b>Direct</b></span></a><p>Commercial property assessments, made simple.</p><div className="footer-links"><a href="/">Home</a><a href="/services">Services</a><a href="/guides">Guides</a><a href="/about">About</a><a href="/locations">Locations</a><a href="/#quote">Get a quote</a></div><SocialLinks /><small>© {new Date().getFullYear()} Commercial EPC Direct. All rights reserved.</small></footer>
  </main>;
}
