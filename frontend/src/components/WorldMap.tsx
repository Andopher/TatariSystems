import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Globe, Users, Cpu, Cloud, Bitcoin } from 'lucide-react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

interface Location {
  id: number
  name: string
  city: string
  country: string
  lat: number
  lng: number
  type: 'headquarters' | 'data-center' | 'mining-facility' | 'office'
  description: string
  employees?: number
  capacity?: string
}

const WorldMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)

  const locations: Location[] = [
    {
      id: 1,
      name: 'Tatari Systems Headquarters',
      city: 'San Francisco',
      country: 'United States',
      lat: 37.7749,
      lng: -122.4194,
      type: 'headquarters',
      description: 'Main headquarters and innovation center',
      employees: 150
    },
    {
      id: 2,
      name: 'North American Data Center',
      city: 'Dallas',
      country: 'United States',
      lat: 32.7767,
      lng: -96.7970,
      type: 'data-center',
      description: 'Primary AI training and cloud infrastructure facility',
      capacity: '1000+ GPUs'
    },
    {
      id: 3,
      name: 'European Operations Center',
      city: 'Amsterdam',
      country: 'Netherlands',
      lat: 52.3676,
      lng: 4.9041,
      type: 'office',
      description: 'European headquarters and regional operations',
      employees: 75
    },
    {
      id: 4,
      name: 'Renewable Mining Facility',
      city: 'Reykjavik',
      country: 'Iceland',
      lat: 64.1466,
      lng: -21.9426,
      type: 'mining-facility',
      description: 'Sustainable cryptocurrency mining powered by geothermal energy',
      capacity: '50 MW'
    },
    {
      id: 5,
      name: 'Asia Pacific Hub',
      city: 'Singapore',
      country: 'Singapore',
      lat: 1.3521,
      lng: 103.8198,
      type: 'office',
      description: 'APAC regional headquarters and emerging markets center',
      employees: 60
    },
    {
      id: 6,
      name: 'African Development Center',
      city: 'Nairobi',
      country: 'Kenya',
      lat: -1.2921,
      lng: 36.8219,
      type: 'office',
      description: 'Emerging markets technology hub and local partnerships',
      employees: 45
    },
    {
      id: 7,
      name: 'South American Operations',
      city: 'São Paulo',
      country: 'Brazil',
      lat: -23.5505,
      lng: -46.6333,
      type: 'office',
      description: 'Latin American market expansion and local partnerships',
      employees: 30
    }
  ]

  const getMarkerIcon = (type: Location['type']) => {
    const iconColors = {
      headquarters: '#1D2D44',
      'data-center': '#496894',
      'mining-facility': '#D0E1F5',
      office: '#64748b'
    }

    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          width: 12px;
          height: 12px;
          background-color: ${iconColors[type]};
          border: 2px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          cursor: pointer;
          transition: all 0.2s ease;
        "></div>
      `,
      iconSize: [12, 12],
      iconAnchor: [6, 6]
    })
  }

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    // Initialize map as non-interactive (static)
    const map = L.map(mapRef.current, {
      center: [20, 0],
      zoom: 2,
      zoomControl: false,
      attributionControl: false,
      dragging: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
      touchZoom: false,
      bounceAtZoomLimits: false
    })

    // Add custom tile layer for a cleaner look
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map)

    // No zoom controls for static map

    // Create a single popup instance to be reused
    const popup = L.popup({
      maxWidth: 300,
      className: 'custom-popup',
      closeButton: false,
      autoClose: false,
      closeOnClick: false
    })

    // Add markers for each location
    locations.forEach(location => {
      const marker = L.marker([location.lat, location.lng], {
        icon: getMarkerIcon(location.type)
      }).addTo(map)

      const popupContent = `
        <div style="
          min-width: 220px; 
          font-family: system-ui, -apple-system, sans-serif;
          padding: 0;
        ">
          <div style="
            background: linear-gradient(135deg, #1D2D44 0%, #496894 100%);
            color: white;
            padding: 12px 16px;
            border-radius: 8px 8px 0 0;
            margin: -12px -12px 0 -12px;
          ">
            <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px;">
              ${location.name}
            </div>
            <div style="font-size: 12px; opacity: 0.9;">
              ${location.city}, ${location.country}
            </div>
          </div>
          <div style="padding: 12px 0;">
            <div style="color: #475569; font-size: 13px; line-height: 1.4; margin-bottom: 8px;">
              ${location.description}
            </div>
            ${location.employees ? `
              <div style="color: #64748b; font-size: 12px; display: flex; align-items: center; gap: 4px;">
                <span style="font-size: 14px;">👥</span> ${location.employees} employees
              </div>
            ` : ''}
            ${location.capacity ? `
              <div style="color: #64748b; font-size: 12px; display: flex; align-items: center; gap: 4px; margin-top: 4px;">
                <span style="font-size: 14px;">⚡</span> ${location.capacity} capacity
              </div>
            ` : ''}
          </div>
        </div>
      `

      // Add click event to marker
      marker.on('click', () => {
        // Close any existing popup first
        popup.remove()
        
        // Set new content and open popup
        popup.setContent(popupContent)
        popup.setLatLng([location.lat, location.lng])
        popup.openOn(map)
      })
    })

    mapInstanceRef.current = map

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-brand-primary mb-4">Global Presence</h3>
        <p className="text-brand-secondary mb-6">
          Tatari Systems operates across multiple continents, providing sustainable computing solutions worldwide.
        </p>
        
        {/* Clean Legend */}
        <div className="flex flex-wrap gap-6 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-brand-primary rounded-full"></div>
            <span className="text-sm text-brand-secondary font-medium">Headquarters</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-brand-secondary rounded-full"></div>
            <span className="text-sm text-brand-secondary font-medium">Data Centers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-brand-tertiary rounded-full"></div>
            <span className="text-sm text-brand-secondary font-medium">Mining Facilities</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            <span className="text-sm text-brand-secondary font-medium">Offices</span>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div 
        ref={mapRef} 
        className="w-full h-[600px] rounded-xl shadow-lg border border-gray-100 overflow-hidden"
        style={{ minHeight: '600px' }}
      />

      {/* Location Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
              <Globe className="w-4 h-4 text-white" />
            </div>
            <h4 className="font-semibold text-brand-primary">Global Reach</h4>
          </div>
          <p className="text-2xl font-bold text-brand-secondary">7 Countries</p>
          <p className="text-sm text-gray-600 mt-1">Operating across multiple continents</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <h4 className="font-semibold text-brand-primary">Team Size</h4>
          </div>
          <p className="text-2xl font-bold text-brand-secondary">360+ Employees</p>
          <p className="text-sm text-gray-600 mt-1">Diverse global workforce</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <h4 className="font-semibold text-brand-primary">Infrastructure</h4>
          </div>
          <p className="text-2xl font-bold text-brand-secondary">1000+ GPUs</p>
          <p className="text-sm text-gray-600 mt-1">High-performance computing capacity</p>
        </div>
      </div>

      <style>{`
        .custom-popup .leaflet-popup-content-wrapper {
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          border: none;
          animation: fadeInOut 0.3s ease-in-out;
        }
        
        .custom-popup .leaflet-popup-tip {
          background: white;
        }
        
        .custom-marker:hover {
          transform: scale(1.2);
        }
        
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .custom-popup.leaflet-popup {
          animation: fadeInOut 0.3s ease-in-out;
        }
      `}</style>
    </motion.div>
  )
}

export default WorldMap 