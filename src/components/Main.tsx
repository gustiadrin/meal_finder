"use client";
import { ReactNode, useState } from "react";
import SideNav from "./SideNav";
import PrincipalContent from "./PrincipalContent";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Main = (props: Props) => {
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
