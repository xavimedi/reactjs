import React, { useEffect } from "react";
import * as THREE from "three";

function Background(): JSX.Element {
  useEffect(() => {
    // SCENE
    const scene = new THREE.Scene();

    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 2;

    // Handle window resize
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      // Update the camera aspect ratio and renderer size on window resize
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor("#000000");
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Attach the renderer's canvas to a DOM element
    const canvasContainer = document.getElementById("threejs");
    if (canvasContainer) {
      canvasContainer.appendChild(renderer.domElement);
    }

    // RAYCASTER

    const pointer = new THREE.Vector2();
    function onPointerMove(event: MouseEvent) {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    window.addEventListener("pointermove", onPointerMove);

    // LIGHT
    const light = new THREE.PointLight(0xffffff, 10, 20, 1);
    light.position.set(0, 10, 0);
    scene.add(light);

    // SHAPE
    const icosahedron = new THREE.IcosahedronGeometry(10, 0);

    // MATERIALS
    const colors = [
      0x0088ff, 0x4066ee, 0x8044dd, 0xc022cc, 0xff00bb, 0xff795e, 0xffca1f,
      0xfff200, 0x00d12d, 0x0d98ba,
    ];

    const icos: THREE.Mesh[] = [];
    for (let i = 0; i < colors.length; i++) {
      const color = new THREE.MeshLambertMaterial({ color: colors[i] });
      const ico = new THREE.Mesh(icosahedron, color);
      const rotation = 0.03;
      ico.rotation.set(rotation * i, rotation * i, rotation * i);
      scene.add(ico);
      icos.push(ico);
    }

    const render = () => {
      requestAnimationFrame(render);

      // ICOS ROTATION
      icos.forEach((ico, i) => {
        const rotationSpeed = 0.0001 * (i + 1);
        ico.rotation.x += rotationSpeed;
        ico.rotation.y += rotationSpeed;
        ico.rotation.z += rotationSpeed;

        if (ico.position.z > -9.9) {
          const icoMoveScale = 0.05;
          ico.position.z -= icoMoveScale * (ico.position.z + 10);
        }
      });

      renderer.render(scene, camera);
    };

    render();

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", onPointerMove);

      if (canvasContainer) {
        canvasContainer.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div id="threejs">
      {/* You can add any additional JSX content or components here */}
    </div>
  );
}

export default Background;
