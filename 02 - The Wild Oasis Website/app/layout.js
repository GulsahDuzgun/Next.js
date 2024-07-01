import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

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
        className={`${josefin_Font.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
