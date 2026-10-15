import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Hero3DBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsSupported(false);
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Scene & Fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.04);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 3.2, 9.5);

    // Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setIsSupported(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.inset = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    container.appendChild(renderer.domElement);

    // Master Group for Buildings & Elements
    const cityGroup = new THREE.Group();
    // Shift slightly right on desktop so it balances the left-aligned hero typography
    cityGroup.position.set(window.innerWidth > 1024 ? 2.2 : 0, 0, 0);
    scene.add(cityGroup);

    // 1. Central Hero Tower (Low-poly modern skyscraper)
    const towerGeo = new THREE.BoxGeometry(2.4, 5.6, 2.4);
    const towerMat = new THREE.MeshStandardMaterial({
      color: 0x080c14,
      roughness: 0.25,
      metalness: 0.8,
      wireframe: false,
    });
    const tower = new THREE.Mesh(towerGeo, towerMat);
    tower.position.y = 2.8;
    cityGroup.add(tower);

    // Wireframe edges overlay for crisp technical aesthetic
    const towerEdges = new THREE.EdgesGeometry(towerGeo);
    const lineMat = new THREE.LineBasicMaterial({ color: 0x334460, transparent: true, opacity: 0.6 });
    const towerWire = new THREE.LineSegments(towerEdges, lineMat);
    towerWire.position.copy(tower.position);
    cityGroup.add(towerWire);

    // 2. Penthouse Glass Crown
    const crownGeo = new THREE.BoxGeometry(1.8, 1.2, 1.8);
    const crownMat = new THREE.MeshStandardMaterial({
      color: 0x141f33,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.85,
    });
    const crown = new THREE.Mesh(crownGeo, crownMat);
    crown.position.y = 6.2;
    cityGroup.add(crown);

    const crownEdges = new THREE.EdgesGeometry(crownGeo);
    const crownLineMat = new THREE.LineBasicMaterial({ color: 0xF5B544, transparent: true, opacity: 0.8 });
    const crownWire = new THREE.LineSegments(crownEdges, crownLineMat);
    crownWire.position.copy(crown.position);
    cityGroup.add(crownWire);

    // 3. Spire
    const spireGeo = new THREE.CylinderGeometry(0.03, 0.08, 1.6, 6);
    const spireMat = new THREE.MeshBasicMaterial({ color: 0xF5B544 });
    const spire = new THREE.Mesh(spireGeo, spireMat);
    spire.position.y = 7.6;
    cityGroup.add(spire);

    // 4. Glowing Amber Windows on Hero Tower
    const winGeo = new THREE.PlaneGeometry(0.18, 0.24);
    const winLitMat = new THREE.MeshBasicMaterial({ color: 0xF5B544 });
    const winCyanMat = new THREE.MeshBasicMaterial({ color: 0x5eead4 });
    const winDarkMat = new THREE.MeshBasicMaterial({ color: 0x05080f });

    const windows = new THREE.Group();
    for (let floor = 0; floor < 12; floor++) {
      for (let c = -3; c <= 3; c++) {
        const isLit = (floor * 5 + c) % 3 === 0 || (floor === 9 && c === 1);
        const isCyan = (floor * 7 + c) % 11 === 0;
        const mat = isLit ? (isCyan ? winCyanMat : winLitMat) : winDarkMat;
        const win = new THREE.Mesh(winGeo, mat);
        win.position.set(c * 0.3, 0.6 + floor * 0.42, 1.21);
        windows.add(win);
      }
    }
    cityGroup.add(windows);

    // 5. Flanking Secondary Towers for Skyline Depth
    const flank1Geo = new THREE.BoxGeometry(1.6, 3.8, 1.6);
    const flank1Mat = new THREE.MeshStandardMaterial({ color: 0x060910, roughness: 0.4, metalness: 0.7 });
    const flank1 = new THREE.Mesh(flank1Geo, flank1Mat);
    flank1.position.set(-2.6, 1.9, -1.2);
    cityGroup.add(flank1);

    const flank1Wire = new THREE.LineSegments(
      new THREE.EdgesGeometry(flank1Geo),
      new THREE.LineBasicMaterial({ color: 0x223048, transparent: true, opacity: 0.5 })
    );
    flank1Wire.position.copy(flank1.position);
    cityGroup.add(flank1Wire);

    const flank2Geo = new THREE.BoxGeometry(2.0, 4.4, 2.0);
    const flank2 = new THREE.Mesh(flank2Geo, flank1Mat);
    flank2.position.set(2.8, 2.2, -1.5);
    cityGroup.add(flank2);

    const flank2Wire = new THREE.LineSegments(
      new THREE.EdgesGeometry(flank2Geo),
      new THREE.LineBasicMaterial({ color: 0x223048, transparent: true, opacity: 0.5 })
    );
    flank2Wire.position.copy(flank2.position);
    cityGroup.add(flank2Wire);

    // 6. Orbiting 3D Message Bubbles
    const createBubbleSprite = (text: string, subtext: string, isAccent: boolean) => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 140;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Dark minimalist card with thin border
        ctx.fillStyle = isAccent ? 'rgba(15, 23, 42, 0.95)' : 'rgba(5, 5, 5, 0.92)';
        ctx.beginPath();
        ctx.roundRect(8, 8, 496, 124, 16);
        ctx.fill();

        ctx.strokeStyle = isAccent ? '#2BB58C' : '#F5B544';
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.font = 'bold 24px "Inter", sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'left';
        ctx.fillText(text, 30, 52);

        ctx.font = '500 18px "Courier New", monospace';
        ctx.fillStyle = isAccent ? '#34d399' : '#F5B544';
        ctx.fillText(subtext, 30, 92);
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(3.2, 0.88, 1);
      return sprite;
    };

    const bubbles = [
      {
        sprite: createBubbleSprite('WhatsApp Lead // 11:02 PM', 'Downtown 2-Bed Inquiry', false),
        radius: 3.4,
        speed: 0.0035,
        angle: 0.2,
        y: 4.8,
      },
      {
        sprite: createBubbleSprite('⚡ Instant AI Qualification', 'Budget: AED 3.8M · 30 Days', true),
        radius: 3.8,
        speed: 0.0045,
        angle: 2.3,
        y: 3.2,
      },
      {
        sprite: createBubbleSprite('✓ Synced to CRM // 11:04 PM', 'Senior Agent Hand-off Ready', false),
        radius: 3.2,
        speed: 0.003,
        angle: 4.4,
        y: 1.8,
      },
    ];

    bubbles.forEach((b) => cityGroup.add(b.sprite));

    // 7. Ambient Particle Field (City Night Dust / Stars)
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 24;
      particlePos[i + 1] = Math.random() * 12;
      particlePos[i + 2] = (Math.random() - 0.5) * 16 - 2;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xF5B544,
      size: 0.06,
      transparent: true,
      opacity: 0.45,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.HemisphereLight(0x1B2A4A, 0x000000, 1.2);
    scene.add(ambientLight);

    const warmKeyLight = new THREE.DirectionalLight(0xF5B544, 2.5);
    warmKeyLight.position.set(6, 8, 6);
    scene.add(warmKeyLight);

    const coolRimLight = new THREE.DirectionalLight(0x4a72a8, 1.4);
    coolRimLight.position.set(-6, 4, -4);
    scene.add(coolRimLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Window Resize
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      cityGroup.position.set(window.innerWidth > 1024 ? 2.2 : 0, 0, 0);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Gentle floating rotation
      cityGroup.rotation.y = Math.sin(elapsed * 0.25) * 0.12 + mouseX * 0.15;
      cityGroup.rotation.x = mouseY * 0.08;

      // Update orbiting message bubbles
      bubbles.forEach((b) => {
        b.angle += b.speed;
        b.sprite.position.x = Math.cos(b.angle) * b.radius;
        b.sprite.position.z = Math.sin(b.angle) * b.radius;
        b.sprite.position.y = b.y + Math.sin(elapsed * 1.6 + b.angle) * 0.18;
      });

      // Twinkle particle dust
      particles.rotation.y = elapsed * 0.02;

      // Smooth camera drift
      camera.position.x = THREE.MathUtils.damp(camera.position.x, mouseX * 0.4, 3, delta);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, 3.2 - mouseY * 0.3, 3, delta);
      camera.lookAt(cityGroup.position.x, 3.2, 0);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      towerGeo.dispose();
      towerMat.dispose();
      towerEdges.dispose();
      lineMat.dispose();
      crownGeo.dispose();
      crownMat.dispose();
      crownEdges.dispose();
      crownLineMat.dispose();
      spireGeo.dispose();
      spireMat.dispose();
      winGeo.dispose();
      winLitMat.dispose();
      winCyanMat.dispose();
      winDarkMat.dispose();
      flank1Geo.dispose();
      flank1Mat.dispose();
      flank2Geo.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      bubbles.forEach((b) => {
        b.sprite.material.map?.dispose();
        b.sprite.material.dispose();
      });
    };
  }, []);

  if (!isSupported) return null;

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-90"
      aria-hidden="true"
    />
  );
};
