const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-current/10 text-sm text-brand/80">
      <p className="text-center">
        Copyright © {currentYear}, Utkarsh Raj. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
