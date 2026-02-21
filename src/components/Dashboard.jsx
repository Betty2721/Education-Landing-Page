import SideBar from './Dashboard/SideBar';
import Header from './Dashboard/Header';
import ProfileCard from './Dashboard/ProfileCard';
import StatCard from './Dashboard/StatCard';
import ClassRow from './Dashboard/ClassRow';
import TaskItem from './Dashboard/TaskItem';
import { BookOpen, GraduationCap, Award } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f0f2f5] p-2 lg:p-4 flex w-full">
      <div className="flex w-full max-w-[1500px] overflow-hidden rounded-[2.5rem] bg-white shadow-xl ring-1 ring-black/5">
        <SideBar />
        
        <main className="flex-1 overflow-y-auto bg-gray-50/50 p-6 lg:p-10">
          <Header userName="Adeline" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              {/* Hero Banner */}
              <div className="relative flex h-52 overflow-hidden rounded-[2.5rem] bg-slate-800 text-white p-10">
                 <div className="z-10">
                  <h2 className="text-3xl font-bold leading-tight">Upgrade Your Skills with<br />Expert Online Courses</h2>
                  <button className="mt-6 rounded-xl bg-white px-6 py-2.5 text-sm font-bold text-slate-900">See All</button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <StatCard color="bg-orange-50" iconColor="text-orange-400" value="24" label="Enrolled Course" icon={BookOpen} />
                <StatCard color="bg-emerald-50" iconColor="text-emerald-400" value="34" label="Lessons" icon={GraduationCap} />
                <StatCard color="bg-blue-50" iconColor="text-blue-400" value="10" label="Certificates" icon={Award} />
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <h3 className="mb-6 text-lg font-bold">My class list</h3>
                <ClassRow title="Product Design Tutorial" level="Beginner" time="08:00" progress={50} />
                <ClassRow title="UX Research" level="Expert" time="15:00" progress={20} />
              </div>
            </div>

            <div className="space-y-8">
              <ProfileCard name="Adeline Watson" role="Basic Member" activityData={[40, 70, 30, 90, 50, 80, 60]} />
              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <h3 className="mb-6 text-lg font-bold">List Task</h3>
                <TaskItem emoji="👩‍💻" title="Make user flow" date="14 Nov" />
                <TaskItem emoji="🧐" title="User interview" date="12 Nov" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}