import { LayoutDashboard, BookOpen, CheckSquare, Users, BarChart3, Calendar, Settings, HelpCircle, Rocket } from 'lucide-react';

const NavItem = ({ icon, label, active = false }) => (
  <div className={`flex cursor-pointer items-center gap-4 rounded-2xl px-4 py-3 text-sm font-semibold transition ${active ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-100' : 'text-gray-400 hover:bg-gray-50'}`}>
    {icon} <span>{label}</span>
  </div>
);

const SideBar = () => (
  <aside className="hidden w-64 flex-col border-r border-gray-100 bg-white p-6 lg:flex">
    <div className="mb-10 flex items-center gap-2 px-2">
      {/* <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-pink-500 to-indigo-600 text-white font-bold">//</div> */}
        <span className="text-xl font-black tracking-tighter">BORCELLE</span>
    </div>

    <nav className="flex flex-1 flex-col gap-2">
      <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
      <NavItem icon={<BookOpen size={20} />} label="Course" />
      <NavItem icon={<CheckSquare size={20} />} label="My Task" />
      <NavItem icon={<Users size={20} />} label="Community" />
      <NavItem icon={<BarChart3 size={20} />} label="Report" />
      <NavItem icon={<Calendar size={20} />} label="Events" />
      <div className="mt-10 space-y-2">
        <NavItem icon={<Settings size={20} />} label="Setting" />
        <NavItem icon={<HelpCircle size={20} />} label="Support" />
      </div>
    </nav>

    <div className="mt-auto rounded-3xl bg-gray-50 p-6 text-center ring-1 ring-gray-100">
      <div className="mx-auto -mt-12 mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 shadow-lg shadow-purple-200">
        <Rocket className="text-pink-400" size={24} />
      </div>
      <h4 className="text-sm font-bold">Upgrade Premium</h4>
      <p className="mb-4 text-[10px] text-gray-400">Get exclusive access, advanced tools, and support</p>
      <button className="w-full rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white transition hover:bg-black">Get Premium</button>
    </div>
  </aside>
);

export default SideBar ;