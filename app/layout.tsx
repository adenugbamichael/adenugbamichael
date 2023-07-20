import "./globals.css"

export const metadata = {
  title: "Michael Adenugba",
  description: "My portfolio website built with next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
