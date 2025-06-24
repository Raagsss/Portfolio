import React, { useRef, useEffect } from 'react';

const LightRaysBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let rays = [];
    const numRays = 8;
    const center = { x: width / 2, y: height / 2 };

    // Helper to resize canvas
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize rays
    const initRays = () => {
      rays = [];
      for (let i = 0; i < numRays; i++) {
        const angle = (Math.PI * 2 * i) / numRays + Math.random() * 0.2;
        rays.push({
          angle,
          speed: 0.002 + Math.random() * 0.003,
          width: 80 + Math.random() * 60,
          alpha: 0.08 + Math.random() * 0.07,
          length: height * (0.7 + Math.random() * 0.3),
          offset: Math.random() * 1000,
        });
      }
    };
    initRays();

    // Animation loop
    const animate = (t) => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < rays.length; i++) {
        const ray = rays[i];
        // Animate angle for subtle movement
        const dynamicAngle = ray.angle + Math.sin(t * ray.speed + ray.offset) * 0.1;
        const x1 = center.x;
        const y1 = center.y;
        const x2 = center.x + Math.cos(dynamicAngle) * ray.length;
        const y2 = center.y + Math.sin(dynamicAngle) * ray.length;
        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0, `rgba(255, 255, 255, ${ray.alpha})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.strokeStyle = grad;
        ctx.lineWidth = ray.width;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();
      }
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default LightRaysBackground; 