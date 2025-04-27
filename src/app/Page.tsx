"use client";
import { useEffect, useState } from "react";
import SideNav from "./components/SideNav";
import PrincipalContent from "./components/PrincipalContent";
import Header from "./components/Header";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [category, setCategory] = useState("Beef");

  useEffect(() => {
    // Fuerza redirección a la raíz en producción
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      router.replace("/");
      // Limpia la URL sin recargar
      window.history.replaceState(null, "", "/");
    }
  }, [router]);

  return (
    <>
      <Header></Header>
      <main className="flex flex-auto">
        <SideNav setCategory={setCategory}></SideNav>
        <PrincipalContent meal={category}></PrincipalContent>
      </main>
    </>
  );
}
