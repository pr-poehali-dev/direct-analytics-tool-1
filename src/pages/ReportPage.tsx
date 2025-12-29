import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function ReportPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Upload Section */}
      <Card className="p-8 border-2 border-dashed border-gray-300 hover:border-sky-500 transition-colors">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
            <Icon name="Upload" className="text-sky-500" size={32} />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Загрузите данные из Яндекс.Директа</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Поддерживаются форматы: XLSX, CSV
            </p>
            <Button className="bg-sky-500 hover:bg-sky-600">
              <Icon name="Upload" size={18} className="mr-2" />
              Выбрать файл
            </Button>
          </div>
        </div>
      </Card>

      {/* Demo Report */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Демо-отчёт</h2>
          <Badge variant="outline" className="text-xs">Пример анализа</Badge>
        </div>

        {/* TL;DR */}
        <Card className="p-6 bg-sky-50 border-sky-200">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Sparkles" className="text-white" size={18} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">TL;DR</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Основной риск — концентрация 68% бюджета в двух кампаниях РСЯ с низким CTR (0.8%). 
                CPC вырос на 32% за период, но конверсии не растут. Рекомендуется перераспределить 
                бюджет в поисковые кампании с высоким CTR (12.4%) и пересмотреть стратегию РСЯ.
              </p>
            </div>
          </div>
        </Card>

        {/* Problems Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Выявленные проблемы</h3>
          
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="AlertTriangle" className="text-red-600" size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold">Высокий CPC при низком CTR</h4>
                  <Badge variant="destructive" className="text-xs">Критично</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Кампания "РСЯ — Широкая": CPC 45₽, CTR 0.8%. Расход 124,000₽ за неделю без конверсий.
                </p>
                <div className="bg-gray-50 p-3 rounded text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">CPC:</span>
                    <span className="font-medium">45₽ (+32% к норме)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">CTR:</span>
                    <span className="font-medium">0.8% (норма 2-4%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Расход:</span>
                    <span className="font-medium">124,000₽</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="TrendingDown" className="text-orange-600" size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold">Концентрация бюджета</h4>
                  <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700 border-orange-200">Риск</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  68% бюджета уходит в 2 кампании из 8. Системный риск при отключении или проблемах.
                </p>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden flex">
                  <div className="bg-red-500 h-full" style={{ width: '38%' }}></div>
                  <div className="bg-orange-500 h-full" style={{ width: '30%' }}></div>
                  <div className="bg-green-500 h-full" style={{ width: '32%' }}></div>
                </div>
                <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                  <span>Кампания А: 38%</span>
                  <span>Кампания Б: 30%</span>
                  <span>Остальные: 32%</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Info" className="text-blue-600" size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold">Аномальный CTR в РСЯ</h4>
                  <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">Проверить</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Кампания "РСЯ — Ретаргетинг" показывает CTR 6.2% (норма до 5%). Возможны мусорные площадки.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Separator />

        {/* Action Plan */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">План работ на 14 дней</h3>
          
          <div className="space-y-3">
            {[
              { day: 'День 1-2', task: 'Снизить ставки в кампании "РСЯ — Широкая" на 25-30%', priority: 'high' },
              { day: 'День 3-5', task: 'Провести аудит площадок РСЯ, исключить низкоэффективные', priority: 'high' },
              { day: 'День 5-7', task: 'Перераспределить 40% бюджета из РСЯ в поисковые кампании', priority: 'medium' },
              { day: 'День 8-10', task: 'Настроить корректировки ставок по устройствам и времени', priority: 'medium' },
              { day: 'День 11-14', task: 'Анализ результатов, подготовка финального отчёта', priority: 'low' },
            ].map((item, idx) => (
              <Card key={idx} className="p-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-medium text-gray-600">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-muted-foreground">{item.day}</span>
                      <Badge 
                        variant={item.priority === 'high' ? 'destructive' : item.priority === 'medium' ? 'default' : 'outline'}
                        className="text-xs"
                      >
                        {item.priority === 'high' ? 'Высокий' : item.priority === 'medium' ? 'Средний' : 'Низкий'}
                      </Badge>
                    </div>
                    <p className="text-sm">{item.task}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Separator />

        {/* Questions */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Вопросы для уточнения</h3>
          <Card className="p-6">
            <ul className="space-y-3">
              {[
                'Какая основная цель рекламы: лиды, продажи, трафик?',
                'Есть ли данные о конверсиях из CRM или счётчика?',
                'Какие регионы приоритетны для показов?',
                'Планируется ли увеличение бюджета в ближайший месяц?',
              ].map((question, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
                  <Icon name="HelpCircle" className="text-sky-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* CTA */}
        <Card className="p-6 bg-gradient-to-r from-sky-50 to-blue-50 border-sky-200">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold mb-1">Получить полный анализ ваших данных</h4>
              <p className="text-sm text-muted-foreground">Загрузите выгрузку из Директа и получите детальный отчёт</p>
            </div>
            <Button className="bg-sky-500 hover:bg-sky-600">
              Загрузить данные
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
