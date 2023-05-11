import Image from "next/image";
import Navbar from "./components/Navbar";
import Homes from "./components/Homes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Homes />
    </main>

  );
}
