import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import scene from '../assets/3d/fox.glb';

const Fox = ({ currentAnimation, ...props }) => {
  const group = useRef();
  const [modelLoaded, setModelLoaded] = useState(false);
  const [error, setError] = useState(null);
  
  const { nodes, materials, animations } = useGLTF(scene, undefined, (error) => {
    console.error('Error loading model:', error);
    setError(error);
  });
  
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions || !currentAnimation) return;

    if (!names.includes(currentAnimation)) {
      console.warn(`Animation "${currentAnimation}" not found. Available animations:`, names);
      return;
    }

    try {
      Object.values(actions).forEach((action) => {
        if (action && action.stop) {
          action.stop();
        }
      });

      const action = actions[currentAnimation];
      if (action) {
        action.reset().fadeIn(0.5).play();
      }

      return () => {
        if (action && action.fadeOut && action.stop) {
          action.fadeOut(0.5);
          action.stop();
        }
      };
    } catch (err) {
      console.error('Animation error:', err);
      setError(err);
    }
  }, [actions, currentAnimation, names]);

  useEffect(() => {
    if (nodes && materials) {
      setModelLoaded(true);
    }
  }, [nodes, materials]);

  useFrame((state, delta) => {
    if (group.current) {
    }
  });

  if (error) {
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    );
  }

  if (!modelLoaded) {
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    );
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        {Object.keys(nodes)
          .filter(name => name.startsWith('Object_'))
          .map(name => (
            <skinnedMesh
              key={name}
              name={name}
              geometry={nodes[name].geometry}
              material={materials.PaletteMaterial001}
              skeleton={nodes[name].skeleton}
              frustumCulled={true}
              castShadow
              receiveShadow
            />
          ))}
      </group>
    </group>
  );
};

const cleanup = () => {
  if (typeof window !== 'undefined') {
    useGLTF.dispose(scene);
  }
};

useGLTF.preload(scene);

export default Fox;