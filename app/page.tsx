import { FeatureJob, Hero, JobCategories, JobpilotWork, PopularCategories, TestimonialSlider, TopCampany } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <JobCategories/>
      <JobpilotWork/>
      <PopularCategories/>
      <FeatureJob/>
      <TopCampany/>
      <TestimonialSlider/>
    </main>
  );
}
