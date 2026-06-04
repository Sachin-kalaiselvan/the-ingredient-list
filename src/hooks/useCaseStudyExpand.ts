import { useState } from 'react'

export const useCaseStudyExpand = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  
  const toggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }
  
  return { expandedId, toggle }
}
