
const ClassRow = ({ title, level, time, progress }) => (
  <div className="flex items-center gap-4 border-b border-gray-50 pb-4 last:border-0">
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 text-xl">✨</div>
    <div className="flex-1">
      <h4 className="text-sm font-bold text-slate-700">{title}</h4>
      <p className="text-[10px] text-gray-400">{level} • {time}</p>
    </div>
    <div className="w-24 px-4 hidden sm:block">
      <p className="mb-1 text-[10px] font-bold text-slate-700">{progress}% Finish</p>
      <div className="h-1.5 w-full rounded-full bg-gray-100">
        <div className="h-full rounded-full bg-indigo-500" style={{ width: `${progress}%` }} />
      </div>
    </div>
    <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold text-emerald-500 whitespace-nowrap">
      • On Progress
    </span>
  </div>
);

export default ClassRow;