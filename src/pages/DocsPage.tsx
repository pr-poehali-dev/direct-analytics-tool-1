import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function DocsPage() {
  return (
    <div className="max-w-4xl space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-semibold mb-2">Документация</h2>
        <p className="text-muted-foreground">Как работает аналитика и что мы проверяем</p>
      </div>

      <Separator />

      {/* How it works */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">Как это работает</h3>
        <Card className="p-6">
          <ol className="space-y-6">
            {[
              { title: 'Загрузка данных', desc: 'Вы загружаете выгрузку из Яндекс.Директа (XLSX или CSV)', icon: 'Upload' },
              { title: 'Расчёт метрик', desc: 'Система считает бенчмарки, выявляет аномалии и риски', icon: 'Calculator' },
              { title: 'Применение правил', desc: 'Фиксированные правила аналитики без субъективности', icon: 'CheckSquare' },
              { title: 'Формирование отчёта', desc: 'AI объясняет выводы понятным языком с планом действий', icon: 'FileText' },
            ].map((step, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={step.icon as any} className="text-sky-600" size={20} />
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="font-semibold mb-1">{idx + 1}. {step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </Card>
      </section>

      {/* What we analyze */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">Что анализируется</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Кампании', items: ['Поиск и РСЯ', 'Распределение бюджета', 'Концентрация расхода'] },
            { title: 'Метрики', items: ['CTR, CPC, CPM', 'Клики и показы', 'Динамика расхода'] },
            { title: 'Проблемы', items: ['Аномальные показатели', 'Проблемы доставки', 'Неэффективные кампании'] },
            { title: 'Возможности', items: ['Точки роста', 'Рекомендации', 'План оптимизации'] },
          ].map((block, idx) => (
            <Card key={idx} className="p-5">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="CheckCircle2" className="text-sky-500" size={18} />
                {block.title}
              </h4>
              <ul className="space-y-2">
                {block.items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Rules */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">Примеры правил аналитики</h3>
        <Card className="p-6">
          <div className="space-y-4">
            {[
              { rule: 'Высокий CPC при низком CTR', desc: 'Риск неэффективного расхода бюджета' },
              { rule: 'Концентрация бюджета в 2-3 кампаниях', desc: 'Системный риск зависимости от одной кампании' },
              { rule: 'CTR в РСЯ выше 5%', desc: 'Возможные мусорные площадки или ботовый трафик' },
              { rule: 'Клики без расхода', desc: 'Проблема доставки или ошибка в данных' },
              { rule: 'Резкий рост CPC за неделю', desc: 'Изменение конкуренции или аукциона' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 pb-4 last:pb-0 border-b last:border-b-0">
                <Icon name="Zap" className="text-sky-500 flex-shrink-0 mt-0.5" size={16} />
                <div className="flex-1">
                  <h5 className="font-medium text-sm mb-1">{item.rule}</h5>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Approach */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">Наш подход</h3>
        <Card className="p-6 bg-sky-50 border-sky-200">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Icon name="Database" className="text-sky-600 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold mb-1">Аналитика сначала</h4>
                <p className="text-sm text-muted-foreground">
                  Данные очищаются, метрики считаются явно, применяются фиксированные правила и пороги
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="Sparkles" className="text-sky-600 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold mb-1">AI для объяснений</h4>
                <p className="text-sm text-muted-foreground">
                  AI используется после аналитики — для понятных выводов, рекомендаций и плана действий
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="Shield" className="text-sky-600 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold mb-1">Без магии и субъективности</h4>
                <p className="text-sm text-muted-foreground">
                  Все правила прозрачны, логика явная, результаты воспроизводимы
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* For whom */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">Для кого продукт</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-6">
            <Icon name="Briefcase" className="text-sky-500 mb-3" size={24} />
            <h4 className="font-semibold mb-2">Для директолога</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Экономия времени на рутине, повторяемая логика аналитики, профессиональные отчёты для клиентов
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="Check" className="text-green-500" size={14} />
                <span>Автоматизация аудитов</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" className="text-green-500" size={14} />
                <span>Готовые отчёты</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" className="text-green-500" size={14} />
                <span>Усиление экспертизы</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <Icon name="Building2" className="text-sky-500 mb-3" size={24} />
            <h4 className="font-semibold mb-2">Для бизнеса</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Понятная картина рисков, объяснения человеческим языком, конкретный план действий
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="Check" className="text-green-500" size={14} />
                <span>Прозрачность рекламы</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" className="text-green-500" size={14} />
                <span>Контроль бюджета</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" className="text-green-500" size={14} />
                <span>Понятные рекомендации</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>
    </div>
  );
}
