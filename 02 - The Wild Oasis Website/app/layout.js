import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "Hello Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <p>Common Area</p>
      </body>
    </html>
  );
}
