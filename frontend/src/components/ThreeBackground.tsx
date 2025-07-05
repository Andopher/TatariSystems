import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedParticles() {
  const ref = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.1
      ref.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  const count = 5000
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10

    colors[i * 3] = Math.random() * 0.5 + 0.5 // R
    colors[i * 3 + 1] = Math.random() * 0.3 + 0.7 // G
    colors[i * 3 + 2] = Math.random() * 0.8 + 0.2 // B
  }

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial
        transparent
        vertexColors
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[2, 0, -2]}>
      <octahedronGeometry args={[0.5, 0]} />
      <meshStandardMaterial
        color="#3b82f6"
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  )
}

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedParticles />
        <FloatingGeometry />
      </Canvas>
    </div>
  )
}

export default ThreeBackground 