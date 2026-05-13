'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, CheckCircle, Lock, Eye, ClipboardList, Zap } from 'lucide-react'
import { Card, SectionWrapper } from '@/components/ui'

const complianceFeatures = [
  {
    icon: Shield,
    title: 'KYC Automation',
    description: 'Automated Know Your Customer verification with document validation',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Eye,
    title: 'AML Monitoring',
    description: 'Continuous Anti-Money Laundering screening and transaction monitoring',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Fraud Detection',
    description: 'Real-time fraud detection using advanced ML models and pattern analysis',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: ClipboardList,
    title: 'Audit Logs',
    description: 'Comprehensive audit trails for all transactions and decisions',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Lock,
    title: 'Data Encryption',
    description: 'End-to-end encryption for all sensitive data at rest and in transit',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: CheckCircle,
    title: 'Compliance Dashboard',
    description: 'Real-time compliance monitoring and reporting for regulatory oversight',
    color: 'from-cyan-500 to-emerald-500',
  },
]

export const Compliance: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <SectionWrapper id="compliance" className="py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl opacity-20" />
      </div>

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-4">
          <Shield size={16} className="text-emerald-400" />
          <span className="text-sm font-semibold text-emerald-300">Enterprise-Grade Security</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Compliance & Trust
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Built on enterprise-grade security and compliance infrastructure
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {complianceFeatures.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card glow="emerald" hoverable className="h-full">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Security Badges and Certifications */}
      <motion.div
        className="glass rounded-2xl p-8 md:p-12 border border-emerald-500/20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Verified Security Standards</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'ISO 27001', desc: 'Information Security' },
            { label: 'SOC 2 Type II', desc: 'Security Controls' },
            { label: 'GDPR Compliant', desc: 'Data Protection' },
            { label: '256-bit SSL', desc: 'Encryption' },
          ].map((cert, i) => (
            <motion.div
              key={i}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg p-4 border border-emerald-500/30 mb-2 flex items-center justify-center h-20">
                <CheckCircle className="text-emerald-400" size={32} />
              </div>
              <p className="font-semibold text-white text-sm">{cert.label}</p>
              <p className="text-gray-400 text-xs">{cert.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Encryption Details */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg p-6 border border-gray-700/30">
          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
            <Lock size={18} className="text-emerald-400" />
            Data Protection Workflow
          </h4>
          <div className="space-y-2 text-sm text-gray-300">
            <p>✓ End-to-end encryption for all data transmission</p>
            <p>✓ AES-256 encryption at rest for sensitive information</p>
            <p>✓ Multi-layer fraud detection and anomaly monitoring</p>
            <p>✓ Automated compliance reporting and audit trails</p>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
