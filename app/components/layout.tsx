import { ReactNode } from 'react';
import Navbar from './Navbar';
import '../globals.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24 px-8 md:px-16 lg:px-44 xl:px-56">{children}</main>
        <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
          &copy; {new Date().getFullYear()} Penetration Test Tool
        </footer>
      </body>
    </html>
  );
}
