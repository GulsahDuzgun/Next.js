import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationContext } from "./_components/ReservationContext";

export const metadata = {
  // title: "Keep Going Forward || The Wield Oasis",
  title: {
    template: "The Wild Oasis || %s",
    default: "The Wild Oasis",
  },
  description:
    "hotel, located in the heart of Italian Dolomites, surrounded by beautiful mountains and dark forest",
};

const josefin_Font = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
console.log(josefin_Font);

// The children props is the page.js -server component-, So ReservationContext is Client Component but we send the executed React element to this Client Component.

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin_Font.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full ">
            <ReservationContext>{children}</ReservationContext>
          </main>
        </div>
      </body>
    </html>
  );
}
