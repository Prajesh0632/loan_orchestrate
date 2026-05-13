'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, TrendingUp, MapPin, Heart } from 'lucide-react'
import { Card, SectionWrapper } from '@/components/ui'

const impactMetrics = [
  {
    icon: Users,
    metric: '150,000+',
    label: 'Borrowers Served',
    description: 'Active users across Nepal with access to fair lending',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: TrendingUp,
    metric: '$120M+',
    label: 'Capital Deployed',
    description: 'Total loans disbursed supporting economic growth',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: MapPin,
    metric: '75%',
    label: 'Rural Reach',
    description: 'Loans extended to underbanked rural communities',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Heart,
    metric: '92%',
    label: 'Repayment Rate',
    description: 'Industry-leading customer repayment performance',
    color: 'from-orange-500 to-red-500',
  },
]

const impactStories = [
  {
    title: 'Rural Agricultural Lending',
    description: 'Farmers access working capital in 2 hours vs. weeks with traditional banks',
    impact: 'Enabling 40,000+ agricultural entrepreneurs',
    emoji: '🌾',
  },
  {
    title: 'Women Entrepreneurship',
    description: 'Female-led businesses receive 35% of our loans with zero collateral requirements',
    impact: 'Supporting 25,000+ women entrepreneurs',
    emoji: '👩‍💼',
  },
  {
    title: 'Remittance Integration',
    description: 'Analyze incoming remittances as income for credit scoring without bank records',
    impact: 'Serving 85,000+ remittance recipients',
    emoji: '💰',
  },
]

export const Impact: React.FC = () => {
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
    <SectionWrapper id="impact" className="py-24 bg-gradient-to-b from-navy via-slate-900 to-navy">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20" />
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
            Real-World Impact
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Transforming financial inclusion across Nepal with AI-powered lending
        </p>
      </motion.div>

      {/* Impact Metrics */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {impactMetrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card glow="emerald" hoverable className="h-full flex flex-col">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <p className="text-3xl font-bold text-white mb-1">{metric.metric}</p>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">{metric.label}</h3>
                <p className="text-gray-400 text-sm flex-grow">{metric.description}</p>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Impact Stories */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Stories of Change</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {impactStories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card glow="cyan" hoverable className="h-full p-8">
                <div className="text-4xl mb-4">{story.emoji}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{story.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{story.description}</p>
                <div className="pt-4 border-t border-gray-700/30">
                  <p className="text-emerald-400 text-sm font-semibold">{story.impact}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        className="glass rounded-2xl p-8 md:p-12 border border-emerald-500/20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Our Vision
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Building a world where geography, background, or education doesn't determine access to capital. 
          Through AI-powered lending and financial inclusion, we're enabling economic opportunity for everyone.
        </p>
      </motion.div>
    </SectionWrapper>
  )
}
