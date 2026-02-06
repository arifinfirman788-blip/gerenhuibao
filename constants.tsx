
import React from 'react';
import { 
  Trophy, 
  Users, 
  Cpu, 
  Rocket, 
  Layout, 
  MessageSquare, 
  Briefcase,
  Layers,
  ChevronRight,
  Target
} from 'lucide-react';
import { Milestone, Competency } from './types';

export const MILESTONES: Milestone[] = [
  {
    period: "1月 - 3月",
    title: "深耕文娱，奠定基石",
    description: "接手项目初期，主要负责文娱板块的设计工作。从交互逻辑到视觉风格，完成了从无到有的搭建，为黄小西平台打下了良好的基础。",
    highlights: ["全链路交互优化", "文娱场景深度适配", "品牌视觉一致性"],
    icon: "Layout",
    images: [
      { src: "image/1-1.png", type: "mobile", caption: "文娱板块首页" },
      { src: "image/1-2.jpg", type: "mobile", caption: "活动详情页" }
    ]
  },
  {
    period: "3月 - 4月",
    title: "临危受命，攻坚调试",
    description: "发布会前夕接到行程规划的紧急任务。在时间紧迫的情况下，参与团队攻坚，积极推动功能调试与优化，保障了功能在发布会前顺利上线。",
    highlights: ["发布会技术支撑", "行程规划逻辑重构", "跨团队敏捷协作"],
    icon: "Rocket",
    images: [
      { src: "image/2-1.png", type: "mobile", caption: "行程规划入口" },
      { src: "image/2-2.png", type: "mobile", caption: "智能路线推荐" }
    ]
  },
  {
    period: "4月 - 6月",
    title: "生态启航，初次改版",
    description: "完成了首页的第一次改版，并开始接入贵客荟、华为、文旅厅等外部生态。克服了多方接口对接的复杂性，实现了平台的互联互通。",
    highlights: ["首页交互革新", "生态接口标准化", "多端兼容性设计"],
    icon: "Layers",
    images: [
      { src: "image/3-1.jpg", type: "mobile", caption: "新版首页" },
      { src: "image/3-2.png", type: "mobile", caption: "生态接入页" },
      { src: "image/3-3.png", type: "mobile", caption: "服务聚合中心" }
    ]
  },
  {
    period: "6月 - 8月",
    title: "数据打通，重点突破",
    description: "这一阶段的核心是深入打通贵客荟的底层数据，实现了业务闭环。同时上线了抖音小程序和多语言版本，有效拓宽了用户覆盖面。",
    highlights: ["数据资产闭环", "抖音小程序落地", "产品国际化视野"],
    icon: "Cpu",
    images: [
      { src: "image/4-1.jpg", type: "mobile", caption: "贵客荟数据看板" },
      { src: "image/4-2.jpg", type: "mobile", caption: "抖音小程序" },
      { src: "image/4-3.png", type: "mobile", caption: "多语言切换" }
    ]
  },
  {
    period: "8月 - 10月",
    title: "管理转型，制度重塑",
    description: "开始分管产品线后，重点建立了标准化的需求管理流程。重新调整了团队分工，让每位成员都能参与项目全生命周期，提升了团队综合能力。",
    highlights: ["制度标准化建设", "人才全生命周期培养", "多线并发管理"],
    icon: "Users",
    images: [
      { src: "image/5-1.png", type: "pc", caption: "需求管理流程图" },
      { src: "image/5-2.jpg", type: "pc", caption: "团队分工架构" },
      { src: "image/5-3.png", type: "pc", caption: "项目进度看板" }
    ]
  },
  {
    period: "10月 - 12月",
    title: "AI赋能，效能飞跃",
    description: "主动学习并引入AI工具，成功落地了旅居和导游智能体。这套高效的工作方法获得了领导认可，目前正在部门内逐步推广。",
    highlights: ["AI智能体实践", "工作流降本增效", "经验规模化推行"],
    icon: "Trophy",
    images: [
      { src: "image/6-1.png", type: "pc", caption: "旅居智能体后台" },
      { src: "image/6-2.png", type: "mobile", caption: "AI导游对话界面" },
      { src: "image/6-3.png", type: "pc", caption: "效能分析报告" },
      { src: "image/6-4.png", type: "pc", caption: "智能体配置中心" }
    ]
  }
];

export const COMPETENCIES: Competency[] = [
  {
    title: "领导能力",
    description: "我认为管理的核心是“定标准”和“定分工”。通过调整职责，让每位成员都能参与核心业务，团队现在的执行力和凝聚力都有了明显提升。",
    score: 4, // 4颗星
    tags: ["制度建设", "团队赋能", "愿景引领"]
  },
  {
    title: "专业素养",
    description: "具备从UI设计、产品策划到AI应用的全流程能力。能够独立完成从需求调研到产品落地的全过程，并持续关注前沿技术，保持业务的创新性。",
    score: 5, // 5颗星
    tags: ["全栈产品力", "AI敏捷开发", "生态构建"]
  },
  {
    title: "岗位适配度",
    description: "在实际工作中积累了平衡产品需求与业务需求的经验。既能胜任汇报规划工作，也能深入一线解决具体问题，非常契合当前岗位的复合型要求。",
    score: 4, // 4颗星
    tags: ["战略对齐", "高效响应", "超预期交付"]
  }
];
