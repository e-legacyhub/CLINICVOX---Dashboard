import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Save, Calendar, MessageSquare, Settings2, Loader2 } from 'lucide-react';

export default function AgentConfig() {
  const [isCalendarConnected, setIsCalendarConnected] = useState(false);
  const [connectedEmail, setConnectedEmail] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Allow from same origin for our mock
      if (event.origin !== window.location.origin) return;
      
      if (event.data?.type === 'OAUTH_AUTH_SUCCESS') {
        setIsCalendarConnected(true);
        setConnectedEmail(event.data.email);
        setIsConnecting(false);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleConnectCalendar = () => {
    setIsConnecting(true);
    const width = 500;
    const height = 600;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    
    window.open(
      '/oauth/google',
      'google_oauth',
      `width=${width},height=${height},left=${left},top=${top}`
    );
  };

  const handleDisconnect = () => {
    setIsCalendarConnected(false);
    setConnectedEmail('');
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Configuração do Agente IA</h1>
          <p className="text-slate-500 mt-1">Treine sua recepcionista virtual para atender seus pacientes.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Save className="w-4 h-4 mr-2" />
          Salvar Alterações
        </Button>
      </div>

      <Tabs defaultValue="identity" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="identity" className="flex items-center gap-2">
            <Bot className="w-4 h-4" />
            <span className="hidden sm:inline">Identidade</span>
          </TabsTrigger>
          <TabsTrigger value="knowledge" className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            <span className="hidden sm:inline">Conhecimento</span>
          </TabsTrigger>
          <TabsTrigger value="schedule" className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">Agenda</span>
          </TabsTrigger>
          <TabsTrigger value="advanced" className="flex items-center gap-2">
            <Settings2 className="w-4 h-4" />
            <span className="hidden sm:inline">Avançado</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="identity" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Perfil do Agente</CardTitle>
              <CardDescription>Defina como a IA vai se apresentar aos pacientes.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="agent-name">Nome do Agente</Label>
                  <Input id="agent-name" placeholder="Ex: Clara, Recepcionista Virtual" defaultValue="Clara" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="agent-tone">Tom de Voz</Label>
                  <Select defaultValue="friendly">
                    <SelectTrigger id="agent-tone">
                      <SelectValue placeholder="Selecione o tom" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="friendly">Amigável e Empático</SelectItem>
                      <SelectItem value="formal">Formal e Profissional</SelectItem>
                      <SelectItem value="premium">Premium e Exclusivo</SelectItem>
                      <SelectItem value="objective">Direto e Objetivo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="specialty">Especialidade da Clínica</Label>
                  <Input id="specialty" placeholder="Ex: Odontologia Estética, Dermatologia" defaultValue="Odontologia Estética" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="greeting">Mensagem de Saudação</Label>
                  <Textarea 
                    id="greeting" 
                    placeholder="Como a IA deve iniciar a conversa?" 
                    defaultValue="Olá! Sou a Clara, assistente virtual da Clínica Odonto. Como posso ajudar você a sorrir melhor hoje?"
                    className="h-24"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="knowledge" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Serviços e Preços</CardTitle>
              <CardDescription>O que sua clínica oferece? A IA usará isso para responder dúvidas.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Serviços Oferecidos (um por linha)</Label>
                <Textarea 
                  className="h-32"
                  defaultValue="- Clareamento Dental (R$ 800)&#10;- Limpeza Profissional (R$ 250)&#10;- Lentes de Contato Dental (Sob consulta)&#10;- Avaliação Inicial (Gratuita)"
                />
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg bg-slate-50">
                <div className="space-y-0.5">
                  <Label className="text-base">Informar Preços</Label>
                  <p className="text-sm text-slate-500">Permitir que a IA passe valores antes da consulta.</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Perguntas Frequentes (FAQ)</CardTitle>
              <CardDescription>Instruções específicas para perguntas comuns.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Aceita convênio?</Label>
                  <Input defaultValue="Não aceitamos convênios, apenas particular. Emitimos nota para reembolso." />
                </div>
                <div className="grid gap-2">
                  <Label>Onde fica a clínica?</Label>
                  <Input defaultValue="Av. Paulista, 1000 - Conjunto 42. Próximo ao metrô Trianon-Masp." />
                </div>
                <Button variant="outline" className="w-full mt-2">
                  + Adicionar Pergunta
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Integração de Agenda</CardTitle>
              <CardDescription>Conecte seu calendário para agendamentos automáticos.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {isCalendarConnected ? (
                <div className="flex items-center justify-between p-4 border rounded-lg border-blue-100 bg-blue-50/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Google Calendar</p>
                      <p className="text-sm text-slate-500">{connectedEmail}</p>
                    </div>
                  </div>
                  <Button variant="outline" onClick={handleDisconnect} className="text-red-600 hover:text-red-700 hover:bg-red-50">Desconectar</Button>
                </div>
              ) : (
                <div className="flex items-center justify-between p-4 border rounded-lg border-slate-200 bg-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100">
                      <Calendar className="w-5 h-5 text-slate-400" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Google Calendar</p>
                      <p className="text-sm text-slate-500">Sincronize sua agenda para agendamentos automáticos</p>
                    </div>
                  </div>
                  <Button onClick={handleConnectCalendar} disabled={isConnecting} className="bg-blue-600 hover:bg-blue-700">
                    {isConnecting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Conectando...
                      </>
                    ) : 'Conectar Conta'}
                  </Button>
                </div>
              )}

              <div className="space-y-4">
                <h4 className="font-medium text-slate-900">Horários de Atendimento</h4>
                <div className="grid gap-4">
                  {['Segunda a Sexta', 'Sábado'].map((day) => (
                    <div key={day} className="flex items-center gap-4">
                      <div className="w-32">
                        <Label>{day}</Label>
                      </div>
                      <div className="flex items-center gap-2 flex-1">
                        <Input type="time" defaultValue="09:00" className="w-24" />
                        <span className="text-slate-500">até</span>
                        <Input type="time" defaultValue={day === 'Sábado' ? "13:00" : "18:00"} className="w-24" />
                      </div>
                      <Switch defaultChecked={day !== 'Domingo'} />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Comportamento Avançado</CardTitle>
              <CardDescription>Ajustes finos do modelo de IA.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-0.5">
                  <Label className="text-base">Transferência Humana</Label>
                  <p className="text-sm text-slate-500">Passar para um atendente se a IA não souber responder.</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="space-y-2">
                <Label>Prompt do Sistema (Apenas para experts)</Label>
                <Textarea 
                  className="h-32 font-mono text-xs text-slate-600 bg-slate-50"
                  defaultValue="Você é uma assistente virtual de uma clínica odontológica. Seu objetivo principal é qualificar o lead e agendar uma avaliação. Seja sempre educada, use emojis moderadamente. Nunca invente preços que não estão na sua base de conhecimento."
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
