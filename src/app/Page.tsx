"use client";
import { useEffect, useState } from "react";
import SideNav from "./components/SideNav";
import PrincipalContent from "./components/PrincipalContent";
import Header from "./components/Header";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirige todas las rutas no existentes a /
    if (window.location.pathname !== "/") {
      router.replace("/");
    }
  }, []);
  const [category, setCategory] = useState("Beef");
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
