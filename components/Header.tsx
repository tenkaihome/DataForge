"use client";

import React, { useState } from "react";
import { Coffee, Search, Settings, X, Activity } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const donateUrl = "https://buymeacoffee.com/0xejebduoo";

  return (
    <>
      <header className="h-20 bg-[#141824] border-b border-[#242b3d] flex items-center justify-between px-8 sticky top-0 z-10 w-full">
        <div className="flex-1 flex items-center max-w-lg relative sm:hidden">
           <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-orange-500" />
              <span className="text-lg font-bold text-white">Data<span className="text-orange-500">Forge</span></span>
           </div>
        </div>
        
        <div className="flex-1 hidden sm:flex items-center max-w-lg relative">
          <Search className="w-5 h-5 absolute left-4 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search tools... (Ctrl+K)" 
            className="w-full bg-[#0b0c10] border border-[#242b3d] rounded-xl pl-12 pr-4 py-2.5 text-slate-300 focus:outline-none focus:border-orange-500/50 transition-colors"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2.5 rounded-xl bg-[#0b0c10] border border-[#242b3d] text-slate-400 hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-bold py-2.5 px-6 rounded-xl transition-all shadow-[0_4px_15px_rgba(249,115,22,0.3)] hover:shadow-[0_6px_25px_rgba(249,115,22,0.5)] active:scale-95"
          >
            <Coffee className="w-5 h-5" />
            <span>Contribute</span>
          </button>
        </div>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 bg-[#000000]/80 flex items-center justify-center z-[100] backdrop-blur-sm p-4">
          <div className="bg-[#141824] border border-orange-500/30 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-6 border-b border-[#242b3d]">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Coffee className="w-7 h-7 text-orange-500" />
                Support DataForge
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-[#202636]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8 flex flex-col items-center space-y-6">
              <p className="text-slate-400 text-center font-medium leading-relaxed">
                Empower your development workflow. Support maintaining this open source suite for everyone.
              </p>
              
              <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-orange-500">
                <QRCodeSVG value={donateUrl} size={180} fgColor="#ea580c" />
              </div>
              
              <div className="w-full pt-4">
                <a
                  href={donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-bold text-lg py-4 px-6 rounded-xl transition-all shadow-[0_4px_20px_rgba(249,115,22,0.4)]"
                >
                  Buy Me a Coffee
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
