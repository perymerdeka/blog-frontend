import LatestPosts from "@/components/LatestPosts";
import StatsCard from "@/components/Statscard";
import VisitorGrowth from "@/components/VisitorGrowth";
import { FaEdit, FaUserCircle } from 'react-icons/fa';


export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-4xl">Dashboard</h1>
      <div className="grid grid-rows-2 lg:grid-cols-3 gap-10 mt-4 w-full">
        <StatsCard title="Posts" value={10} icon={<FaEdit />} />
        <StatsCard title="Categories" value={10} icon={<FaEdit />} />
        <StatsCard title="Users" value={10} icon={<FaUserCircle />} />
      </div>
      <div className="flex flex-row gap-8">
        <VisitorGrowth />
        <LatestPosts />
      </div>
    </div>
  );
}
