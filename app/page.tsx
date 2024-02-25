import Analytics from "@/components/Analytics";
import Cards from "@/components/Card";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NewsLatter from "@/components/Newsletter";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLatter />
      <Cards />
      <Footer />
    </main>
  );
}
