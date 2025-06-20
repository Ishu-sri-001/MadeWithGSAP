import React from "react";
import Hero from "@/components/Home/Hero"
import Header from "@/components/Header/Header"
import About from "@/components/Home/About"
import Cards from "@/components/Home/Cards"
import TextBreak from "@/components/Home/TextBreak"
import Clients from "@/components/Home/Clients"
import Approach from "@/components/Home/Approach"
import LineBreak from "@/components/Home/LineBreak"
import Ready from "@/components/Home/Ready"
import Footer from "@/components/Home/Footer"


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      {/* <Learn /> */}
      <Cards />
      <TextBreak />
      <Clients />
      <Approach />
      <LineBreak />
      <Ready />
      <Footer />
    </>
  );
}
