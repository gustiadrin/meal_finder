"use client";
import { useState } from "react";
import SideNav from "./SideNav";
import PrincipalContent from "./PrincipalContent";
import Header from "./Header";

const Main = () => {
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
};

export default Main;
