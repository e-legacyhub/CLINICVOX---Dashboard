import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Sparkles, Building2 } from 'lucide-react';

export default function Upgrade() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Evolua seu atendimento</h1>
        <p className="text-slate-500 text-lg">Escolha o plano ideal para o momento da sua clínica e atenda mais pacientes no piloto automático.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Starter */}
        <Card className="flex flex-col relative overflow-hidden border-slate-200">
          <CardHeader>
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-slate-600" />
            </div>
            <CardTitle className="text-xl">Starter</CardTitle>
            <CardDescription>Para profissionais independentes começando a automatizar.</CardDescription>
            <div className="mt-4 flex items-baseline text-4xl font-extrabold text-slate-900">
              R$97
              <span className="ml-1 text-base font-medium text-slate-500">/mês</span>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Até 100 atendimentos/mês</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>1 Agente IA (Texto)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Link na Bio básico</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Integração Google Calendar</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Plano Atual</Button>
          </CardFooter>
        </Card>

        {/* Growth */}
        <Card className="flex flex-col relative overflow-hidden border-blue-200 shadow-lg shadow-blue-100">
          <div className="absolute top-0 inset-x-0 h-1.5 bg-blue-600"></div>
          <CardHeader>
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-blue-600" />
              </div>
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none">Mais Popular</Badge>
            </div>
            <CardTitle className="text-xl">Growth</CardTitle>
            <CardDescription>Para clínicas em crescimento que precisam de escala.</CardDescription>
            <div className="mt-4 flex items-baseline text-4xl font-extrabold text-slate-900">
              R$297
              <span className="ml-1 text-base font-medium text-slate-500">/mês</span>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-medium text-slate-900">Atendimentos Ilimitados</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-medium text-slate-900">Agente IA com Voz (Áudio)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Link na Bio Pro (Cores customizadas)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Integração WhatsApp Oficial</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Transferência para Humano</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Fazer Upgrade</Button>
          </CardFooter>
        </Card>

        {/* Pro */}
        <Card className="flex flex-col relative overflow-hidden border-slate-200">
          <CardHeader>
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-xl">Enterprise</CardTitle>
            <CardDescription>Para redes de clínicas e alto volume de agendamentos.</CardDescription>
            <div className="mt-4 flex items-baseline text-4xl font-extrabold text-slate-900">
              R$897
              <span className="ml-1 text-base font-medium text-slate-500">/mês</span>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-slate-900 shrink-0" />
                <span>Tudo do plano Growth</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-slate-900 shrink-0" />
                <span>Múltiplos Agentes (por especialidade)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-slate-900 shrink-0" />
                <span>API de Integração (ERPs)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-slate-900 shrink-0" />
                <span>Gerente de Conta Dedicado</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-slate-900 shrink-0" />
                <span>Treinamento Personalizado</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Falar com Consultor</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
