'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import type { TimeBasedStyles } from '../types';

interface ThreeSceneProps {
  targetCameraZ: number;
  timeStyles: TimeBasedStyles;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ targetCameraZ, timeStyles }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const starsRef = useRef<{ far: THREE.Points | null; near: THREE.Points | null }>({ far: null, near: null });
  const bubblesRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    
    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 2000);
    camera.position.z = 5;
    cameraRef.current = camera;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const clock = new THREE.Clock();
    
    // Stars
    const createStars = (count: number, size: number, radius: number) => {
      const positions = new Float32Array(count * 3);
      const randoms = new Float32Array(count);
      const sizes = new Float32Array(count);
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const r = Math.random() * radius + 100;
        const phi = Math.random() * Math.PI * 2;
        const theta = Math.acos((Math.random() * 2) - 1);
        const pos = new THREE.Vector3().setFromSphericalCoords(r, phi, theta);
        positions[i3] = pos.x;
        positions[i3 + 1] = pos.y;
        positions[i3 + 2] = pos.z;
        randoms[i] = Math.random();
        sizes[i] = Math.random() * size + 0.5;
      }
      const starGeometry = new THREE.BufferGeometry();
      starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      starGeometry.setAttribute('random', new THREE.BufferAttribute(randoms, 1));
      starGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
      const starMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 1.0 },
          color: { value: new THREE.Color(0xffffff) },
          globalOpacity: { value: 0.0 }
        },
        vertexShader: `attribute float random;attribute float size;uniform float time;varying float vRandom;void main() {vRandom = random;vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);gl_PointSize = size * (1.5 + sin(time * 0.5 + random * 6.28) * 0.5);gl_Position = projectionMatrix * mvPosition;}`,
        fragmentShader: `uniform vec3 color;uniform float time;uniform float globalOpacity;varying float vRandom;void main() {float dist = distance(gl_PointCoord, vec2(0.5));float opacity = 1.0 - smoothstep(0.4, 0.5, dist);float twinkle = 0.5 * (1.0 + sin(time * (2.0 + vRandom * 3.0) + vRandom * 6.28));float finalOpacity = (0.5 + vRandom * 0.5) * twinkle * globalOpacity * opacity;gl_FragColor = vec4(color, finalOpacity);}`,
        transparent: true, blending: THREE.AdditiveBlending, depthWrite: false
      });
      return new THREE.Points(starGeometry, starMaterial);
    };
    starsRef.current.far = createStars(5000, 0.5, 1000);
    starsRef.current.near = createStars(2000, 1.0, 500);
    scene.add(starsRef.current.far);
    scene.add(starsRef.current.near);

    // Lights
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
    scene.add(hemisphereLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);
    
    // Bubbles
    const createBubbleMaterial = (color: number) => new THREE.ShaderMaterial({
        uniforms: {
            color: { value: new THREE.Color(color) },
            uDaylight: { value: 0.0 }
        },
        vertexShader: `
            varying vec3 vNormal;
            void main() {
                vNormal = normalize(normalMatrix * normal);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform vec3 color;
            uniform float uDaylight;
            varying vec3 vNormal;
            void main() {
                float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
                vec3 nightColor = color * 0.9 + intensity * 0.3;
                vec3 dayColor = color * 0.7 + intensity * 0.1;
                vec3 finalColor = mix(nightColor, dayColor, uDaylight);
                float opacity = 0.3 + pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0) * 0.25;
                gl_FragColor = vec4(finalColor, opacity);
            }
        `,
        transparent: true,
        blending: THREE.NormalBlending
    });

    const bubbleGeometries = [new THREE.SphereGeometry(15, 32, 16), new THREE.SphereGeometry(12, 16, 8), new THREE.SphereGeometry(18, 8, 6)];
    const candyColors = [0xB4A0E5, 0xF7C5CC, 0x98D7C2, 0x94B4C3];
    for (let i = 0; i < 15; i++) {
        const geometry = bubbleGeometries[i % bubbleGeometries.length];
        const material = createBubbleMaterial(candyColors[i % candyColors.length]);
        const shape = new THREE.Mesh(geometry, material);
        const phi = Math.random()*Math.PI*2; const theta=Math.acos((Math.random()*2)-1); const radius=Math.random()*400+400;
        shape.position.setFromSphericalCoords(radius, phi, theta);
        shape.userData = { rotationSpeed: new THREE.Vector3((Math.random()-0.5)*0.005, (Math.random()-0.5)*0.005, (Math.random()-0.5)*0.005), velocity: new THREE.Vector3(), acceleration: new THREE.Vector3() };
        bubblesRef.current.push(shape);
        scene.add(shape);
    }
    const createGiantBubble = (size: number, color: number, position: THREE.Vector3) => {
        const bubble = new THREE.Mesh(new THREE.SphereGeometry(size, 32, 16), createBubbleMaterial(color));
        bubble.position.copy(position);
        bubble.userData = { rotationSpeed: new THREE.Vector3((Math.random()-0.5)*0.001, (Math.random()-0.5)*0.001, (Math.random()-0.5)*0.001), velocity: new THREE.Vector3(), acceleration: new THREE.Vector3() };
        bubblesRef.current.push(bubble);
        scene.add(bubble);
    }
    createGiantBubble(150, candyColors[0], new THREE.Vector3(300, 200, -800));
    createGiantBubble(120, candyColors[1], new THREE.Vector3(-400, -150, -700));
    createGiantBubble(100, candyColors[2], new THREE.Vector3(500, -50, -900));
    createGiantBubble(80, candyColors[3], new THREE.Vector3(-200, 100, -600));
    createGiantBubble(180, candyColors[0], new THREE.Vector3(-550, 250, -1000));
    createGiantBubble(90, candyColors[1], new THREE.Vector3(100, -250, -750));
    createGiantBubble(130, candyColors[2], new THREE.Vector3(600, 150, -950));


    // Animation loop
    let animationFrameId: number;
    const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();
        
        if (cameraRef.current) {
            cameraRef.current.position.z += (targetCameraZ - cameraRef.current.position.z) * 0.05;
        }
        
        if(starsRef.current.far) (starsRef.current.far.material as THREE.ShaderMaterial).uniforms.time.value = elapsedTime;
        if(starsRef.current.near) (starsRef.current.near.material as THREE.ShaderMaterial).uniforms.time.value = elapsedTime;

        const maxSpeed = 0.3;
        bubblesRef.current.forEach(shape => {
            shape.rotation.x += shape.userData.rotationSpeed.x;
            shape.rotation.y += shape.userData.rotationSpeed.y;
            shape.rotation.z += shape.userData.rotationSpeed.z;

            const wanderForce = new THREE.Vector3((Math.random()-0.5)*0.003, (Math.random()-0.5)*0.003, (Math.random()-0.5)*0.003);
            shape.userData.acceleration.add(wanderForce);

            if (shape.position.length() > 800) {
                const steerToCenter = new THREE.Vector3().sub(shape.position).normalize().multiplyScalar(-0.015);
                shape.userData.acceleration.add(steerToCenter);
            }

            shape.userData.velocity.add(shape.userData.acceleration);
            shape.userData.velocity.clampLength(0, maxSpeed);
            shape.position.add(shape.userData.velocity);
            shape.userData.acceleration.set(0, 0, 0);
        });

        if (rendererRef.current && sceneRef.current && cameraRef.current) {
            rendererRef.current.render(sceneRef.current, cameraRef.current);
        }
    };
    animate();

    // Mouse Controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const onMouseDown = (event: MouseEvent) => { isDragging = true; container.style.cursor = 'grabbing'; previousMousePosition = { x: event.clientX, y: event.clientY }; };
    const onMouseUp = () => { isDragging = false; container.style.cursor = 'default'; };
    const onMouseMove = (event: MouseEvent) => {
        if (!isDragging || !cameraRef.current) return;
        const deltaMove = { x: event.clientX - previousMousePosition.x, y: event.clientY - previousMousePosition.y };
        cameraRef.current.rotation.y += -deltaMove.x * 0.005;
        cameraRef.current.rotation.x += -deltaMove.y * 0.005;
        cameraRef.current.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, cameraRef.current.rotation.x));
        cameraRef.current.rotation.order = "YXZ";
        previousMousePosition = { x: event.clientX, y: event.clientY };
    };
    
    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseUp);

    // Resize handler
    const handleResize = () => {
        if (cameraRef.current && rendererRef.current) {
            cameraRef.current.aspect = window.innerWidth / window.innerHeight;
            cameraRef.current.updateProjectionMatrix();
            rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        }
    };
    window.addEventListener('resize', handleResize);

    return () => {
        window.cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        container.removeEventListener("mousedown", onMouseDown);
        window.removeEventListener("mouseup", onMouseUp);
        container.removeEventListener("mousemove", onMouseMove);
        container.removeEventListener("mouseleave", onMouseUp);
        if (rendererRef.current?.domElement) {
          container.removeChild(rendererRef.current.domElement);
        }
    };
  }, []);

  useEffect(() => {
    if (!sceneRef.current) return;
    const bgCanvas = document.createElement("canvas");
    bgCanvas.width = 2; bgCanvas.height = 512;
    const bgContext = bgCanvas.getContext("2d")!;
    const gradient = bgContext.createLinearGradient(0, 0, 0, bgCanvas.height);
    gradient.addColorStop(0, timeStyles.sky.top);
    gradient.addColorStop(0.33, timeStyles.sky.middle1);
    gradient.addColorStop(0.66, timeStyles.sky.middle2);
    gradient.addColorStop(1, timeStyles.sky.bottom);
    bgContext.fillStyle = gradient;
    bgContext.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
    
    sceneRef.current.background = new THREE.CanvasTexture(bgCanvas);

    if(starsRef.current.far) (starsRef.current.far.material as THREE.ShaderMaterial).uniforms.globalOpacity.value = timeStyles.isNight ? 1.0 : 0.0;
    if(starsRef.current.near) (starsRef.current.near.material as THREE.ShaderMaterial).uniforms.globalOpacity.value = timeStyles.isNight ? 0.8 : 0.0;

    bubblesRef.current.forEach(bubble => {
        (bubble.material as THREE.ShaderMaterial).uniforms.uDaylight.value = timeStyles.isNight ? 0.0 : 1.0;
    });

  }, [timeStyles]);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default React.memo(ThreeScene);
