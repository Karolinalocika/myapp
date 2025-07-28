"use client";

import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle, AlertCircle, MessageCircle, User } from 'lucide-react';

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ModernContactForm() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.currentTarget.tagName !== 'TEXTAREA') {
      handleSubmit();
    }
    if (e.key === 'Enter' && e.ctrlKey && e.currentTarget.tagName === 'TEXTAREA') {
      handleSubmit();
    }
  };

  const handleSubmit = async (): Promise<void> => {
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
      return;
    }
    
    setFormStatus("loading");

    // Simulace API call
    try {
      // Simulace delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulace úspěšného odeslání
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset status po 5 sekundách
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (err) {
      console.error("Chyba:", err);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <section 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-sky-50 relative overflow-hidden min-h-screen flex items-center" 
      id="kontakt"
    >
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-sky-100 to-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 mb-6">
            <MessageCircle className="w-4 h-4 text-purple-500 mr-2" />
            <span className="text-sm font-medium text-slate-700">Pojďme si popovídat</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Kontaktujte mě
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Máte nápad na projekt? Ráda si s vámi popovídám o vašich představách 
            a společně vytvoříme něco jedinečného.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Profile & Contact Info */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-500">
            <div className="text-center space-y-6">
              
              {/* Profile Image */}
              <div className="relative inline-block">
                <div className="w-32 h-32 mx-auto relative">
                  <img
                    src="/shepardu.svg"
                    alt="Karolína Jurečka Krobová"
                    className="w-full h-full rounded-full object-cover shadow-2xl ring-4 ring-white/50"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Name */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                  Karolína Jurečka Krobová
                </h2>
                <p className="text-slate-600 text-lg">Ilustrátorka & Grafická designérka</p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 pt-6">
                <div className="flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-sky-50 to-cyan-50 rounded-2xl border border-sky-100/50">
                  <div className="p-2 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl shadow-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">+420 777 123 456</span>
                </div>
                
                <div className="flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100/50">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">karolina@email.cz</span>
                </div>
              </div>

              {/* Quote */}
              <div className="pt-6 border-t border-slate-200/50">
                <p className="text-slate-600 italic">
                  "Každý projekt je pro mě příležitost vytvořit něco, co bude mít dlouhodobou hodnotu."
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-500">
            <div className="space-y-6">
              
              {/* Name Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">
                  Jméno
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  className="w-full p-4 rounded-2xl border border-slate-200/50 bg-white/70 backdrop-blur-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 hover:bg-white/90"
                  placeholder="Vaše jméno"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  className="w-full p-4 rounded-2xl border border-slate-200/50 bg-white/70 backdrop-blur-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 hover:bg-white/90"
                  placeholder="vas@email.cz"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">
                  Zpráva
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  className="w-full p-4 rounded-2xl border border-slate-200/50 bg-white/70 backdrop-blur-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 hover:bg-white/90 resize-none"
                  rows={5}
                  placeholder="Popište váš projekt nebo se zeptejte na cokoliv... (Ctrl+Enter pro odeslání)"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={formStatus === "loading"}
                className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 ${
                  formStatus === "loading" 
                    ? "bg-slate-400 text-white cursor-not-allowed" 
                    : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                }`}
              >
                {formStatus === "loading" ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Odesílání...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Odeslat zprávu</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {formStatus === "success" && (
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <p className="text-green-700 font-medium">
                    Zpráva byla úspěšně odeslána! Ozvu se vám co nejdříve.
                  </p>
                </div>
              )}
              
              {formStatus === "error" && (
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl border border-red-200/50">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                  <p className="text-red-700 font-medium">
                    Došlo k chybě. Zkuste to prosím znovu nebo mě kontaktujte přímo.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Rychlá odpověď zaručena
            </h3>
            <p className="text-slate-600 mb-6">
              Obvykle odpovídám do 24 hodin. Pro urgentní projekty mě neváhejte kontaktovat telefonicky.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-medium text-slate-700">
                ⚡ Rychlá odpověď
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-sky-100 to-cyan-100 rounded-full text-sm font-medium text-slate-700">
                💬 Nezávazná konzultace
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-sm font-medium text-slate-700">
                🎨 Návrh na míru
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}