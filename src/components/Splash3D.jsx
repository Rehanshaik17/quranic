import React, { useState, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import './Splash3D.css';

// A single 3D Butterfly component
const Butterfly = ({ position, color, speedScale, targetActive }) => {
  const group = useRef();
  const leftWing = useRef();
  const rightWing = useRef();

  // Initial random offsets for organic movement
  const [offset] = useState(() => new THREE.Vector3(
    Math.random() * 10 - 5,
    Math.random() * 10 - 5,
    Math.random() * 5 - 5
  ));
  const [timeOffset] = useState(() => Math.random() * 100);

  // Pre-create a beautiful butterfly wing geometry using a custom shape
  const geometry = useMemo(() => {
    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, -0.2);
    // Upper wing
    wingShape.bezierCurveTo(0.2, 0.6, 0.8, 0.8, 0.9, 0.4);
    // Middle dip
    wingShape.bezierCurveTo(0.9, 0.2, 0.6, 0.0, 0.8, -0.2);
    // Lower wing
    wingShape.bezierCurveTo(0.9, -0.6, 0.4, -0.8, 0.1, -0.6);
    // Back to body
    wingShape.bezierCurveTo(0.0, -0.5, 0.0, -0.3, 0, -0.2);
    
    // Scale and center the geometry slightly
    const geo = new THREE.ShapeGeometry(wingShape);
    geo.translate(-0.1, 0, 0); 
    geo.scale(0.8, 0.8, 0.8);
    return geo;
  }, []);
  
  // Custom material for wings with glowing edges
  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: color,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.85,
    emissive: color,
    emissiveIntensity: 0.6,
    roughness: 0.2,
    metalness: 0.5,
  }), [color]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime() + timeOffset;
    
    // Animate wings (flapping)
    const flapSpeed = targetActive ? 25 : 12;
    const flapAngle = Math.sin(time * flapSpeed) * 0.8;
    
    if (leftWing.current && rightWing.current) {
      leftWing.current.rotation.y = flapAngle;
      rightWing.current.rotation.y = -flapAngle;
    }

    // Move butterfly around the scene
    if (group.current) {
      const speed = targetActive ? speedScale * 2 : speedScale;
      
      // Organic circular / sine wave motion
      const x = Math.sin(time * speed * 0.5) * 8 + offset.x;
      const y = Math.cos(time * speed * 0.4) * 5 + offset.y + Math.sin(time * 3) * 0.5;
      const z = Math.sin(time * speed * 0.3) * 5 + offset.z;
      
      const currentPos = group.current.position;
      const targetPos = new THREE.Vector3(x, y, z);
      
      // Smoothly interpolate position
      currentPos.lerp(targetPos, 0.05);

      // Orient the butterfly towards its movement direction
      const nextX = Math.sin((time + 0.1) * speed * 0.5) * 8 + offset.x;
      const nextY = Math.cos((time + 0.1) * speed * 0.4) * 5 + offset.y;
      const nextZ = Math.sin((time + 0.1) * speed * 0.3) * 5 + offset.z;
      
      const targetLook = new THREE.Vector3(nextX, nextY, nextZ);
      group.current.lookAt(targetLook);
    }
  });

  return (
    <group ref={group} position={position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Left Wing */}
        <group position={[-0.3, 0, 0]}>
          <mesh ref={leftWing} geometry={geometry} material={material} position={[0.3, 0, 0]} />
        </group>
        {/* Right Wing */}
        <group position={[0.3, 0, 0]}>
          <mesh ref={rightWing} geometry={geometry} material={material} position={[-0.3, 0, 0]} />
        </group>
      </Float>
    </group>
  );
};

// Main Scene Component
export default function Splash3D({ onComplete }) {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // Generate 25 random butterflies
  const butterflies = useMemo(() => {
    const colors = ['#ff9a9e', '#fecfef', '#a1c4fd', '#c2e9fb', '#d4af37', '#e2b0ff', '#ffb199'];
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      position: [Math.random() * 15 - 7.5, Math.random() * 15 - 7.5, Math.random() * 10 - 15],
      color: colors[Math.floor(Math.random() * colors.length)],
      speedScale: Math.random() * 0.5 + 0.5,
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    setSubmitted(true);
    
    // Wait for cinematic welcome, then fade out
    setTimeout(() => {
      setFadeOut(true);
      // Wait for fade out transition before telling app we are done
      setTimeout(() => {
        if(onComplete) onComplete(name);
      }, 1000);
    }, 3000); // 3 seconds of welcome screen
  };

  return (
    <div className={`splash-container ${fadeOut ? 'fade-out' : ''}`}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#d4af37" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#a1c4fd" />
        
        {butterflies.map((b) => (
          <Butterfly 
            key={b.id} 
            position={b.position} 
            color={b.color} 
            speedScale={b.speedScale}
            targetActive={submitted}
          />
        ))}
      </Canvas>

      {/* HTML Overlay */}
      <div className="splash-ui">
        {!submitted && (
          <form className="splash-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              className="splash-input"
              placeholder="What is your name?" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
            <button type="submit" className="splash-submit">Enter</button>
          </form>
        )}
      </div>

      {/* Cinematic Welcome Text */}
      <div className={`splash-welcome ${submitted ? 'visible' : ''}`}>
        Welcome, {name}!
      </div>
    </div>
  );
}
