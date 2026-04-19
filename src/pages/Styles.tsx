import ShaderBackground from "@/components/ShaderBackground"
import Header from "@/components/Header"

const styles = [
  {
    emoji: "📋",
    title: "Официально-деловой",
    situations: "Документы, указания, отчёты, деловая переписка, распоряжения.",
    goal: "Передать информацию формально, точно, регламентировано; минимизировать двусмысленность.",
    tags: ["Точность", "Формальность", "Стандарт"],
  },
  {
    emoji: "🔬",
    title: "Научный",
    situations: "Статьи, монографии, лекции, доклады, научные рецензии.",
    goal: "Описать, объяснить, аргументировать; приоритет объективности и терминологической точности.",
    tags: ["Объективность", "Терминология", "Аргументация"],
  },
  {
    emoji: "📰",
    title: "Публицистический",
    situations: "Газетные и журнальные статьи, очерки, выступления, комментарии в СМИ.",
    goal: "Информировать и убеждать широкую аудиторию; эмоциональная экспрессия сочетается с доступностью.",
    tags: ["Экспрессия", "Доступность", "Убеждение"],
  },
  {
    emoji: "🎭",
    title: "Художественный",
    situations: "Проза, поэзия, драматургия.",
    goal: "Эстетическое воздействие, передача образов и эмоций; высокая роль экспрессии и стилистических средств.",
    tags: ["Образность", "Эстетика", "Экспрессия"],
  },
  {
    emoji: "💬",
    title: "Разговорный",
    situations: "Повседневное общение, бытовые переговоры, диалоги.",
    goal: "Оперативное, неформальное взаимодействие; эмоциональность, фразеологизм, сокращённая грамматика.",
    tags: ["Неформальность", "Эмоциональность", "Диалог"],
  },
]

export default function Styles() {
  return (
    <ShaderBackground>
      <Header />
      <div className="relative z-20 px-8 pt-24 pb-12">
        <div className="max-w-4xl">
          <div
            className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
            style={{ filter: "url(#glass-effect)" }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
            <span className="text-white/90 text-xs font-light relative z-10">Культура речи — функциональные стили</span>
          </div>

          <h1 className="text-5xl md:text-6xl tracking-tight font-light text-white mb-3">
            <span className="font-medium italic">Функциональные</span> стили
            <br />
            <span className="font-light text-white">русского языка</span>
          </h1>
          <p className="text-xs font-light text-white/70 mb-10 leading-relaxed max-w-xl">
            Функциональные стили — устойчивые наборы языковых средств, связанных с типовыми коммуникативными ситуациями.
            Каждый стиль обладает своими лексическими, фразеологическими, синтаксическими и прагматическими характеристиками.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {styles.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{s.emoji}</span>
                  <div className="flex-1">
                    <h3 className="text-white text-sm font-medium mb-2">{s.title}</h3>
                    <p className="text-white/50 text-xs font-light mb-1 leading-relaxed">
                      <span className="text-white/70">Ситуации: </span>{s.situations}
                    </p>
                    <p className="text-white/50 text-xs font-light mb-3 leading-relaxed">
                      <span className="text-white/70">Цель: </span>{s.goal}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full bg-white/10 text-white/60 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-4">
            <a href="/" className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50">
              На главную
            </a>
            <a href="/lexics" className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90">
              Ограниченная лексика →
            </a>
          </div>
        </div>
      </div>
    </ShaderBackground>
  )
}