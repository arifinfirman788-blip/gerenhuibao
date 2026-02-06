
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Target, 
  Award, 
  ArrowRight, 
  Star,
  Activity,
  Zap,
  Layout,
  Rocket,
  Layers,
  Cpu,
  Users,
  Trophy,
  CheckCircle2,
  TrendingUp,
  BrainCircuit,
  Image as ImageIcon,
  ExternalLink,
  Compass,
  HeartHandshake,
  Workflow,
  FileText,
  XCircle,
  Brain,
  Lightbulb
} from 'lucide-react';
import { MILESTONES, COMPETENCIES } from './constants';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const IconMap: Record<string, any> = {
  Layout, Rocket, Layers, Cpu, Users, Trophy
};

const performanceData = [
  { name: '1-3月', value: 30, text: '业务上手' },
  { name: '4-6月', value: 55, text: '能力拓展' },
  { name: '7-9月', value: 85, text: '带队攻坚' },
  { name: '10-12月', value: 120, text: '效能突破' },
];

const ResultPlaceholder = ({ label, images }: { label: string; images?: { src: string; type: 'mobile' | 'pc'; caption: string }[] }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!images || images.length === 0) {
    return (
      <div className="mt-6 flex flex-col items-center justify-center h-64 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl text-slate-400">
        <ImageIcon className="w-8 h-8 mb-2 opacity-20" />
        <span className="text-xs font-medium uppercase tracking-wider opacity-60">暂无展示图片</span>
      </div>
    );
  }

  return (
    <>
      <div className="mt-6 flex gap-4 overflow-x-auto pb-6 scrollbar-hide w-full px-2">
        {images.map((img, i) => (
          <div 
            key={i} 
            className={`flex-shrink-0 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-400 hover:border-blue-300 transition-colors relative group/item cursor-zoom-in overflow-hidden ${img.type === 'pc' ? 'w-64 h-40' : 'w-32 h-64'}`}
            onClick={() => setSelectedImage(img.src)}
          >
            <img src={img.src} alt={img.caption} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover/item:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-1 text-[10px] text-white text-center opacity-0 group-hover/item:opacity-100 transition-opacity">
              {img.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img src={selectedImage} alt="Preview" className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" />
            <button 
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 text-black shadow-lg hover:bg-slate-100"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const HeroSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-white relative overflow-hidden">
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60"
    />
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-60"
    />
    
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="z-10"
    >
      <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-8">
        <Star className="w-4 h-4 mr-2 fill-blue-500" /> 2025年度核心竞聘汇报
      </div>
      <h1 className="text-4xl md:text-7xl font-black mb-6 text-slate-900 leading-tight">
        深耕黄小西产品线<br/>
        <span className="text-blue-600">助力业务提效</span>
      </h1>
      <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
        从“设计匠人”到“业务负责人”的跃迁之路<br/>
        聚焦领导力、专业深度与岗位适配度
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <div className="flex items-center space-x-2 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100">
          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          <span className="text-slate-700 font-bold">10+ 场景落地</span>
        </div>
        <div className="flex items-center space-x-2 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100">
          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          <span className="text-slate-700 font-bold">10+ 第三方接入</span>
        </div>
      </div>
    </motion.div>

    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-10"
    >
      <div className="w-6 h-10 border-2 border-slate-200 rounded-full flex justify-center p-1">
        <div className="w-1 h-2 bg-blue-500 rounded-full" />
      </div>
    </motion.div>
  </section>
);

const TimelineSection = () => {
  const [activeMilestone, setActiveMilestone] = useState(0);

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center mb-2 text-blue-600 font-bold tracking-tighter uppercase">
              <Activity className="mr-2 w-5 h-5" /> Work Progress
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900">2025 奋斗足迹</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs italic">
            记录每一个关键节点的成长与成果交付。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Timeline Navigation */}
          <div className="lg:col-span-5 relative space-y-4">
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-200" />
            
            {MILESTONES.map((item, index) => {
              const Icon = IconMap[item.icon];
              const isActive = activeMilestone === index;
              return (
                <motion.div 
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setActiveMilestone(index)}
                  className={`relative pl-14 cursor-pointer group transition-all duration-300 ${isActive ? 'scale-105' : 'hover:scale-102'}`}
                >
                  <div className={`absolute left-6 -translate-x-1/2 top-6 w-4 h-4 rounded-full border-4 z-20 shadow-sm transition-colors duration-300 ${isActive ? 'bg-blue-600 border-blue-200' : 'bg-white border-slate-300 group-hover:border-blue-400'}`} />
                  
                  <div className={`p-5 rounded-2xl border transition-all duration-300 ${isActive ? 'bg-white border-blue-200 shadow-lg shadow-blue-500/10' : 'bg-white/50 border-transparent hover:bg-white hover:border-slate-100 hover:shadow-md'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-bold tracking-widest ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>{item.period}</span>
                      <Icon className={`w-4 h-4 ${isActive ? 'text-blue-500' : 'text-slate-300'}`} />
                    </div>
                    <h3 className={`text-lg font-bold ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>{item.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Showcase */}
          <div className="lg:col-span-7">
            <div className="sticky top-24">
              <motion.div
                key={activeMilestone}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/60 border border-slate-100 min-h-[500px] flex flex-col"
              >
                <div className="mb-6">
                  <div className="flex gap-2 mb-4">
                    {MILESTONES[activeMilestone].highlights.map((h, i) => (
                      <span key={i} className="text-[10px] px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold border border-blue-100 uppercase tracking-wide">
                        {h}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">{MILESTONES[activeMilestone].title}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed">
                    {MILESTONES[activeMilestone].description}
                  </p>
                </div>

                <div className="mt-auto bg-slate-50 rounded-2xl border border-dashed border-slate-200 p-6 flex-grow flex flex-col justify-center">
                   <div className="flex items-center justify-between mb-4 px-2">
                       <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">PROJECT SHOWCASE</span>
                       <ExternalLink className="w-4 h-4 text-slate-300" />
                    </div>
                    <ResultPlaceholder 
                      label={`${MILESTONES[activeMilestone].period} 核心成果`} 
                      images={MILESTONES[activeMilestone].images}
                    />
                 </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamEmpowermentSection = () => (
  <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-slate-900 mb-4">团队赋能</h2>
        <p className="text-slate-500 text-lg">打造高绩效、高凝聚力的作战单元</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            icon: Users,
            title: "人尽其才",
            desc: "根据成员工作能力与擅长领域，进行主营产品职能划分，让专业的人专注做专业的事。",
            color: "blue"
          },
          {
            icon: Compass,
            title: "授人以渔",
            desc: "给予方向性建议，在遵循顶层要求的前提下不过多干预，鼓励成员自主决策，在实战中快速成长。",
            color: "indigo"
          },
          {
            icon: HeartHandshake,
            title: "人文关怀",
            desc: "不定时与团队成员沟通，了解其工作与生活状态，确保工作压力是正向的。",
            color: "rose"
          },
          {
            icon: Workflow,
            title: "体系建设",
            desc: "建立并优化需求管理办法与迭代流程，为团队提供清晰、高效的工作框架。",
            color: "emerald"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex items-start space-x-6 group"
          >
            <div className={`p-4 rounded-2xl bg-${item.color}-50 text-${item.color}-600 group-hover:scale-110 transition-transform duration-300`}>
              <item.icon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const InnovationVisionSection = () => (
  <section className="py-24 px-6 bg-white relative">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-black text-slate-900 mb-4">创新远见</h2>
        <p className="text-slate-500 text-lg">将AI从概念转化为生产力</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20 relative">
        {/* Traditional Model */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="flex-1 bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 text-center relative w-full md:w-auto"
        >
          <div className="text-slate-400 font-bold tracking-widest uppercase mb-6 text-sm">传统模式</div>
          <div className="flex justify-center mb-6 space-x-4">
            <FileText className="w-16 h-16 text-slate-300" />
            <XCircle className="w-8 h-8 text-rose-300 absolute top-10 right-[35%]" />
          </div>
          <h3 className="text-2xl font-bold text-slate-700 mb-2">传统原型设计</h3>
          <p className="text-slate-400 text-sm">冗长沟通 · 高昂研发成本</p>
        </motion.div>

        {/* Arrow */}
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          className="z-10 bg-gradient-to-r from-amber-400 to-orange-500 p-4 rounded-full shadow-lg shadow-orange-500/30 transform md:rotate-0 rotate-90"
        >
          <ArrowRight className="w-8 h-8 text-white" />
        </motion.div>

        {/* AI Model */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-[2.5rem] border border-blue-100 text-center relative w-full md:w-auto shadow-xl shadow-blue-500/5"
        >
          <div className="text-blue-600 font-bold tracking-widest uppercase mb-6 text-sm flex items-center justify-center gap-2">
            <Zap className="w-4 h-4" /> AI 赋能
          </div>
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Brain className="w-16 h-16 text-blue-600" />
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full blur-sm" 
              />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">AI 辅助设计</h3>
          <p className="text-blue-600 font-medium text-sm bg-white/60 py-2 px-4 rounded-full inline-block">
            汇报级原型仅需 1-3 天，且可直接前端部署
          </p>
        </motion.div>
      </div>

      <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:20px_20px]" />
        </div>
        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 text-amber-400 font-bold uppercase tracking-widest mb-4">
            <Lightbulb className="w-5 h-5" />
            <span>我的思考与未来方向</span>
          </div>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto font-medium">
            致力于研究如何让业务人员通过AI直接完成项目落地，技术人员只需微调，最终实现<span className="text-white font-bold mx-1">减少研发投入</span>、<span className="text-white font-bold mx-1">缩短项目落地时间</span>的战略目标。
          </p>
        </div>
      </div>
    </div>
  </section>
);

const AIAdvantageSection = () => {
  const [showReportModal, setShowReportModal] = useState(false);

  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-block p-4 rounded-3xl bg-blue-50 mb-8 border border-blue-100"
        >
          <BrainCircuit className="w-12 h-12 text-blue-600" />
        </motion.div>
        <h2 className="text-4xl font-black mb-6 text-slate-900">“AI 智能体：提升工作效率与汇报质量”</h2>
        <p className="text-slate-500 max-w-2xl mx-auto mb-16">
          通过自研旅居及导游智能体，实现从“AI 产品设计”到“AI 汇报设计”的全面赋能。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
          {/* Left Column: AI Product Design */}
          <div className="flex flex-col gap-6">
            <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100 mb-2">
              <h3 className="text-xl font-bold text-blue-800 flex items-center">
                <Zap className="w-5 h-5 mr-2" /> AI 产品设计
              </h3>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative overflow-hidden group">
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-blue-600 font-bold text-sm mb-2 uppercase tracking-widest">Product Agent A</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">旅居智能体</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">
                  借助AI改变传统开发交付模式，缩短30%的工期，前端样式及交互也有了一定提升。
                </p>
                <div className="h-auto min-h-[300px] bg-white rounded-2xl border border-slate-200 flex flex-col items-center justify-center p-6 mt-auto">
                    <ResultPlaceholder label="旅居智能体交互" images={[{ src: "image/7-7.png", type: "pc", caption: "旅居智能体演示" }]} />
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative overflow-hidden group">
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-cyan-600 font-bold text-sm mb-2 uppercase tracking-widest">Product Agent B</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">旅行社智能体</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">
                  独立完成调研-设计-汇报，并通过AI进行页面级展示。
                </p>
                <div className="h-auto min-h-[300px] bg-white rounded-2xl border border-slate-200 flex flex-col items-center justify-center p-6 mt-auto">
                    <ResultPlaceholder label="旅行社智能体演示" images={[{ src: "image/7-8.png", type: "pc", caption: "旅行社智能体演示" }]} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: AI Reporting Design */}
          <div className="flex flex-col gap-6">
            <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-100 mb-2">
              <h3 className="text-xl font-bold text-amber-800 flex items-center">
                <Layout className="w-5 h-5 mr-2" /> AI 汇报设计
              </h3>
            </div>

            <div 
              className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative overflow-hidden h-full cursor-pointer hover:border-blue-300 hover:shadow-lg transition-all duration-300 group/panel"
              onClick={() => setShowReportModal(true)}
            >
               <div className="grid grid-cols-2 gap-4 h-full">
                  {[
                    { src: "image/7-1.png", title: "SCENE 1" },
                    { src: "image/7-2.png", title: "SCENE 2" },
                    { src: "image/7-3.png", title: "SCENE 3" },
                    { src: "image/7-4.png", title: "SCENE 4" },
                    { src: "image/7-5.png", title: "SCENE 5" },
                    { src: "image/7-6.png", title: "SCENE 6" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-xl border border-dashed border-slate-200 p-2 flex flex-col items-center justify-center min-h-[160px] overflow-hidden relative transition-transform duration-300 group-hover/panel:scale-[1.02]">
                      <img src={item.src} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                  ))}
               </div>
               
               <div className="absolute inset-0 bg-black/0 group-hover/panel:bg-black/5 transition-colors flex items-center justify-center pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl opacity-0 group-hover/panel:opacity-100 transform translate-y-4 group-hover/panel:translate-y-0 transition-all duration-300 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-bold text-slate-800">点击查看全套汇报设计</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-between mb-8">
              <div className="text-left">
                  <h4 className="text-xl font-bold text-slate-900">数字化价值产出 (Value Growth)</h4>
                  <p className="text-slate-400 text-xs">2025年度各阶段价值权重分布</p>
              </div>
              <div className="flex items-center space-x-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">
                  <TrendingUp className="w-4 h-4" />
                  <span>+120% 效能增长</span>
              </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', fontSize: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                  itemStyle={{ color: '#2563eb', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Report Showcase Modal */}
      {showReportModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10 overflow-y-auto"
          onClick={() => setShowReportModal(false)}
        >
          <div className="relative w-full max-w-7xl my-auto">
            <button 
              className="fixed top-6 right-6 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-50 backdrop-blur-md"
              onClick={(e) => { e.stopPropagation(); setShowReportModal(false); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" onClick={(e) => e.stopPropagation()}>
              {[
                { src: "image/7-1.png", title: "汇报封面设计" },
                { src: "image/7-2.png", title: "核心数据展示" },
                { src: "image/7-3.png", title: "项目流程图解" },
                { src: "image/7-4.png", title: "用户画像分析" },
                { src: "image/7-5.png", title: "竞品对比分析" },
                { src: "image/7-6.png", title: "未来规划展望" }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-2xl">
                  <img src={item.src} alt={item.title} className="w-full h-auto object-cover" />
                  <div className="p-4 bg-white border-t border-slate-100">
                    <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const CompetencySection = () => (
  <section className="py-24 px-6 bg-slate-50">
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="p-3 bg-amber-50 rounded-2xl mb-4">
            <Target className="text-amber-500 w-8 h-8" />
        </div>
        <h2 className="text-4xl font-black text-slate-900">核心能力自我评价</h2>
        <p className="text-slate-500 mt-2">基于2025年度实际业务表现的真实复盘</p>
      </div>
      
      <div className="grid grid-cols-1 gap-10">
        {COMPETENCIES.map((comp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15 }}
            className="group"
          >
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-500">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
                <div className="flex items-center">
                    <div className="w-1.5 h-10 bg-amber-500 mr-6 rounded-full" />
                    <h3 className="text-3xl font-black text-slate-900">{comp.title}</h3>
                </div>
                <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-6 h-6 ${star <= comp.score ? 'fill-amber-400 text-amber-400' : 'fill-slate-100 text-slate-200'}`} 
                      />
                    ))}
                </div>
              </div>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                {comp.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {comp.tags.map((tag, i) => (
                  <span key={i} className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FooterSection = () => (
  <section className="py-32 px-6 bg-white text-center relative overflow-hidden">
    <div className="max-w-4xl mx-auto z-10 relative">
      <h2 className="text-5xl font-black mb-8 text-slate-900 tracking-tight">2026 · 未完待续</h2>
      <p className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
        在“黄小西”项目的每一个环节，我都全情投入，力求完美。2026年，我期待能在更广阔的平台上，为省内文旅数字化建设贡献更多力量。
      </p>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-14 py-5 bg-blue-600 text-white rounded-[2rem] font-bold text-xl shadow-xl hover:shadow-2xl hover:shadow-blue-600/30 transition-all flex items-center mx-auto"
      >
        感谢聆听 <ArrowRight className="ml-3 w-6 h-6" />
      </motion.button>
    </div>
    
    <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-100" />
  </section>
);

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY / totalScroll;
      setScrollProgress(currentProgress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1.5 z-50 bg-slate-100">
        <motion.div 
          className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]" 
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <HeroSection />

      {/* Results Marquee - Light Theme Adjusted */}
      <div className="bg-slate-900 overflow-hidden shadow-xl"></div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>

      <TimelineSection />
      <TeamEmpowermentSection />
      <InnovationVisionSection />
      <AIAdvantageSection />
      <CompetencySection />
      <FooterSection />

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col space-y-3">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-4 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200 text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ChevronRight className="-rotate-90 w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
