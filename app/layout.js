import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "MayaMatrix Technologies",
  description: "Creating better digital products through Sound and Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
