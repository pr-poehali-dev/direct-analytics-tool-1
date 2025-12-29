import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
                <Icon name="BarChart3" className="text-white" size={24} />
              </div>
              <span className="text-xl font-semibold text-gray-900">Директ Аналитика</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Как работает
              </a>
              <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Возможности
              </a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Тарифы
              </a>
              <Button className="bg-sky-500 hover:bg-sky-600" onClick={handleGetStarted}>
                Попробовать
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge variant="outline" className="bg-sky-100 text-sky-700 border-sky-300">
                Аналитика без магии
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                Аналитика Яндекс.Директ, которой можно доверять
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Инструмент для директологов и бизнеса: сначала считает данные и применяет правила, 
                потом объясняет выводы человеческим языком.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-lg px-8" onClick={handleGetStarted}>
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Получить аудит
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>
              <div className="flex items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-green-500" size={16} />
                  <span>Без субъективности</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-green-500" size={16} />
                  <span>Прозрачные правила</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-green-500" size={16} />
                  <span>Готовый план</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl blur-3xl opacity-20"></div>
              <Card className="relative p-6 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Анализ кампаний</span>
                    <Badge className="bg-green-100 text-green-700 border-green-300">
                      <Icon name="TrendingUp" size={12} className="mr-1" />
                      Готово
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <Icon name="AlertTriangle" className="text-red-600" size={16} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">3 критичные проблемы</div>
                        <div className="text-xs text-gray-500">Требуют немедленного внимания</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Icon name="AlertCircle" className="text-orange-600" size={16} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">5 рисков обнаружено</div>
                        <div className="text-xs text-gray-500">Рекомендуется оптимизация</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Icon name="TrendingUp" className="text-green-600" size={16} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">2 точки роста</div>
                        <div className="text-xs text-gray-500">Потенциал увеличения ROI</div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-3 border-t">
                    <div className="text-xs text-gray-500 mb-2">Распределение бюджета</div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden flex">
                      <div className="bg-red-500 h-full" style={{ width: '38%' }}></div>
                      <div className="bg-orange-500 h-full" style={{ width: '30%' }}></div>
                      <div className="bg-green-500 h-full" style={{ width: '32%' }}></div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">В чём проблема</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Большинство отчётов по Яндекс.Директу перегружены цифрами и не отвечают на вопрос «что делать»
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: 'FileQuestion',
                title: 'Перегружены цифрами',
                desc: 'Сотни строк данных без понятных выводов и рекомендаций'
              },
              {
                icon: 'Users',
                title: 'Субъективный взгляд',
                desc: 'Зависят от мнения специалиста, а не от чётких правил'
              },
              {
                icon: 'Sparkles',
                title: 'AI без проверки',
                desc: 'Выглядят убедительно, но расчёты могут быть некорректны'
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={item.icon as any} className="text-red-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Наш подход</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Аналитическая прослойка на Python + AI для объяснений. Факты → правила → решения.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Загрузите данные',
                  desc: 'Выгрузка из Яндекс.Директа (XLSX / CSV)',
                  icon: 'Upload'
                },
                {
                  step: '02',
                  title: 'Анализ по правилам',
                  desc: 'Данные очищаются, метрики считаются, применяются фиксированные правила',
                  icon: 'Calculator'
                },
                {
                  step: '03',
                  title: 'AI объясняет',
                  desc: 'Понятные выводы, рекомендации и план действий',
                  icon: 'Sparkles'
                },
                {
                  step: '04',
                  title: 'Готовый отчёт',
                  desc: 'TL;DR, проблемы, план на 14 дней, вопросы для уточнения',
                  icon: 'FileText'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as any} className="text-sky-600" size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-sky-500 mb-1">{item.step}</div>
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Card className="p-8 bg-gradient-to-br from-sky-50 to-blue-50 border-sky-200">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
                    <Icon name="Zap" className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">Примеры правил</h3>
                </div>
                {[
                  'Высокий CPC при низком CTR → риск неэффективного расхода',
                  'Концентрация в 2-3 кампаниях → системный риск',
                  'CTR в РСЯ > 5% → возможные мусорные площадки',
                  'Резкий рост CPC → изменение конкуренции'
                ].map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <Icon name="ArrowRight" className="text-sky-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Что вы получаете</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: 'Sparkles',
                title: 'TL;DR',
                desc: 'Ключевые выводы одним абзацем — что происходит и что делать'
              },
              {
                icon: 'AlertTriangle',
                title: 'Список проблем',
                desc: 'Критичные риски с приоритетами и конкретными цифрами'
              },
              {
                icon: 'ListChecks',
                title: 'План на 14 дней',
                desc: 'Пошаговый план работ с распределением по приоритетам'
              },
              {
                icon: 'HelpCircle',
                title: 'Вопросы',
                desc: 'Что нужно уточнить для точной оптимизации'
              },
              {
                icon: 'BarChart3',
                title: 'Визуализация',
                desc: 'Графики и диаграммы для наглядности'
              },
              {
                icon: 'FileDown',
                title: 'Экспорт',
                desc: 'Markdown, PDF или отправка в Telegram'
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={item.icon as any} className="text-sky-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Для кого</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 hover:border-sky-500 transition-colors">
              <Icon name="Briefcase" className="text-sky-500 mb-4" size={32} />
              <h3 className="text-2xl font-semibold mb-4">Для директолога</h3>
              <p className="text-gray-600 mb-6">
                Экономьте время на рутине. Повторяемая логика аналитики. 
                Отчёты, которые не стыдно отправить клиенту.
              </p>
              <ul className="space-y-3">
                {[
                  'Автоматизация регулярных аудитов',
                  'Профессиональные отчёты за минуты',
                  'Усиление экспертизы, не замена'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 border-2 hover:border-sky-500 transition-colors">
              <Icon name="Building2" className="text-sky-500 mb-4" size={32} />
              <h3 className="text-2xl font-semibold mb-4">Для бизнеса</h3>
              <p className="text-gray-600 mb-6">
                Понимайте, что происходит с рекламой. 
                Без разбора в интерфейсе Директа.
              </p>
              <ul className="space-y-3">
                {[
                  'Ясная картина рисков и возможностей',
                  'Объяснения человеческим языком',
                  'Конкретный план действий'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="demo" className="py-20 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Получите первый аудит бесплатно
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Загрузите выгрузку из Директа и увидите результат за 2 минуты
          </p>
          <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100 text-lg px-8" onClick={handleGetStarted}>
            <Icon name="Sparkles" size={20} className="mr-2" />
            Попробовать бесплатно
          </Button>
          <p className="text-sm text-sky-100 mt-4">Без регистрации • Результат сразу • Экспорт в PDF</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
                  <Icon name="BarChart3" className="text-white" size={24} />
                </div>
                <span className="text-lg font-semibold">Директ Аналитика</span>
              </div>
              <p className="text-sm text-gray-600">Аналитика без магии</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Возможности</a></li>
                <li><a href="#" className="hover:text-gray-900">Тарифы</a></li>
                <li><a href="#" className="hover:text-gray-900">Примеры</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Документация</a></li>
                <li><a href="#" className="hover:text-gray-900">Блог</a></li>
                <li><a href="#" className="hover:text-gray-900">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Telegram</a></li>
                <li><a href="#" className="hover:text-gray-900">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
            © 2024 Директ Аналитика. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}