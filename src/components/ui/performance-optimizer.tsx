"use client"

import { useState, useEffect, Suspense, ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, AlertCircle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PerformanceOptimizerProps {
  children: ReactNode
  fallback?: ReactNode
  errorFallback?: ReactNode
  loadingDelay?: number
  retryCount?: number
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  retryCount: number
}

export function PerformanceOptimizer({
  children,
  fallback,
  loadingDelay = 100,
  retryCount = 3,
}: PerformanceOptimizerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [errorState, setErrorState] = useState<ErrorBoundaryState>({
    hasError: false,
    retryCount: 0,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, loadingDelay)

    return () => clearTimeout(timer)
  }, [loadingDelay])

  const handleRetry = () => {
    setErrorState(prev => ({
      hasError: false,
      retryCount: prev.retryCount + 1,
    }))
    setIsLoading(true)
  }

  if (errorState.hasError) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
        <h3 className="text-lg font-semibold mb-2">Something went wrong</h3>
        <p className="text-muted-foreground mb-4 text-center max-w-md">
          We encountered an error loading this content. Please try again.
        </p>
        {errorState.retryCount < retryCount && (
          <Button onClick={handleRetry} variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
        )}
      </div>
    )
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex items-center justify-center py-12"
        >
          {fallback || (
            <div className="flex items-center space-x-2">
              <Loader2 className="h-6 w-6 animate-spin text-gold-500" />
              <span className="text-muted-foreground">Loading...</span>
            </div>
          )}
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Suspense fallback={fallback}>
            {children}
          </Suspense>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Performance monitoring hook
export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
  })

  useEffect(() => {
    const startTime = performance.now()
    
    const measurePerformance = () => {
      const loadTime = performance.now() - startTime
      
      // Measure memory usage if available
      const memoryUsage = (performance as any).memory 
        ? (performance as any).memory.usedJSHeapSize / 1024 / 1024 
        : 0

      setMetrics({
        loadTime,
        renderTime: performance.now() - startTime,
        memoryUsage,
      })
    }

    // Measure after initial render
    const timer = setTimeout(measurePerformance, 0)
    
    return () => clearTimeout(timer)
  }, [])

  return metrics
}

// Image optimization wrapper
export function OptimizedImage({
  src,
  alt,
  className,
  priority = false,
  sizes,
  onError,
  ...props
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
  onError?: () => void
  [key: string]: any
}) {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const handleError = () => {
    setHasError(true)
    onError?.()
  }

  const handleLoad = () => {
    setIsLoaded(true)
  }

  if (hasError) {
    return (
      <div className={`bg-muted flex items-center justify-center ${className}`}>
        <AlertCircle className="h-8 w-8 text-muted-foreground" />
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={priority ? 'eager' : 'lazy'}
        sizes={sizes}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
    </div>
  )
}
