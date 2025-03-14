export const metadata: Metadata = {
  title: 'Layout Page',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <h1>Layout Entry</h1>
      <body>{children}</body>
      <h1>Layout LAst</h1>
    </html>
  );
}
