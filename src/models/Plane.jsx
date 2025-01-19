import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import planeScene from '../assets/3d/plane.glb';

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (actions['Take 001']) {
      if (isRotating) {
        actions['Take 001'].reset().play();
      } else {
        actions['Take 001'].stop();
      }
    }
  }, [actions, isRotating]);

  return <primitive object={scene} {...props} ref={ref} dispose={null} />;
};

export default Plane;
