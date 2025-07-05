import { useEffect } from 'react'

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        console.log('LCP:', lastEntry.startTime)
        
        // Send to analytics if LCP is poor
        if (lastEntry.startTime > 2500) {
          console.warn('Poor LCP detected:', lastEntry.startTime)
        }
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEventTiming
          if (fidEntry.processingStart) {
            console.log('FID:', fidEntry.processingStart - fidEntry.startTime)
            
            // Send to analytics if FID is poor
            if (fidEntry.processingStart - fidEntry.startTime > 100) {
              console.warn('Poor FID detected:', fidEntry.processingStart - fidEntry.startTime)
            }
          }
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
            console.log('CLS:', clsValue)
            
            // Send to analytics if CLS is poor
            if (clsValue > 0.1) {
              console.warn('Poor CLS detected:', clsValue)
            }
          }
        })
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
    }

    // Monitor page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now()
      console.log('Page load time:', loadTime)
      
      // Send to analytics if load time is poor
      if (loadTime > 3000) {
        console.warn('Slow page load detected:', loadTime)
      }
    })
  }, [])

  return null // This component doesn't render anything
}

export default PerformanceMonitor 