const StatCard = ({ color, value, label, icon: Icon }) => (
  <div className={`${color} rounded-3xl p-6 transition-transform hover:scale-[1.02]`}>
    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
       <Icon size={20} className="text-inherit" />
    </div>
    <span className="text-2xl font-bold">{value}</span>
    <p className="text-[10px] font-semibold text-gray-500">{label}</p>
  </div>
);

export default StatCard;