import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GripVertical, Plus, Smartphone, ExternalLink, MessageCircle, Instagram, Globe } from 'lucide-react';

export default function LinkTree() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Link na Bio</h1>
          <p className="text-slate-500 mt-1">Crie sua página interativa com agendamento por IA.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <ExternalLink className="w-4 h-4 mr-2" />
            Copiar Link
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Publicar</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Editor */}
        <div className="lg:col-span-3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Perfil</CardTitle>
              <CardDescription>Informações principais da sua página.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="w-20 h-20 border-2 border-slate-100">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>DR</AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm">Trocar Foto</Button>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Título</Label>
                  <Input defaultValue="Dra. Ana Silva | Odontologia" />
                </div>
                <div className="space-y-2">
                  <Label>Descrição (Bio)</Label>
                  <Input defaultValue="Transformando sorrisos com tecnologia e carinho. ✨" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Links e Botões</CardTitle>
                <CardDescription>Organize os links que aparecerão na sua página.</CardDescription>
              </div>
              <Button size="sm" variant="outline"><Plus className="w-4 h-4 mr-1" /> Adicionar</Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Main AI Button */}
              <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <GripVertical className="w-5 h-5 text-blue-300 cursor-grab" />
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-slate-900 text-sm">Agendar Consulta (IA)</p>
                  <p className="text-xs text-blue-600">Botão Principal de Conversão</p>
                </div>
                <Switch defaultChecked />
              </div>

              {/* Other Links */}
              <div className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg bg-white">
                <GripVertical className="w-5 h-5 text-slate-300 cursor-grab" />
                <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5 text-slate-600" />
                </div>
                <div className="flex-1">
                  <Input defaultValue="Instagram" className="h-8 text-sm font-medium border-transparent hover:border-slate-200 focus-visible:ring-0 px-1 -ml-1" />
                  <Input defaultValue="https://instagram.com/dra.anasilva" className="h-6 text-xs text-slate-500 border-transparent hover:border-slate-200 focus-visible:ring-0 px-1 -ml-1 mt-1" />
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg bg-white">
                <GripVertical className="w-5 h-5 text-slate-300 cursor-grab" />
                <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-slate-600" />
                </div>
                <div className="flex-1">
                  <Input defaultValue="Meu Site" className="h-8 text-sm font-medium border-transparent hover:border-slate-200 focus-visible:ring-0 px-1 -ml-1" />
                  <Input defaultValue="https://clinicaodonto.com.br" className="h-6 text-xs text-slate-500 border-transparent hover:border-slate-200 focus-visible:ring-0 px-1 -ml-1 mt-1" />
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview */}
        <div className="lg:col-span-2 flex justify-center lg:justify-end">
          <div className="w-[320px] h-[650px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl relative border-[8px] border-slate-800 shrink-0">
            {/* Notch */}
            <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
              <div className="w-32 h-5 bg-slate-800 rounded-b-2xl"></div>
            </div>
            
            {/* Screen */}
            <div className="w-full h-full bg-slate-50 rounded-[2.25rem] overflow-hidden flex flex-col relative">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center text-center relative z-10">
                <Avatar className="w-24 h-24 border-4 border-white shadow-sm mt-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>DR</AvatarFallback>
                </Avatar>
                
                <h2 className="mt-4 font-bold text-slate-900 text-lg">Dra. Ana Silva | Odontologia</h2>
                <p className="mt-2 text-sm text-slate-600">Transformando sorrisos com tecnologia e carinho. ✨</p>

                <div className="w-full mt-8 space-y-3">
                  <button className="w-full bg-blue-600 text-white rounded-xl py-3.5 px-4 font-medium shadow-sm shadow-blue-200 flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    Agendar Consulta (IA)
                  </button>
                  
                  <button className="w-full bg-white text-slate-700 border border-slate-200 rounded-xl py-3.5 px-4 font-medium shadow-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </button>

                  <button className="w-full bg-white text-slate-700 border border-slate-200 rounded-xl py-3.5 px-4 font-medium shadow-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
                    <Globe className="w-5 h-5" />
                    Meu Site
                  </button>
                </div>
              </div>
              
              <div className="py-4 text-center text-[10px] text-slate-400 font-medium bg-white/80 backdrop-blur-sm border-t border-slate-100">
                Powered by ClinicVox
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
