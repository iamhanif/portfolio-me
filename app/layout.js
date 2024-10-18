import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Adjust the weights as needed
});

export const metadata = {
  title: "Md Hanif",
  description:
    "A modern portfolio built using Next.js, Tailwind CSS, and Framer Motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden" className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
