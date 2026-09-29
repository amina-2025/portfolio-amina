import "./globals.css";
export const metadata = {
  title: "Amina Portfolio",
  description: "Amina Portfolio",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}