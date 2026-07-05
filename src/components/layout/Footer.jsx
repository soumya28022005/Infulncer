import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";
import { profile, socialLinks } from "../../config/data";

const iconMap = {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-xl font-semibold text-white tracking-tight">
              {profile.name}
              <span className="text-amber-500">.</span>
            </p>
            <p className="text-sm mt-1">{profile.profession}</p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon];

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {Icon && <Icon size={16} />}
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>Designed & built for premium brand collaborations.</p>
        </div>
      </div>
    </footer>
  );
}