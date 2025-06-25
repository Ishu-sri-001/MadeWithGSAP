"use client";
import React from "react";
import Hero from "@/components/Home/Hero";
import Header from "@/components/Header/Header";
import About from "@/components/Home/About";
import Cards from "@/components/Home/Cards";
import CardsMobile from "@/components/Home/CardsMobile";
import TextBreak from "@/components/Home/TextBreak";
import Clients from "@/components/Home/Clients";
import Approach from "@/components/Home/Approach";
import LineBreak from "@/components/Home/LineBreak";
import Ready from "@/components/Home/Ready";
import Footer from "@/components/Home/Footer";
import UseMobile from '@/components/Home/UseMobile'
import ClientsMobile from "@/components/Home/ClientsMobile"
import MobileHeader from "@/components/Header/MobileHeader"
import ReadyMobile from "@/components/Home/ReadyMobile"

export default function Home() {
  const isMobile = UseMobile();
  
  return (
    <>
      {/* <Header /> */}
      <Header/>
      <MobileHeader/>
      <Hero />
      <About />
       
      {!isMobile ? <Cards/> : <CardsMobile/>}
      <TextBreak />
      {!isMobile ? <Clients/> : <ClientsMobile/>}
      <Approach />
      <LineBreak />
      {!isMobile ? <Ready/> : <ReadyMobile/>}
      <Footer />
    </>
  );
}
