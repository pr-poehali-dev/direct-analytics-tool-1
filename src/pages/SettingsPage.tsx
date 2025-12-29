import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function SettingsPage() {
  return (
    <div className="max-w-3xl space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-semibold mb-2">Настройки</h2>
        <p className="text-muted-foreground">Персонализация отчётов и правил аналитики</p>
      </div>

      <Separator />

      {/* Report Settings */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Настройки отчётов</h3>
        <Card className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Включать графики в отчёт</Label>
              <p className="text-sm text-muted-foreground">Визуализация метрик и трендов</p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Детализированный план работ</Label>
              <p className="text-sm text-muted-foreground">Разбивка действий по дням</p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Вопросы для уточнения</Label>
              <p className="text-sm text-muted-foreground">AI задаёт вопросы о целях и контексте</p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="space-y-3">
            <Label className="text-base">Формат экспорта</Label>
            <div className="grid grid-cols-3 gap-3">
              {['Markdown', 'PDF', 'Telegram'].map((format) => (
                <Button
                  key={format}
                  variant={format === 'PDF' ? 'default' : 'outline'}
                  className="w-full"
                >
                  {format}
                </Button>
              ))}
            </div>
          </div>
        </Card>
      </section>

      {/* Analytics Rules */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Пороги аналитики</h3>
        <Card className="p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="ctr-threshold">Низкий CTR для Поиска (%)</Label>
            <Input id="ctr-threshold" type="number" defaultValue="3" step="0.1" />
            <p className="text-xs text-muted-foreground">Кампании с CTR ниже этого значения будут отмечены</p>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label htmlFor="rsya-ctr-threshold">Высокий CTR для РСЯ (%)</Label>
            <Input id="rsya-ctr-threshold" type="number" defaultValue="5" step="0.1" />
            <p className="text-xs text-muted-foreground">Возможные мусорные площадки при превышении</p>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label htmlFor="budget-concentration">Концентрация бюджета (%)</Label>
            <Input id="budget-concentration" type="number" defaultValue="60" step="5" />
            <p className="text-xs text-muted-foreground">Системный риск если N% бюджета в 2-3 кампаниях</p>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label htmlFor="cpc-growth">Рост CPC для оповещения (%)</Label>
            <Input id="cpc-growth" type="number" defaultValue="25" step="5" />
            <p className="text-xs text-muted-foreground">Предупреждение при росте выше порога</p>
          </div>
        </Card>
      </section>

      {/* Notifications */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Уведомления</h3>
        <Card className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Email при готовности отчёта</Label>
              <p className="text-sm text-muted-foreground">Получать письмо после анализа</p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="space-y-2">
            <Label htmlFor="email">Email адрес</Label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Telegram уведомления</Label>
              <p className="text-sm text-muted-foreground">Бот отправит отчёт в личные сообщения</p>
            </div>
            <Switch />
          </div>
        </Card>
      </section>

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <Button variant="outline">
          <Icon name="RotateCcw" size={16} className="mr-2" />
          Сбросить
        </Button>
        <Button className="bg-sky-500 hover:bg-sky-600">
          <Icon name="Save" size={16} className="mr-2" />
          Сохранить настройки
        </Button>
      </div>
    </div>
  );
}
