import Link from 'next/link'
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Upload, UserPlus } from 'lucide-react'
import { Button, Card, SectionWrapper, Badge } from '@/components/ui'

const steps = [
  {
    icon: UserPlus,
    title: 'Create your account',
    description: 'Set up a workspace for your team and choose the lending workflow you want to launch.',
  },
  {
    icon: Upload,
    title: 'Add your data sources',
    description: 'Connect application forms, document uploads, or existing borrower records.',
  },
  {
    icon: ShieldCheck,
    title: 'Activate controls',
    description: 'Configure review rules, compliance checks, and approval thresholds.',
  },
]

const benefits = [
  'AI document review and orchestration',
  'Built-in compliance checkpoints',
  'Fast borrower onboarding flow',
  'Team-ready approval dashboard',
]

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-navy via-slate-900 to-navy text-gray-100">
      <SectionWrapper className="pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <Badge variant="info">Launch your lending workflow</Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Get started with ACLO in a few steps.
            </h1>
            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              Set up your organization, connect your borrower intake flow, and start testing AI-assisted credit orchestration.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href="/signup" variant="primary" size="lg">
                Create account
                <ArrowRight size={18} />
              </Button>
              <Button href="/" variant="outline" size="lg">
                Back to home
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {benefits.map((item) => (
                <Card key={item} glow="emerald" className="p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-400 mt-0.5" size={18} />
                    <p className="text-sm text-gray-300">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card glow="cyan" className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={18} className="text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Start checklist</h2>
            </div>

            <div className="space-y-4">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={step.title} className="flex gap-4 p-4 rounded-xl bg-slate-800/40 border border-gray-700/30">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">Step {index + 1}</p>
                      <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                      <p className="text-sm text-gray-400">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <p className="text-sm text-gray-300">
                Already have an account? Go straight to the signup flow and finish setup in one pass.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 mt-4 text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                Open signup
                <ArrowRight size={16} />
              </Link>
            </div>
          </Card>
        </div>
      </SectionWrapper>
    </main>
  )
}
