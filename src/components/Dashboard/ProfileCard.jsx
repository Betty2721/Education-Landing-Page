import { MoreHorizontal, ChevronRight } from 'lucide-react';

const ProfileCard = ({ name, role, activityData }) => (
  <div className="rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-black/5">
    <div className="mb-4 flex justify-end text-gray-300"><MoreHorizontal /></div>
    <div className="relative mx-auto mb-4 h-24 w-24">
      <img src={`https://i.pravatar.cc/150?u=${name}`} className="rounded-full border-4 border-pink-50" alt="Avatar" />
      <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg shadow-sm">👑</div>
    </div>
    <h3 className="text-xl font-bold">{name}</h3>
    <p className="text-xs font-medium text-gray-400">{role}</p>
    
    <div className="mt-8 text-left">
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold">3.5 H <span className="text-[10px] font-normal text-gray-400 block">Activity</span></p>
        <select className="rounded-lg bg-gray-50 px-2 py-1 text-[10px] outline-none">
          <option>Weekly</option>
        </select>
      </div>
      <div className="mt-4 flex items-end justify-between gap-1 h-20">
        {activityData.map((h, i) => (
          <div key={i} className={`flex-1 rounded-t-md ${i === 3 ? 'bg-indigo-400' : 'bg-indigo-100'}`} style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  </div>
);

export default ProfileCard ;