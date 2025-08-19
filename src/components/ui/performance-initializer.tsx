"use client"

import { useEffect } from "react"
import { initPerformanceMonitoring } from "@/lib/performance"

export function PerformanceInitializer() {
  useEffect(() => {
    // Initialize performance monitoring
    const monitor = initPerformanceMonitoring()

    // Log performance metrics after page load
    const logPerformance = () => {
      setTimeout(() => {
        monitor.logMetrics()
      }, 2000) // Wait for page to fully load
    }

    // Log metrics when page becomes visible
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        logPerformance()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Initial log
    logPerformance()

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      monitor.disconnect()
    }
  }, [])

  return null // This component doesn't render anything
}
