"use client";

import CareersMain from "@/app/careers/CareersMain";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/footer";
import CareersPhilosophy from "./CareersPhilosophy";
import JobListings from "./JobListings";
export default function CareersPage() {
  return (
    <>
      <Header />
      <CareersMain />
      <CareersPhilosophy />
      <JobListings />
      <Footer />
    </>
  );
}
