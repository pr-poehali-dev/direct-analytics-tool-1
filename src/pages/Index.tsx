import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ReportPage from '@/pages/ReportPage';
import DocsPage from '@/pages/DocsPage';
import SettingsPage from '@/pages/SettingsPage';
import LandingPage from '@/pages/LandingPage';

const Index = () => {
  const [showApp, setShowApp] = useState(false);
  const [activeTab, setActiveTab] = useState('report');

  if (!showApp) {
    return <LandingPage onGetStarted={() => setShowApp(true)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
                <Icon name="BarChart3" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Директ Аналитика</h1>
                <p className="text-xs text-gray-500">Аналитика без магии</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="border-b border-gray-200 bg-white sticky top-[73px] z-40">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="bg-transparent border-b-0 h-12 p-0 w-full justify-start">
              <TabsTrigger 
                value="report" 
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-sky-500 rounded-none px-4 h-12 data-[state=active]:shadow-none"
              >
                <Icon name="FileText" size={18} className="mr-2" />
                Отчёт
              </TabsTrigger>
              <TabsTrigger 
                value="docs"
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-sky-500 rounded-none px-4 h-12 data-[state=active]:shadow-none"
              >
                <Icon name="BookOpen" size={18} className="mr-2" />
                Документация
              </TabsTrigger>
              <TabsTrigger 
                value="settings"
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-sky-500 rounded-none px-4 h-12 data-[state=active]:shadow-none"
              >
                <Icon name="Settings" size={18} className="mr-2" />
                Настройки
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} className="w-full">
          <TabsContent value="report" className="mt-0">
            <ReportPage />
          </TabsContent>
          <TabsContent value="docs" className="mt-0">
            <DocsPage />
          </TabsContent>
          <TabsContent value="settings" className="mt-0">
            <SettingsPage />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;