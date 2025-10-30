const Footer = () => {
  const quickLinks = ['Privacy Policy', 'Terms of Use', 'Sitemap'];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">

        {/* Copyright Text (Left on Desktop) */}
        <p className="mb-4 md:mb-0">
          &copy; {currentYear} Headless Drupal. All rights reserved.
        </p>

        {/* Quick Links (Right on Desktop) */}
        <nav className="flex space-x-6">
          {quickLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(/\s/g, '-')}`} className="hover:text-accent-blue transition">
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
