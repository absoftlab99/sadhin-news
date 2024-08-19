import LatestTicker from "@/components/NewsTicker/LatestTicker";
import LeadNewsLayout from "@/components/Post/LeadNews/LeadNewsLayout";
import Image from "next/image";

export default function Home() {
  return (
    <div className="my-5">
        <LatestTicker></LatestTicker>
        <LeadNewsLayout></LeadNewsLayout>
        <div className="divider divider-error text-error font-bold text-[18px] md:text-[24px] my-10">রাজনীতি</div>
    </div>
  );
}
