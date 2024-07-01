import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

// main layout of app --> So global style is okey to use
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

export const metadata = {
  // title: "Keep Going Forward || The Wield Oasis",
  title: {
    template: "The Wield Oasis || %s",
    default: "The Wield Oasis",
  },
  description:
    "hotel, located in the heart of Italian Dolomites, surrounded by beautiful mountains and dark forest",
};

const josefin_Font = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
console.log(josefin_Font);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin_Font.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
