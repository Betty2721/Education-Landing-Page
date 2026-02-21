import { Search, MessageSquare, Bell } from 'lucide-react';

const Header = ({ userName }) => (
  <header className="mb-8 flex items-center justify-between">
    <h1 className="text-2xl font-bold">Welcome back, {userName} 👋</h1>
    <div className="flex items-center gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input 
          type="text" 
          placeholder="Search anything..." 
          className="w-64 rounded-full bg-white py-2 pl-10 pr-4 text-sm shadow-sm outline-none ring-1 ring-black/5 focus:ring-2 focus:ring-purple-200"
        />
      </div>
      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm ring-1 ring-black/5">
        <MessageSquare size={18} />
      </button>
      <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm ring-1 ring-black/5">
        <Bell size={18} />
        <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
      </button>
    </div>
  </header>
);

export default Header;