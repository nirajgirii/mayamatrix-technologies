import "./globals.css";

export const metadata = {
  title: "MayaMatrix Technologies",
  description: "Creating better digital products through Sound and Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
