import { FeatureJob, Hero, JobCategories, JobpilotWork, PopularCategories } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <JobCategories/>
      <JobpilotWork/>
      <PopularCategories/>
      <FeatureJob/>
    </main>
  );
}
