import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';

const Home = () => {
    const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [islandConfig, setIslandConfig] = useState({
    scale: [1, 1, 1],
    position: [0, -6.5, -43],
    rotation: [0.1, 4.7, 0],
  });
  const [planeConfig, setPlaneConfig] = useState({
    scale: [3, 3, 3],
    position: [0, -4, -4],
    rotation: [0, 20, 0],
  });

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition, screenRotation;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43];
      screenRotation = [0.1, 4.7, 0];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43];
      screenRotation = [0.1, 4.7, 0];
    }

    setIslandConfig({
      scale: screenScale,
      position: screenPosition,
      rotation: screenRotation,
    });
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition, screenRotation;

    if (window.innerWidth < 768) {
      screenScale = [3, 3, 3]; 
      screenPosition = [0, -2, 0];
      screenRotation = [0, 1, 0];
    } else {
      screenScale = [5, 5, 5]; 
      screenPosition = [0, -4, -4];
      screenRotation = [0, 1, 0];
    }

    setPlaneConfig({
      scale: screenScale,
      position: screenPosition,
      rotation: screenRotation,
    });
  };

  useEffect(() => {
    adjustIslandForScreenSize();
    adjustPlaneForScreenSize();
    window.addEventListener('resize', adjustIslandForScreenSize);
    window.addEventListener('resize', adjustPlaneForScreenSize);

    return () => {
      window.removeEventListener('resize', adjustIslandForScreenSize);
      window.removeEventListener('resize', adjustPlaneForScreenSize);
    };
  }, []);

  return (
    <section className="w-full h-screen relative">
        <div className = "absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
            {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        camera={{ position: [0, 0, 20], fov: 45, near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight intensity={1} position={[10, 10, 10]} />
          <ambientLight intensity={0.4} />
          <pointLight position={[0, 10, 10]} />
          <hemisphereLight intensity={0.4} />
          <Bird />
          <Sky isRotating={isRotating}/>
          <Island
            position={islandConfig.position}
            scale={islandConfig.scale}
            rotation={islandConfig.rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            position={planeConfig.position}
            scale={planeConfig.scale}
            rotation={planeConfig.rotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
