import "./globals.css";

export const metadata = {
  title: "personal-website",
  description: "Personal website of FlQyD.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
