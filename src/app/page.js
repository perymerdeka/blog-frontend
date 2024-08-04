import LatestPosts from "@/components/LatestPosts";
import StatsCard from "@/components/Statscard";
import VisitorGrowth from "@/components/VisitorGrowth";
import { FaEdit, FaUserCircle } from 'react-icons/fa';


export default function Home() {
  return (
    <div className="">
      <h1 className="text-4xl">Dashboard</h1>
      <div className="flex flex-row gap-8 mt-8">
        <StatsCard title="Posts" value={10} icon={<FaEdit />} />
        <StatsCard title="Categories" value={10} icon={<FaEdit />} />
        <StatsCard title="Users" value={10} icon={<FaUserCircle />} />
      </div>
      <div className="flex flex-row mt-16">
        <VisitorGrowth />
        <LatestPosts />
      </div>
    </div>
  );
}
