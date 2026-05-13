import React from 'react'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = '',
  id,
}) => {
  return (
    <section
      id={id}
      className={`
        py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden ${className}
      `}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}
