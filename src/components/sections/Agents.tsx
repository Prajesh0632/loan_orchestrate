'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Eye, Briefcase, TrendingUp, Shield, CheckCircle } from 'lucide-react'
import { Card, SectionWrapper, Badge } from '@/components/ui'

const agents = [
  {
    id: 1,
    name: 'Document Agent',
    description: 'Extracts and validates documents',
    icon: FileText,
    status: 'active',
    connections: [2, 3],
  },
  {
    id: 2,
    name: 'OCR Agent',
    description: 'Text extraction & recognition',
    icon: Eye,
    status: 'processing',
    connections: [4, 5],
  },
  {
    id: 3,
    name: 'Income Agent',
    description: 'Analyzes income sources',
    icon: Briefcase,
    status: 'idle',
    connections: [4],
  },
  {
    id: 4,
    name: 'Score Agent',
    description: 'Calculates credit score',
    icon: TrendingUp,
    status: 'active',
    connections: [6],
  },
  {
    id: 5,
    name: 'Compliance Agent',
    description: 'Ensures regulatory compliance',
    icon: Shield,
    status: 'idle',
    connections: [6],
  },
  {
    id: 6,
    name: 'Decision Agent',
    description: 'Final lending decision',
    icon: CheckCircle,
    status: 'active',
    connections: [],
  },
]

const getAgentColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'from-emerald-500 to-teal-500'
    case 'processing':
      return 'from-cyan-500 to-blue-500'
    default:
      return 'from-gray-600 to-slate-600'
  }
}

const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case 'active':
      return 'success'
    case 'processing':
      return 'info'
    default:
      return 'warning'
  }
}

export const Agents: React.FC = () => {
  return (
    <SectionWrapper id="agents" className="py-24 bg-gradient-to-b from-navy via-slate-900 to-navy">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20" />
      </div>

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            AI Agent Network
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Interconnected agents working in orchestrated harmony for intelligent lending decisions
        </p>
      </motion.div>

      {/* Agent Graph Visualization */}
      <motion.div
        className="relative glass rounded-2xl p-8 md:p-12 min-h-96 md:min-h-[500px] border border-cyan-500/20"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* SVG Connection Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.2))' }}
        >
          {/* Draw connection lines between agents */}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 0.4)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.4)" />
            </linearGradient>
          </defs>

          {/* Connection paths - simplified for mobile */}
          <line x1="15%" y1="25%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="85%" y1="25%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="30%" y1="70%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="70%" y1="70%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
        </svg>

        {/* Agent Nodes - Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 relative z-10">
          {agents.map((agent, index) => {
            const Icon = agent.icon
            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <Card
                  glow={agent.status === 'active' ? 'emerald' : agent.status === 'processing' ? 'cyan' : 'none'}
                  className={`
                    flex flex-col items-center text-center py-4 md:py-6 px-2 md:px-4
                    ${agent.status === 'active' ? 'border-emerald-500/40' : agent.status === 'processing' ? 'border-cyan-500/40' : 'border-gray-700/40'}
                  `}
                >
                  <motion.div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br ${getAgentColor(agent.status)} flex items-center justify-center mb-2 md:mb-3`}
                    animate={agent.status === 'active' ? { scale: [1, 1.1, 1] } : agent.status === 'processing' ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Icon className="text-white" size={20} />
                  </motion.div>

                  <h3 className="font-semibold text-white text-xs md:text-sm mb-1">{agent.name}</h3>
                  <p className="text-gray-400 text-xs mb-2 hidden sm:block">{agent.description}</p>

                  <Badge variant={getStatusBadgeVariant(agent.status)} className="text-xs">
                    {agent.status}
                  </Badge>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Agent Flow Description */}
      <motion.div
        className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {[
          {
            title: 'Parallel Processing',
            description: 'Multiple agents process information simultaneously for faster decisions',
          },
          {
            title: 'State Management',
            description: 'Agents share context and maintain application state throughout workflow',
          },
          {
            title: 'Error Handling',
            description: 'Intelligent fallback mechanisms ensure reliable lending decisions',
          },
        ].map((item, i) => (
          <Card key={i} glow="cyan" hoverable className="p-6">
            <h4 className="font-semibold text-white mb-2">{item.title}</h4>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </Card>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
