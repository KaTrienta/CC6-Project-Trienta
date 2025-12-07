import "./globals.css";
import Navbar from "./components/navbar";

export const metadata = {
  title: "My Website",
  description: "Next.js Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />  {/* <-- Navbar appears on all pages */}
        {children}  {/* This renders page.tsx or contact/page.tsx */}
      </body>
    </html>
  );
}
