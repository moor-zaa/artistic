import Hero from "@/components/hero";
import Showcase from "@/components/showcase";
import Gateway from "@/components/gateway";
import AmazingText from "@/components/amazing-text";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />

        <div className="h-screen"></div>
        <Showcase />
        <Gateway />
        <AmazingText />
      </main>
      <footer className="">

      </footer>
    </div>
  );
}
