'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileCheck, Eye, Lock, Fingerprint, Brain } from 'lucide-react'
import { Card, SectionWrapper } from '@/components/ui'

const features = [
  {
    icon: FileCheck,
    title: 'AI Document Verification',
    description: 'Automated verification of loans, pay stubs, and identity documents using advanced OCR and ML.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Brain,
    title: 'Alternative Credit Scoring',
    description: 'Machine learning models that analyze alternative data sources for underbanked populations.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Lock,
    title: 'Compliance Automation',
    description: 'Automated KYC, AML, and regulatory compliance checks integrated into the lending workflow.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Fingerprint,
    title: 'OCR & Identity Verification',
    description: 'Advanced biometric and document verification with liveness detection and tamper protection.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Brain,
    title: 'AI Decision Engine',
    description: 'Real-time credit decisioning powered by ensemble ML models with 94% accuracy rate.',
    color: 'from-indigo-500 to-blue-500',
  },
]

export const Features: React.FC = () => {
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
    <SectionWrapper id="features" className="py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20" />
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
            Core Capabilities
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Comprehensive suite of AI-powered features for modern lending
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card glow="cyan" hoverable className="h-full flex flex-col">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">{feature.description}</p>

                {/* Animated border on hover */}
                <div className="mt-4 h-0.5 bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionWrapper>
  )
}
