"use client";

import React, { useState } from "react";
import Header from "@/components/Header";

// Tool components
import JsonPrettify from "@/components/tools/JsonPrettify";
import JsonMinify from "@/components/tools/JsonMinify";
import RandomPort from "@/components/tools/RandomPort";
import RegexTester from "@/components/tools/RegexTester";
import NotImplemented from "@/components/tools/NotImplemented";
import ChmodCalculator from "@/components/tools/ChmodCalculator";
import JsonToCsv from "@/components/tools/JsonToCsv";
import SqlPrettify from "@/components/tools/SqlPrettify";
import YamlPrettify from "@/components/tools/YamlPrettify";
import XmlFormatter from "@/components/tools/XmlFormatter";
import EmailNormalizer from "@/components/tools/EmailNormalizer";
import CrontabGenerator from "@/components/tools/CrontabGenerator";
import DockerRunToCompose from "@/components/tools/DockerRunToCompose";
import GitCheatsheet from "@/components/tools/GitCheatsheet";
import RegexCheatsheet from "@/components/tools/RegexCheatsheet";

import { 
  GitBranch, Server, Clock, Braces, List, Database, 
  FileText, Box, CodeXml, AlignLeft, Mail, WholeWord,
  FileCode2, Menu, Activity
} from "lucide-react";

export const toolsList = [
  { id: "json-prettify", name: "Format JSON", icon: <Braces className="w-6 h-6" /> },
  { id: "json-minify", name: "Minify JSON", icon: <Braces className="w-6 h-6" /> },
  { id: "json-csv", name: "JSON ➝ CSV", icon: <List className="w-6 h-6" /> },
  { id: "sql-prettify", name: "Format SQL", icon: <Database className="w-6 h-6" /> },
  { id: "xml-formatter", name: "Format XML", icon: <CodeXml className="w-6 h-6" /> },
  { id: "yaml-prettify", name: "Format YAML", icon: <AlignLeft className="w-6 h-6" /> },
  { id: "regex-tester", name: "Regex Engine", icon: <WholeWord className="w-6 h-6" /> },
  { id: "regex-cheatsheet", name: "Regex Sheet", icon: <FileCode2 className="w-6 h-6" /> },
  { id: "random-port", name: "Port Gen", icon: <Server className="w-6 h-6" /> },
  { id: "crontab", name: "Crontab", icon: <Clock className="w-6 h-6" /> },
  { id: "chmod", name: "Permissions", icon: <FileText className="w-6 h-6" /> },
  { id: "docker-run-compose", name: "Containers", icon: <Box className="w-6 h-6" /> },
  { id: "email-normalizer", name: "Emails", icon: <Mail className="w-6 h-6" /> },
  { id: "git-cheatsheet", name: "Git Repo", icon: <GitBranch className="w-6 h-6" /> },
];

export default function Home() {
  const [activeToolId, setActiveToolId] = useState("json-prettify");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderTool = () => {
    switch (activeToolId) {
      case "json-prettify": return <JsonPrettify />;
      case "json-minify": return <JsonMinify />;
      case "random-port": return <RandomPort />;
      case "regex-tester": return <RegexTester />;
      case "chmod": return <ChmodCalculator />;
      case "json-csv": return <JsonToCsv />;
      case "sql-prettify": return <SqlPrettify />;
      case "yaml-prettify": return <YamlPrettify />;
      case "xml-formatter": return <XmlFormatter />;
      case "email-normalizer": return <EmailNormalizer />;
      case "crontab": return <CrontabGenerator />;
      case "docker-run-compose": return <DockerRunToCompose />;
      case "git-cheatsheet": return <GitCheatsheet />;
      case "regex-cheatsheet": return <RegexCheatsheet />;
      default: return <NotImplemented />;
    }
  };

  const activeTool = toolsList.find(t => t.id === activeToolId);

  return (
    <div className="flex h-screen bg-[#0f1115] text-[#e2e8f0] font-sans selection:bg-orange-500/30">
      
      {/* Icon Sidebar */}
      <aside className={`bg-[#141824] border-r border-[#242b3d] flex flex-col transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${sidebarOpen ? 'w-[280px]' : 'w-[80px]'}`}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-[#242b3d]">
          <div className={`flex items-center gap-3 overflow-hidden transition-opacity ${sidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>
            <div className="bg-gradient-to-br from-orange-400 to-red-500 p-2 rounded-lg shell-shadow">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Data<span className="text-orange-500">Forge</span>
            </span>
          </div>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-orange-400 hover:bg-[#202636] transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar py-4 px-3 flex flex-col gap-2">
          {toolsList.map((tool) => {
            const isActive = activeToolId === tool.id;
            return (
              <button
                key={tool.id}
                onClick={() => setActiveToolId(tool.id)}
                className={`flex items-center gap-4 px-3.5 py-3.5 rounded-xl transition-all group ${
                  isActive 
                    ? "bg-gradient-to-r from-orange-500/20 to-transparent border-l-4 border-orange-500 text-orange-400" 
                    : "text-slate-400 hover:bg-[#1a2030] hover:text-slate-200 border-l-4 border-transparent"
                }`}
                title={!sidebarOpen ? tool.name : ""}
              >
                <div className={`flex-shrink-0 transition-transform group-hover:scale-110 ${isActive ? 'text-orange-500' : ''}`}>
                  {tool.icon}
                </div>
                <span className={`font-medium whitespace-nowrap transition-all duration-300 ${sidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 hidden'}`}>
                  {tool.name}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Main Panel */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#0b0c10]">
        <Header />
        
        <main className="flex-1 p-6 md:p-10 overflow-y-auto custom-scrollbar">
          <div className="max-w-6xl mx-auto flex flex-col h-full bg-[#141824] rounded-2xl border border-[#242b3d] shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>
            
            <div className="p-6 border-b border-[#242b3d] flex items-center justify-between bg-[#191f2e] rounded-t-2xl">
              <div>
                <h1 className="text-2xl font-bold text-white tracking-wide">
                  {activeTool?.name}
                </h1>
                <p className="text-orange-500/80 text-sm font-medium mt-1">DataForge Operations Control</p>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 flex-1 min-h-[500px] flex flex-col min-w-0 overflow-hidden">
              <div className="flex-1 w-full h-full min-w-0 min-h-0 flex flex-col">
                 {renderTool()}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
