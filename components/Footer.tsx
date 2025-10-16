export default function Footer() {
  interface FooterProps {
    className?: string;
  }
  const footerProps: FooterProps = {
    className:
      "bg-custom-green text-custom-black font-semibold py-4 text-center",
  };
  const currentYear = new Date().getFullYear();
  const copyrightText = `© ${currentYear} ORBYZ Studio. All rights reserved.`;

  return (
    <footer className={footerProps.className}>
      <p>{copyrightText}</p>
    </footer>
  );
}
