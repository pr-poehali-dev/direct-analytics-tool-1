import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface LandingPageProps {
  onGetStarted?: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps = {}) {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo');
    demoSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetStarted = () => {
    if (onGetStarted) {
      onGetStarted();
    } else {
      scrollToDemo();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <Icon name="BarChart3" className="text-white" size={18} />
              </div>
              <span className="text-lg font-semibold text-gray-900">Директ Аналитика</span>
            </div>
            <Button 
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6" 
              onClick={handleGetStarted}
            >
              Попробовать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight text-gray-900 tracking-tight">
              Аналитика Директа,
              <br />
              <span className="text-sky-500">которой можно доверять</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Считаем данные по правилам. Находим проблемы. Даём план действий. 
              Без магии AI и субъективных «кажется».
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-8 h-14 rounded-full" 
                onClick={handleGetStarted}
              >
                Получить аудит бесплатно
              </Button>
            </div>
            <p className="text-sm text-gray-500">Загрузите Excel из Директа — получите отчёт за 2 минуты</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 border-y border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {[
              { value: '~2 мин', label: 'Время анализа' },
              { value: '15+', label: 'Проверенных правил' },
              { value: '100%', label: 'Прозрачность' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              В чём проблема
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Большинство отчётов не отвечают на главный вопрос
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Перегружены цифрами',
                desc: 'Сотни строк данных без понятных выводов'
              },
              {
                title: 'Субъективны',
                desc: 'Зависят от мнения специалиста, а не правил'
              },
              {
                title: 'AI без проверки',
                desc: 'Звучат умно, но расчёты могут быть неверны'
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 border-2 border-gray-100 hover:border-gray-900 transition-all">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="X" className="text-gray-900" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Наш подход
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Факты → Правила → Решения
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  num: '01',
                  title: 'Данные и метрики',
                  desc: 'Очищаем данные, считаем бенчмарки явно'
                },
                {
                  num: '02',
                  title: 'Правила аналитики',
                  desc: 'Применяем фиксированные пороги без субъективности'
                },
                {
                  num: '03',
                  title: 'AI для объяснений',
                  desc: 'Переводим выводы на человеческий язык'
                },
                {
                  num: '04',
                  title: 'План действий',
                  desc: 'Конкретные шаги с приоритетами на 14 дней'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="text-5xl font-bold text-sky-500 opacity-50">{item.num}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Card className="p-8 bg-gray-800 border-gray-700">
              <h4 className="text-lg font-semibold mb-6 text-white">Примеры правил</h4>
              <div className="space-y-4">
                {[
                  'CPC ↑ + CTR ↓ → риск неэффективного расхода',
                  '68% бюджета в 2 кампаниях → системный риск',
                  'CTR в РСЯ > 5% → мусорные площадки',
                  'Клики без расхода → проблема данных'
                ].map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <Icon name="Check" className="text-sky-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Что вы получаете
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: 'Sparkles',
                title: 'TL;DR',
                desc: 'Главное одним абзацем — что происходит и что делать',
                color: 'bg-yellow-100 text-yellow-700'
              },
              {
                icon: 'AlertTriangle',
                title: 'Список проблем',
                desc: 'Критичные риски с приоритетами и конкретными цифрами',
                color: 'bg-red-100 text-red-700'
              },
              {
                icon: 'ListChecks',
                title: 'План на 14 дней',
                desc: 'Пошаговый план действий с распределением по приоритетам',
                color: 'bg-blue-100 text-blue-700'
              },
              {
                icon: 'MessageSquare',
                title: 'Вопросы',
                desc: 'Что нужно уточнить для более точной оптимизации',
                color: 'bg-purple-100 text-purple-700'
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 border-2 border-gray-100 hover:border-gray-900 transition-all">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon name={item.icon as any} size={28} />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-20 px-6 bg-sky-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Для кого
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-10 border-2 border-sky-200 bg-white">
              <div className="w-16 h-16 bg-sky-500 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Briefcase" className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Директолог</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Экономьте время на рутине. Повторяемая логика. 
                Отчёты для клиентов.
              </p>
              <ul className="space-y-3">
                {[
                  'Автоматизация аудитов',
                  'Готовые отчёты за минуты',
                  'Усиление экспертизы'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <Icon name="Check" className="text-sky-500" size={20} />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-10 border-2 border-sky-200 bg-white">
              <div className="w-16 h-16 bg-sky-500 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Building2" className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Бизнес</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Понимайте рекламу без разбора в Директе. 
                Ясные выводы и план.
              </p>
              <ul className="space-y-3">
                {[
                  'Картина рисков',
                  'Понятный язык',
                  'Конкретный план'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <Icon name="Check" className="text-sky-500" size={20} />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="demo" className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Получите аудит бесплатно
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Загрузите выгрузку из Директа и получите детальный отчёт за 2 минуты
          </p>
          <Button 
            size="lg" 
            className="bg-sky-500 hover:bg-sky-600 text-white text-lg px-10 h-16 rounded-full"
            onClick={handleGetStarted}
          >
            <Icon name="Sparkles" size={22} className="mr-2" />
            Попробовать сейчас
          </Button>
          <p className="text-sm text-gray-500 mt-6">Без регистрации • Результат сразу • Экспорт в PDF</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <Icon name="BarChart3" className="text-white" size={18} />
              </div>
              <span className="text-lg font-semibold text-gray-900">Директ Аналитика</span>
            </div>
            <div className="text-sm text-gray-600">
              © 2024 Аналитика без магии
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
