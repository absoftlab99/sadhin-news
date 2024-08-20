import LatestTicker from "@/components/NewsTicker/LatestTicker";
import CategoryNewsLayout from "@/components/Post/CategoryNews/CategoryNewsLayout";
import LeadNewsLayout from "@/components/Post/LeadNews/LeadNewsLayout";
import Image from "next/image";

export default function Home() {
  return (
    <div className="my-5">
        <div className="mb-4"><LatestTicker></LatestTicker></div>
        <LeadNewsLayout></LeadNewsLayout>
        <div className="divider divider-error text-error font-bold text-[18px] md:text-[24px] my-10">রাজনীতি</div>
        <CategoryNewsLayout></CategoryNewsLayout>
    </div>
  );
}
