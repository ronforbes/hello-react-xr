import React, { useRef } from "react";
import { VRCanvas, DefaultXRControllers, Hands } from "react-xr";
import { Sky, Plane, Text, OrbitControls } from "drei";
import { useFrame } from "react-three-fiber";

function Greeting() {
  const text = useRef();

  useFrame(() => (text.current.rotation.y += 0.01));

  return (
    <Text
      ref={text}
      position={[0, 0.5, -1]}
      fontSize={1}
      color="#111"
      castShadow
    >
      Hello ReactXR!
    </Text>
  );
}

export default function App() {
  return (
    <VRCanvas shadowMap>
      <Sky />
      <Plane
        args={[100, 100]}
        position={[0, -1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <meshStandardMaterial attach="material" color="#fff" />
      </Plane>
      <Greeting />
      <ambientLight intensity={0.1} />
      <spotLight
        position={[0, 6, 0]}
        angle={0.5}
        penumbra={1}
        intensity={0.5}
        castShadow
      />
      <DefaultXRControllers />
      <Hands />
      <OrbitControls />
    </VRCanvas>
  );
}
