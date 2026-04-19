const sections = [
  {
    icon: "💬",
    title: "Коммуникативный аспект",
    description: "Выбор функционального стиля, лексики и точности в зависимости от адресата, цели и канала общения.",
  },
  {
    icon: "📚",
    title: "Функциональные стили",
    description: "Научный, официально-деловой, публицистический, разговорный — особенности и сферы применения каждого.",
  },
  {
    icon: "🔤",
    title: "Лексические средства",
    description: "Синонимы, термины, эмоционально окрашенная лексика — как выбрать нужное слово для точного выражения мысли.",
  },
  {
    icon: "✅",
    title: "Нормативность речи",
    description: "Орфоэпические, грамматические и стилистические нормы как основа грамотной и культурной речи.",
  },
]

export default function LectureSections() {
  return (
    <section className="relative z-20 px-8 pb-12 pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
        {sections.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
          >
            <div className="text-2xl mb-3">{s.icon}</div>
            <h3 className="text-white text-sm font-medium mb-2">{s.title}</h3>
            <p className="text-white/60 text-xs font-light leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
