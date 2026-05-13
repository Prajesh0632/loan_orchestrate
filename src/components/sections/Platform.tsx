'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Database, Workflow, BarChart3, Cpu } from 'lucide-react'
import { Card, SectionWrapper } from '@/components/ui'

const platformComponents = [
  {
    icon: Database,
    title: 'Lending Orchestration Engine',
    description: 'Core decisioning engine powered by advanced ML models. Real-time processing of complex lending rules.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Workflow,
    title: 'API & Workflow Pipelines',
    description: 'Enterprise-grade APIs for seamless integration. Modular workflow automation for compliance.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Real-time insights into lending metrics, borrower behavior, and portfolio performance.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Cpu,
    title: 'AI Automation Infrastructure',
    description: 'Scalable infrastructure supporting multiple concurrent AI agents and processing pipelines.',
    color: 'from-orange-500 to-red-500',
  },
]

export const Platform: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <SectionWrapper id="platform" className="bg-gradient-to-b from-navy via-slate-900 to-navy py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl opacity-20" />
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
            Platform Architecture
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Built on enterprise-grade infrastructure for reliability, scalability, and security
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {platformComponents.map((component, index) => {
          const Icon = component.icon
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card glow="cyan" hoverable className="h-full group">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${component.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{component.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{component.description}</p>

                {/* Animated line */}
                <div className="mt-4 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </Card>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Architecture diagram placeholder */}
      <motion.div
        className="mt-16 glass rounded-2xl p-8 border border-cyan-500/20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-white mb-6">System Architecture</h3>
        <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-lg p-8 min-h-64 flex items-center justify-center border border-gray-700/30">
          <div className="text-center">
            <div className="grid grid-cols-3 gap-8 mb-8 w-full">
              {['Data Ingestion', 'Processing', 'Delivery'].map((layer, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30 mb-3">
                    <Cpu size={24} className="text-cyan-400" />
                  </div>
                  <p className="text-sm font-semibold text-gray-300">{layer}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm">Enterprise-grade system designed for 99.99% uptime and sub-second processing</p>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
