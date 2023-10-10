import "./globals.css";
import Navbar from "./components/Navbar";
import Mobnavbar from "./components/Mobnavbar";
import { Montserrat } from "next/font/google";
import { NavProvider } from "./context/navcontext";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "FalconView",
  description: "A 3D and visual identity studio",
};

export default function RootLayout({ children }) {
  return (
    <NavProvider>
      <html lang="en">
        <body className={montserrat.className}>
          <div className="lg:block hidden">
            <Navbar />
          </div>
          <div className="lg:hidden">
            <Mobnavbar />
          </div>
          {children}
        </body>
      </html>
    </NavProvider>
  );
}
