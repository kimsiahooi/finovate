"use client";

import Header from "@/components/layouts/Header";
import { Assets, Banner, ScheduleCall } from "@/components/pages/home";

export default function Home() {
  return (
    <>
      <Header />
      <ScheduleCall />
      <Banner />
      <Assets />
    </>
  );
}
