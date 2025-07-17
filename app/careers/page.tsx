"use client";

import CareersMain from "@/app/careers/CareersMain";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/footer";
import CareersPhilosophy from "./CareersPhilosophy";
import JobListings from "./JobListings";
import InternationalTeam from "./InternationalTeam";

export default function CareersPage() {
  return (
    <>
      <Header />
      <CareersMain />
      <InternationalTeam />
      {/* <CareersPhilosophy /> */}
      <JobListings />
      <Footer />
    </>
  );
}
