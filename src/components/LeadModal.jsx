import { useState } from 'react';
import { X } from 'lucide-react';

const WEBHOOK_URL = 'https://disparo-n8n.hygaym.easypanel.host/webhook/lplira';

export default function LeadModal({ isOpen, onClose, source }) {
  const [formData, setFormData] = useState({ nome: '', telefone: '', email: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: source || 'cta',
          timestamp: new Date().toISOString()
        })
      });
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setFormData({ nome: '', telefone: '', email: '' });
        onClose();
      }, 2500);
    } catch (err) {
      console.error('Webhook error:', err);
      alert('Erro ao enviar. Tente novamente.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md bg-[#0d0d18] border border-accent/20 rounded-[2rem] p-8 md:p-10 shadow-[0_0_60px_rgba(108,77,255,0.15)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-5 right-5 text-grayText hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {sent ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="font-heading font-bold text-2xl text-white mb-2">Recebemos seus dados!</h3>
            <p className="text-grayText text-sm">Nossa equipe entrará em contato em breve.</p>
          </div>
        ) : (
          <>
            <h3 className="font-heading font-bold text-2xl text-white mb-2 text-center">
              {source === 'whatsapp' ? 'Fale com nossa equipe' : 'Agende sua consultoria'}
            </h3>
            <p className="text-grayText text-sm text-center mb-8">
              Preencha seus dados abaixo e retornaremos rapidamente.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="font-mono text-xs text-grayText uppercase tracking-widest mb-1 block">Nome</label>
                <input
                  type="text"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-sans text-sm placeholder:text-gray-600 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-grayText uppercase tracking-widest mb-1 block">Telefone</label>
                <input
                  type="tel"
                  name="telefone"
                  required
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-sans text-sm placeholder:text-gray-600 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-grayText uppercase tracking-widest mb-1 block">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-sans text-sm placeholder:text-gray-600 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn-magnetic w-full mt-2 bg-accent text-white font-heading font-bold py-4 rounded-full shadow-[0_0_20px_#8A7CFF] hover:shadow-[0_0_30px_#8A7CFF] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? 'Enviando...' : 'Enviar dados'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
