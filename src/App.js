import React from "react";
import { VRCanvas, DefaultXRControllers, Hands } from "react-xr";
import { Sky, Plane, Text, OrbitControls } from "drei";

export default function App() {
  return (
    <VRCanvas shadowMap>
      <Sky />
      <Plane
        args={[1000, 1000]}
        position={[0, -1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <meshStandardMaterial attach="material" color="#888" />
      </Plane>
      <Text position={[0, 1, -5]} fontSize={1} color="#111">
        Hello ReactXR!
      </Text>
      <ambientLight intensity={0.1} />
      <spotLight
        position={[1, 8, 1]}
        angle={0.3}
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
