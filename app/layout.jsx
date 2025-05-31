import { Toaster } from "react-hot-toast";
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
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
