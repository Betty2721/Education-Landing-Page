import React from 'react';
import { ChevronRight } from 'lucide-react';

const TaskItem = ({ emoji, title, date }) => (
  <div className="flex items-center gap-4 group cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition">
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-lg">
      {emoji}
    </div>
    <div className="flex-1">
      <h4 className="text-xs font-bold text-slate-700">{title}</h4>
      <p className="text-[10px] text-gray-400">{date}</p>
    </div>
    <ChevronRight className="text-gray-300 group-hover:text-indigo-400 transition-colors" size={16} />
  </div>
);

export default TaskItem;