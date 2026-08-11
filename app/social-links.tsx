const socialProfiles = [
  { name: "Facebook", initials: "f" },
  { name: "LinkedIn", initials: "in" },
];

export default function SocialLinks() {
  return (
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
  );
}
