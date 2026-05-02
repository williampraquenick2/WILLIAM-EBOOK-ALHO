import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Smartphone, 
  Users, 
  Truck, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  Instagram, 
  MessageCircle, 
  Copy, 
  Check,
  ChevronRight,
  Shield,
  CreditCard
} from 'lucide-react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const pixKey = "41891127802";
  const whatsappLink = "https://wa.me/5511916331250?text=Fiz%20o%20pagamento%2C%20quero%20acesso%20ao%20treinamento.%20";

  const copyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToPix = () => {
    const el = document.getElementById('pix-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-brand selection:text-black">
      {/* 🚀 TOPO (IMPACTO IMEDIATO) */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 pt-12 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-dark/10 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-4xl w-full text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="inline-block px-4 py-1.5 bg-brand/10 border border-brand/20 text-brand text-xs font-bold tracking-widest uppercase rounded-full">
              Treinamento Simples e Direto
            </span>
            <h1 className="text-4xl md:text-7xl font-display font-extrabold tracking-tighter leading-[0.9] text-white">
              Conquiste sua <span className="text-brand">Renda Principal</span>, saia do CLT e mude de vida
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              Eu vou te ensinar do zero, com calma e passo a passo, como transformar o alho e temperos na sua fonte de sustento trabalhando por conta própria.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group max-w-lg mx-auto"
          >
            <div className="absolute inset-0 bg-brand/10 blur-2xl group-hover:bg-brand/20 transition-all duration-500 rounded-3xl" />
            <img 
              src="https://i.imgur.com/hhaSVwk.png" 
              alt="Alho e Temperos Profissional" 
              className="relative w-full rounded-2xl shadow-2xl border border-white/5 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <button 
              onClick={scrollToPix}
              className="group relative w-full md:w-auto px-12 py-5 bg-brand text-black font-extrabold text-lg rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(34,197,94,0.3)] hover:shadow-[0_0_60px_rgba(34,197,94,0.5)]"
            >
              QUERO COMEÇAR AGORA
              <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-2 text-xs text-gray-500 font-bold uppercase tracking-widest">
              <Shield className="w-4 h-4 text-brand" />
              Sua Compra é Segura e Garantida
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🧑💼 AUTORIDADE / HISTÓRIA */}
      <section className="py-24 px-4 bg-zinc-950 border-y border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
              Trabalho honesto que <span className="text-brand">mudou a minha vida</span>
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                Olá, eu sou como você. Tudo o que eu conquistei hoje com o alho e temperos, começou de um jeito humilde e com muita vontade de vencer.
              </p>
              <p>
                Não precisei de loja chique nem de máquinas caras. Comecei na cozinha de casa e hoje ensino centenas de pessoas a fazerem o mesmo.
              </p>
              <p className="font-bold text-white italic underline decoration-brand underline-offset-4">
                "Muita gente já aprendeu comigo e hoje tem uma vida mais tranquila vendendo seus próprios temperos."
              </p>
            </div>
            
            <a 
              href="https://www.instagram.com/alho_eso/" 
              target="_blank" 
              rel="no-referrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group"
            >
              <Instagram className="text-brand w-6 h-6" />
              <span className="font-bold">Me siga no Instagram: @alho_eso</span>
              <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
            </a>
          </div>

          <div className="w-full md:w-1/3 grid grid-cols-2 gap-4">
            <div className="p-6 bg-zinc-900 rounded-3xl border border-white/5 text-center space-y-2">
              <div className="text-3xl font-display font-black text-brand tracking-tighter">+300</div>
              <div className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Alunos Amigos</div>
            </div>
            <div className="p-6 bg-zinc-900 rounded-3xl border border-white/5 text-center space-y-2">
              <div className="text-3xl font-display font-black text-brand tracking-tighter">SIM</div>
              <div className="text-[10px] font-black uppercase text-gray-500 tracking-widest">É Possível</div>
            </div>
            <div className="p-6 bg-zinc-900 rounded-3xl border border-white/5 text-center space-y-2 col-span-2">
              <div className="text-2xl font-display font-bold text-white tracking-tight">Liberdade Real</div>
              <div className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Diga tchau ao seu patrão</div>
            </div>
          </div>
        </div>
      </section>

      {/* 💰 O QUE VOCÊ VAI RECEBER */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter">
              O que eu vou <span className="text-brand underline decoration-wavy underline-offset-8">te ensinar</span>
            </h2>
            <p className="text-gray-400 font-medium max-w-xl mx-auto uppercase text-xs tracking-widest">
              Tudo explicado de um jeito fácil de entender
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: CheckCircle2, title: "Aprenda a Fazer do Zero", desc: "Vou te ensinar passo a passo como fazer o alho puro e os temperos que as pessoas amam. Te entrego todas as minhas receitas testadas." },
              { icon: TrendingUp, title: "Preço e Lucro", desc: "Você vai aprender exatamente por quanto deve vender cada potinho para ter um lucro justo e não perder dinheiro." },
              { icon: Users, title: "Família de Alunos", desc: "Acesso ao nosso grupo com mais de 300 pessoas. Lá a gente troca receitas, indica fornecedores e um ajuda o outro de verdade." },
              { icon: Truck, title: "Meus Fornecedores", desc: "Vou te dar os contatos de quem eu compro. Você vai saber onde comprar barato para ter mais lucro no final do dia." },
              { icon: MessageCircle, title: "Eu Te Ajudo no WhatsApp", desc: "Se tiver dúvida, é só me chamar. Mando áudio, vídeo e o que for preciso para você não ficar travado. Estou com você." },
              { icon: Smartphone, title: "Venda na Primeira Semana", desc: "Meu foco é que você já faça suas primeiras vendas nos primeiros dias para ver como esse mercado é bom e lucrativo." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-zinc-900/50 border border-white/5 rounded-[2rem] space-y-4 hover:border-brand/40 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center group-hover:bg-brand group-hover:text-black transition-colors">
                  <item.icon className="w-7 h-7 text-brand group-hover:text-black" />
                </div>
                <h3 className="text-xl font-bold font-display">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 📱 DIFERENCIAL */}
      <section className="py-24 px-4 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#22c55e_0%,_transparent_70%)]" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="p-12 md:p-20 bg-black/40 backdrop-blur-sm border border-white/5 rounded-[3rem] space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
              Um produto que <span className="text-brand">todo mundo usa</span>
            </h2>
            <div className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed space-y-6">
              <p>
                O alho e o tempero estão na mesa de todo brasileiro, todo santo dia. Isso significa que a procura é gigante e o cliente que compra hoje, <span className="text-white border-b-2 border-brand font-bold">volta a comprar todo mês</span> com você.
              </p>
              <p className="text-white font-black uppercase text-2xl md:text-4xl">
                É dinheiro no bolso e cliente fiel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔒 SEGURANÇA */}
      <section className="py-12 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-brand" />
            <span className="font-bold text-xs uppercase tracking-widest">Segurança Total</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-brand" />
            <span className="font-bold text-xs uppercase tracking-widest">Acesso na Hora</span>
          </div>
          <div className="flex items-center gap-3">
            <MessageCircle className="w-6 h-6 text-brand" />
            <span className="font-bold text-xs uppercase tracking-widest">Suporte Amigo</span>
          </div>
        </div>
      </section>

      {/* 💳 PAGAMENTO PIX */}
      <section id="pix-section" className="py-24 px-4 bg-zinc-950">
        <div className="max-w-2xl mx-auto space-y-12 bg-black p-8 md:p-14 rounded-[3rem] border-2 border-brand/20 relative shadow-[0_0_100px_rgba(34,197,94,0.1)]">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-8 py-3 bg-brand text-black font-black text-sm uppercase tracking-widest rounded-full shadow-lg">
            Comece por aqui
          </div>

          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold">🔑 PAGAMENTO VIA PIX</h2>
            <p className="text-gray-400 font-medium">Basta seguir esses 3 passos simples</p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-zinc-900/50 rounded-3xl border border-white/10 space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Toque abaixo para copiar o PIX</label>
              <div className="flex items-center gap-4 bg-black p-4 rounded-2xl border border-white/5 overflow-hidden">
                <span className="flex-1 font-mono text-lg font-bold truncate tracking-tight text-brand">{pixKey}</span>
                <button 
                  onClick={copyPix}
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-white hover:text-black transition-all rounded-xl font-bold text-sm shrink-0"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "COPIADO" : "COPIAR"}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { step: "1", text: "Copie o código PIX acima" },
                { step: "2", text: "Pague no seu banco ou lotérica" },
                { step: "3", text: "Me mande o comprovante" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-zinc-900/40 rounded-2xl border border-white/5 text-sm text-gray-300 leading-tight">
                  <span className="w-8 h-8 rounded-full bg-brand/10 border border-brand/20 text-brand flex items-center justify-center shrink-0 font-bold">{item.step}</span>
                  {item.text}
                </div>
              ))}
            </div>

            <div className="space-y-8 pt-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="no-referrer"
                className="group flex flex-col items-center gap-4 bg-green-500 hover:bg-green-400 text-black p-8 rounded-[2rem] transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-[0_20px_50px_rgba(34,197,94,0.3)] no-underline"
              >
                <div className="text-center">
                  <span className="block text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-2">Já pagou? Toque no botão verde</span>
                  <span className="text-xl md:text-2xl font-display font-black uppercase flex items-center gap-3">
                    CONFIRMAR PAGAMENTO
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-black/10 w-full justify-center">
                  <MessageCircle className="w-6 h-6" />
                  <span className="font-bold text-sm text-center">FALE COMIGO NO WHATSAPP</span>
                </div>
              </a>

              <div className="text-center space-y-2 opacity-60">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                  Seu acesso será liberado assim que você me enviar o comprovante
                </p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500">
                  Temos poucas vagas para que eu consiga dar atenção a todos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⚡ FLOATING CTAS */}
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-xs md:max-w-md px-4"
        >
          <div className="bg-zinc-900/95 backdrop-blur-xl border border-white/10 p-4 rounded-3xl shadow-2xl flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Treinamento</span>
              <span className="text-sm font-bold text-brand uppercase truncate leading-none">ALHO E SÓ</span>
            </div>
            <button 
              onClick={scrollToPix}
              className="px-6 py-2.5 bg-brand text-black font-black text-xs uppercase rounded-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              Começar Agora
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      <footer className="py-24 px-4 bg-black border-t border-white/5 text-center space-y-8">
        <div className="space-y-4">
          <div className="text-4xl font-display font-black tracking-tighter italic text-white uppercase">ALHO E <span className="text-brand">SÓ</span></div>
          <p className="text-gray-600 text-xs uppercase tracking-[0.3em]">Aqui é trabalho honesto e verdadeiro. © 2026</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 opacity-30">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><CreditCard className="w-4 h-4" /> Pagamento Seguro</div>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><ShieldCheck className="w-4 h-4" /> Respeito aos seus dados</div>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><MessageCircle className="w-4 h-4" /> Suporte VIP</div>
        </div>
      </footer>
    </div>
  );
}
