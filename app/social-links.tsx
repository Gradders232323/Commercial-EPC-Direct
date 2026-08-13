const socialProfiles = [
  { name: "Facebook", initials: "f" },
  { name: "LinkedIn", initials: "in" },
];

export default function SocialLinks() {
  return (
    <>
    <div className="footer-contact">
      <span className="footer-social-label">Contact us</span>
      <div><a href="tel:01827488063"><i aria-hidden="true">☎</i><span><small>Call our team</small>01827 488063</span></a><a href="mailto:admin@commercialepcdirect.co.uk"><i aria-hidden="true">@</i><span><small>Email us</small>admin@commercialepcdirect.co.uk</span></a></div>
    </div>
    <div className="footer-social" aria-label="Social media profiles coming soon">
      <span className="footer-social-label">Follow us</span>
      <div>
        {socialProfiles.map((profile) => (
          <span className="social-badge" key={profile.name} aria-label={`${profile.name} profile coming soon`}>
            <i aria-hidden="true">{profile.initials}</i>
            <span>{profile.name}</span>
            <small>Coming soon</small>
          </span>
        ))}
      </div>
    </div>
    <div className="footer-legal"><a href="/privacy">Privacy notice</a></div>
    </>
  );
}
