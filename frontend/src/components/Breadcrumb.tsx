import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  path: string
  current?: boolean
}

const Breadcrumb: React.FC = () => {
  const location = useLocation()
  
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const pathnames = location.pathname.split('/').filter((x) => x)
    
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', path: '/' }
    ]
    
    let currentPath = ''
    pathnames.forEach((name) => {
      currentPath += `/${name}`
      const label = name.charAt(0).toUpperCase() + name.slice(1)
      breadcrumbs.push({
        label,
        path: currentPath,
        current: currentPath === location.pathname
      })
    })
    
    return breadcrumbs
  }
  
  const breadcrumbs = getBreadcrumbs()
  
  if (breadcrumbs.length <= 1) return null
  
  return (
    <nav aria-label="Breadcrumb" className="py-4 px-4 sm:px-6 lg:px-8 bg-white border-b">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-secondary-400 mx-2" />
              )}
              {item.current ? (
                <span 
                  className="text-secondary-900 font-medium"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="text-secondary-600 hover:text-secondary-900 transition-colors flex items-center"
                >
                  {index === 0 ? (
                    <Home className="h-4 w-4 mr-1" />
                  ) : null}
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb 