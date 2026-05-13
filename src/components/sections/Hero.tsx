'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { Button, SectionWrapper } from '@/components/ui'

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const floatingVariants = {
    initial: { y: 0, x: 0 },
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <SectionWrapper id="hero" className="pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Gradient glow background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 w-fit">
              <Zap size={16} className="text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">AI-Powered Credit Orchestration</span>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              AI Credit Orchestration
            </span>
            <span className="text-white"> Platform</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-gray-300 max-w-xl leading-relaxed">
            Revolutionizing lending for underbanked communities in Nepal. Our AI-powered orchestration engine automates credit decisions, verifies identity, and ensures compliance—all in seconds.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg">
              Apply for Loan
              <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" size="lg">
              View Platform
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-6 pt-4 border-t border-gray-700/30">
            <div>
              <p className="text-2xl font-bold text-cyan-400">50K+</p>
              <p className="text-sm text-gray-400">Active Borrowers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-emerald-400">$25M+</p>
              <p className="text-sm text-gray-400">Loans Disbursed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-cyan-400">2.3s</p>
              <p className="text-sm text-gray-400">Avg Decision Time</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right - Animated Dashboard */}
        <motion.div
          className="relative h-96 md:h-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-2xl blur-2xl" />

          {/* Main dashboard card */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-cyan-500/20 glass p-6"
            variants={floatingVariants}
            initial="initial"
            animate="animate"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-white">Credit Application</h3>
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
            </div>

            {/* Loan Status Card */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-cyan-500/10 to-transparent rounded-lg p-4 border border-cyan-500/20">
                <p className="text-xs text-gray-400 mb-2">Application Status</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-cyan-400">Processing</span>
                  <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-cyan-400 to-emerald-400 animate-pulse" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-700/30 rounded-lg p-3 border border-gray-700/50">
                  <p className="text-xs text-gray-400">Credit Score</p>
                  <p className="text-xl font-bold text-emerald-400 mt-1">742</p>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-3 border border-gray-700/50">
                  <p className="text-xs text-gray-400">Approval</p>
                  <p className="text-xl font-bold text-cyan-400 mt-1">94%</p>
                </div>
              </div>

              {/* Activity indicators */}
              <div className="bg-slate-700/20 rounded-lg p-3 border border-gray-700/30 space-y-2">
                <p className="text-xs text-gray-400 font-semibold">AI Activity</p>
                {['Document Verification', 'Income Analysis', 'Risk Assessment'].map((activity, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-emerald-400 animate-pulse' : i === 1 ? 'bg-cyan-400' : 'bg-gray-500'}`} />
                    <span className="text-xs text-gray-300">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Floating Cards */}
          {[
            { top: '10%', right: '10%', label: 'KYC Status', value: '✓ Verified', color: 'emerald' },
            { bottom: '20%', left: '5%', label: 'Risk Level', value: 'Low', color: 'cyan' },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="absolute glass rounded-lg p-3 w-32 border border-gray-700/30"
              style={{ top: card.top, bottom: card.bottom, left: card.left, right: card.right }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <p className="text-xs text-gray-400">{card.label}</p>
              <p className={`text-sm font-semibold mt-1 text-${card.color}-400`}>{card.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
