import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Hero3DBuilding: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    // Check reduced motion & WebGL support
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsSupported(false);
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight || 500;

    // Create scene, camera, renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0B1220, 0.05);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(4, 3.5, 7.5);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch {
      setIsSupported(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // Group for building assembly (3-12 parts)
    const buildingGroup = new THREE.Group();
    scene.add(buildingGroup);

    // 1. Main Tower Body
    const towerGeo = new THREE.BoxGeometry(2, 4.5, 2);
    const towerMat = new THREE.MeshStandardMaterial({
      color: 0x111b2e,
      roughness: 0.35,
      metalness: 0.25,
    });
    const tower = new THREE.Mesh(towerGeo, towerMat);
    tower.position.y = 2.25;
    tower.castShadow = true;
    tower.receiveShadow = true;
    buildingGroup.add(tower);

    // 2. Penthouse Glass Crown
    const crownGeo = new THREE.BoxGeometry(1.6, 0.8, 1.6);
    const crownMat = new THREE.MeshStandardMaterial({
      color: 0x1B2A4A,
      roughness: 0.1,
      metalness: 0.85,
      transparent: true,
      opacity: 0.9,
    });
    const crown = new THREE.Mesh(crownGeo, crownMat);
    crown.position.y = 4.8;
    crown.castShadow = true;
    buildingGroup.add(crown);

    // 3. Spire / Antenna
    const spireGeo = new THREE.CylinderGeometry(0.04, 0.06, 1.2, 8);
    const spireMat = new THREE.MeshStandardMaterial({ color: 0xF5B544, metalness: 0.9, roughness: 0.2 });
    const spire = new THREE.Mesh(spireGeo, spireMat);
    spire.position.y = 5.7;
    buildingGroup.add(spire);

    // 4. Ground Podium / Lobby
    const podiumGeo = new THREE.BoxGeometry(2.8, 0.5, 2.8);
    const podiumMat = new THREE.MeshStandardMaterial({ color: 0x0e1726, roughness: 0.6, metalness: 0.1 });
    const podium = new THREE.Mesh(podiumGeo, podiumMat);
    podium.position.y = 0.25;
    podium.receiveShadow = true;
    buildingGroup.add(podium);

    // 5. Architectural Vertical Fins (Outer facade detail)
    const finGeo = new THREE.BoxGeometry(0.05, 4.5, 0.15);
    const finMat = new THREE.MeshStandardMaterial({ color: 0x223555, roughness: 0.4, metalness: 0.5 });
    for (let i = -3; i <= 3; i++) {
      const finX = new THREE.Mesh(finGeo, finMat);
      finX.position.set(i * 0.28, 2.25, 1.05);
      buildingGroup.add(finX);

      const finZ = new THREE.Mesh(finGeo, finMat);
      finZ.position.set(1.05, 2.25, i * 0.28);
      finZ.rotation.y = Math.PI / 2;
      buildingGroup.add(finZ);
    }

    // 6. Glowing Amber Windows (Procedural grid)
    const windowGeo = new THREE.PlaneGeometry(0.12, 0.18);
    const windowMatLit = new THREE.MeshBasicMaterial({ color: 0xF5B544 });
    const windowMatDark = new THREE.MeshBasicMaterial({ color: 0x090f1b });

    const windowsGroup = new THREE.Group();
    for (let floor = 0; floor < 10; floor++) {
      for (let col = -3; col <= 3; col++) {
        // 45% of windows lit at 11 PM
        const isLit = (floor * 7 + col) % 3 === 0 || (floor === 8 && col === 1);
        const win = new THREE.Mesh(windowGeo, isLit ? windowMatLit : windowMatDark);
        win.position.set(col * 0.24, 0.7 + floor * 0.4, 1.02);
        windowsGroup.add(win);
      }
    }
    buildingGroup.add(windowsGroup);

    // 7. Ground Contact Shadow Plane
    const shadowGeo = new THREE.PlaneGeometry(8, 8);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.4,
    });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = 0.01;
    scene.add(shadowPlane);

    // Orbiting message bubbles
    // Create canvas sprites for clean readable text bubbles
    const createBubbleSprite = (text: string, bgColor: string, textColor: string) => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 160;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Bubble rounded rectangle
        ctx.fillStyle = bgColor;
        ctx.beginPath();
        ctx.roundRect(10, 10, 492, 140, 24);
        ctx.fill();

        ctx.strokeStyle = '#F5B544';
        ctx.lineWidth = 4;
        ctx.stroke();

        ctx.font = 'bold 26px "Public Sans", sans-serif';
        ctx.fillStyle = textColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, 256, 80);
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(2.4, 0.75, 1);
      return sprite;
    };

    const bubbles: { sprite: THREE.Sprite; radius: number; speed: number; angle: number; y: number }[] = [
      {
        sprite: createBubbleSprite('🌙 11:02 PM: 2-bed in Downtown?', '#1B2A4A', '#FFFFFF'),
        radius: 2.8,
        speed: 0.005,
        angle: 0,
        y: 2.8,
      },
      {
        sprite: createBubbleSprite('⚡ Instant AI: Budget & timeline?', '#2BB58C', '#FFFFFF'),
        radius: 2.9,
        speed: 0.006,
        angle: 2.1,
        y: 3.8,
      },
      {
        sprite: createBubbleSprite('✓ Synced to CRM: AED 3.8M lead', '#0B1220', '#F5B544'),
        radius: 2.7,
        speed: 0.004,
        angle: 4.2,
        y: 1.8,
      },
    ];

    bubbles.forEach((b) => scene.add(b.sprite));

    // Studio Lighting
    const ambientLight = new THREE.HemisphereLight(0x1B2A4A, 0x0B1220, 0.8);
    scene.add(ambientLight);

    const warmKeyLight = new THREE.DirectionalLight(0xF5B544, 2.0);
    warmKeyLight.position.set(5, 8, 5);
    warmKeyLight.castShadow = true;
    warmKeyLight.shadow.mapSize.width = 1024;
    warmKeyLight.shadow.mapSize.height = 1024;
    warmKeyLight.shadow.bias = -0.0005;
    scene.add(warmKeyLight);

    const coolRimLight = new THREE.DirectionalLight(0x5078a5, 1.2);
    coolRimLight.position.set(-5, 4, -4);
    scene.add(coolRimLight);

    // Scroll-based camera drift
    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight || 500;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Gentle rotation of the building
      buildingGroup.rotation.y = Math.sin(elapsedTime * 0.2) * 0.15 - 0.2;

      // Update orbiting message bubbles
      bubbles.forEach((b) => {
        b.angle += b.speed;
        b.sprite.position.x = Math.cos(b.angle) * b.radius;
        b.sprite.position.z = Math.sin(b.angle) * b.radius;
        b.sprite.position.y = b.y + Math.sin(elapsedTime * 1.5 + b.angle) * 0.15;
      });

      // Camera drift tied to scroll
      const targetCamY = 3.5 - Math.min(scrollY * 0.003, 1.5);
      const targetCamZ = 7.5 + Math.min(scrollY * 0.004, 2.0);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, targetCamY, 3, delta);
      camera.position.z = THREE.MathUtils.damp(camera.position.z, targetCamZ, 3, delta);
      camera.lookAt(0, 2.5, 0);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      towerGeo.dispose();
      towerMat.dispose();
      crownGeo.dispose();
      crownMat.dispose();
      spireGeo.dispose();
      spireMat.dispose();
      podiumGeo.dispose();
      podiumMat.dispose();
      finGeo.dispose();
      finMat.dispose();
      windowGeo.dispose();
      windowMatLit.dispose();
      windowMatDark.dispose();
      shadowGeo.dispose();
      shadowMat.dispose();
      bubbles.forEach((b) => {
        b.sprite.material.map?.dispose();
        b.sprite.material.dispose();
      });
    };
  }, []);

  if (!isSupported) {
    // Elegant CSS Fallback for reduced motion or unsupported WebGL
    return (
      <div className="relative w-full h-[460px] flex items-center justify-center p-8 bg-slate-900/50 rounded-2xl border border-slate-800">
        <div className="relative w-48 h-72 bg-[#111b2e] border-t-4 border-[#F5B544] rounded-t shadow-2xl flex flex-col justify-end p-4">
          <div className="grid grid-cols-4 gap-2 mb-4">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className={`w-6 h-6 rounded-sm ${i % 3 === 0 ? 'bg-[#F5B544] shadow-sm shadow-[#F5B544]/50' : 'bg-slate-800'}`}
              />
            ))}
          </div>
          <div className="text-center py-2 bg-[#1B2A4A] rounded text-[11px] font-mono text-white">
            11 PM Headquarters
          </div>
        </div>
        <div className="absolute top-12 right-12 bg-[#2BB58C] text-slate-950 font-bold text-xs px-3 py-1.5 rounded-full shadow-lg">
          ✓ Instant 11 PM Response
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="w-full h-[440px] lg:h-[540px] relative select-none"
      aria-label="3D model of a real estate tower with orbiting late-night WhatsApp inquiry bubbles"
    />
  );
};
