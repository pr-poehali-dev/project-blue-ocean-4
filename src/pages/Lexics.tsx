import ShaderBackground from "@/components/ShaderBackground"
import Header from "@/components/Header"

const lexics = [
  {
    emoji: "🏛️",
    title: "Историзмы",
    description: "Слова, вышедшие из активного употребления, обозначающие предметы и явления прошлого (дьяк, ратифа).",
    usage: "Используются в историческом контексте, художественной стилизации.",
    tags: ["История", "Стилизация"],
  },
  {
    emoji: "📜",
    title: "Архаизмы",
    description: "Устаревшие слова, иногда употребляются с выразительной целью (покуда, вельможа).",
    usage: "В художественной речи — стилизация, поэтический эффект; в официальном стиле — недопустимы.",
    tags: ["Поэзия", "Выразительность"],
  },
  {
    emoji: "✨",
    title: "Неологизмы",
    description: "Новые слова или новые значения (блогер, лайкать).",
    usage: "Активны в публицистике и разговорной речи. В официальных текстах требуют нормативного подтверждения.",
    tags: ["Публицистика", "Современность"],
  },
  {
    emoji: "🌿",
    title: "Диалектизмы",
    description: "Региональные варианты слов и выражений (лапоть — в некоторых говорах).",
    usage: "Используются для колорита, речевой типизации персонажей.",
    tags: ["Колорит", "Регионализм"],
  },
  {
    emoji: "🔧",
    title: "Профессионализмы",
    description: "Термины и жаргоны профессиональных групп (сервер, рентген, пиликатор).",
    usage: "Точная коммуникация внутри профессионального сообщества; при общении с неспециалистами требуют расшифровки.",
    tags: ["Терминология", "Точность"],
  },
  {
    emoji: "💬",
    title: "Жаргонизмы",
    description: "Слова и выражения социальной групповой речи (тусовка, чекать).",
    usage: "Нежелательны в официальных и научных текстах; в разговорной и публицистической речи создают эффект близости к аудитории.",
    tags: ["Разговорность", "Экспрессия"],
  },
]

const tips = [
  "Соответствие аудитории и цели — профессионализмы и неологизмы пояснять при необходимости.",
  "В официальных и научных текстах избегать жаргонизмов, архаизмов и неустановившихся неологизмов.",
  "В художественной и публицистической речи использовать ограниченную лексику осознанно для выразительности.",
  "Перед написанием определить стиль, аудиторию и цель.",
  "Редактировать текст с позиции однородности стиля: убирать смешение официальных и разговорных элементов.",
  "Проверять сомнительные слова в словарях (орфографических, толковых, паронимических).",
  "Уменьшать количество канцеляризмов; избегать избыточного использования аббревиатур.",
  "В диалоге и публичных выступлениях следить за ясностью: избегать омонимии и паронимических ошибок.",
]

export default function Lexics() {
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
            <span className="text-white/90 text-xs font-light relative z-10">Культура речи — лексика</span>
          </div>

          <h1 className="text-5xl md:text-6xl tracking-tight font-light text-white mb-3">
            <span className="font-medium italic">Ограниченная</span> лексика
            <br />
            <span className="font-light text-white">типы и функции</span>
          </h1>
          <p className="text-xs font-light text-white/70 mb-10 leading-relaxed max-w-xl">
            Ограниченная лексика — слова и выражения, применимые лишь в определённых коммуникативных ситуациях.
            Знание их функций помогает использовать язык точно и уместно.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {lexics.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{item.emoji}</span>
                  <div className="flex-1">
                    <h3 className="text-white text-sm font-medium mb-2">{item.title}</h3>
                    <p className="text-white/60 text-xs font-light mb-1 leading-relaxed">{item.description}</p>
                    <p className="text-white/50 text-xs font-light mb-3 leading-relaxed">
                      <span className="text-white/70">Применение: </span>{item.usage}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-full bg-white/10 text-white/60 text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6">
            <h2 className="text-white text-sm font-medium mb-4">Практические рекомендации</h2>
            <ul className="space-y-3">
              {tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-white/30 text-xs mt-0.5 font-light">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-white/60 text-xs font-light leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ShaderBackground>
  )
}
