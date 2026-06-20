const stats = [
  {
    value: "12",
    label: "Departments",
  },
  {
    value: "120+",
    label: "Active Members",
  },
  {
    value: "50+",
    label: "Events / Year",
  },
  {
    value: "15K",
    label: "Students Served",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-white/10 py-20">
      <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-10 px-6 text-center">
        {stats.map((item) => (
          <div key={item.label}>
            <h2 className="text-5xl font-bold">{item.value}</h2>
            <p className="mt-2 text-zinc-400">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}