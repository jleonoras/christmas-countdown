import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  const toYear = currentYear; // Initialize toYear
  const fromYear = 2024;
  const myCopyright = 'Made with ❤️ by John Leonoras';

  // Conditionally determine the footer text
  const footerText =
    fromYear === toYear
      ? `© ${fromYear}. ${myCopyright}` : `© ${fromYear} - ${toYear}. ${myCopyright}`;

  return (
    <footer id="footer">
      <p>{footerText}</p>
    </footer>
  );
}

export default Footer;