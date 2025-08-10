import Hero from "@/components/hero";
import MySection from "@/components/gateway";
import Showcase from "@/components/showcase";
import Image from "next/image";
import Gateway from "@/components/gateway";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />

        <div className="h-screen"></div>
        <Showcase />
        <Gateway />
      </main>
      <footer className="">

      </footer>
    </div>
  );
}
