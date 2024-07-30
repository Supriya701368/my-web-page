"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import { Header } from "@/Header/Header";
import { Footer } from "@/Footer/Footer";
import { Menu } from "@/Menu/Menu";
import { Provider } from "react-redux";
import { appStore } from "@/redux/appStore";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const menuItems = [
    {
      id: 'home',
      path: 'home',
      text: 'Home'
    },
    {
      id: 'about',
      path: 'about',
      text: 'About'
    },
    {
      id: 'contact',
      path: 'contact',
      text: 'Contact'
    },
    {
      id: 'count',
      path: 'count',
      text: 'Count'
    },
    {
      id: 'photos',
      path: 'photos',
      text: 'Photos'
    }
  ]
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider store={appStore}>
          <Header />
          <Menu menuItems={menuItems} />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
