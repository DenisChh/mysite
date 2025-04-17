import type { Metadata } from "next";
import { Nunito} from "next/font/google";
import "./globals.css";
import Dashboard from "./dashboard/dashboard";
import { NavigationProvider } from "./context/navigation";

const nunito = Nunito({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Denis Chheang",
  description: "Le site du développeur Denis Chheang",
  //viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: '0px', padding: '0px' }} className={`${nunito.className}`}>
        <NavigationProvider>
          <Dashboard />
          {children}
        </NavigationProvider>
      </body>
    </html>
  );
}
