import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';

const Home = () => {
  // State for dynamically updating island properties
  const [islandScale, setIslandScale] = useState([1, 1, 1]);
  const [islandPosition, setIslandPosition] = useState([0, -6.5, -43]);
  const [islandRotation, setIslandRotation] = useState([0.1, 4.7, 0]);

  // Function to adjust island properties based on screen size
  const adjustIslandForScreenSize = () => {
    if (window.innerWidth < 768) {
      setIslandScale([0.9, 0.9, 0.9]);
    } else {
      setIslandScale([1, 1, 1]);
    }
    // Set position and rotation dynamically (adjust these values as needed)
    setIslandPosition([0, -6.5, -43]);
    setIslandRotation([0.1, 4.7, 0]);
  };

  useEffect(() => {
    adjustIslandForScreenSize(); // Initial adjustment
    window.addEventListener('resize', adjustIslandForScreenSize); // Listen for resize
    return () => window.removeEventListener('resize', adjustIslandForScreenSize); // Cleanup
  }, []);

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ position: [0, 0, 10], fov: 75, near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/* Lighting to ensure the model is visible */}
          <directionalLight intensity={1} position={[10, 10, 10]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} />
          <hemisphereLight intensity={0.4} />

          {/* Render the Island component */}
          <Island position={islandPosition} scale={islandScale} rotation={islandRotation} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
