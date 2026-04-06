import { useEffect, useRef } from "react";

const InteractiveContact = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number = 0;
    let stars: Star[] = [];
    const mouse = { x: -1000, y: -1000 };

    // Target center coordinates for warp effect
    let cx = canvas.width / 2;
    let cy = canvas.height / 2;
    let targetCx = cx;
    let targetCy = cy;

    const setSize = () => {
      canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
      targetCx = canvas.width / 2;
      targetCy = canvas.height / 2;
      init();
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      // Shift warp center slightly opposite to mouse movement
      targetCx = canvas.width / 2 - (mouse.x - canvas.width / 2) * 0.3;
      targetCy = canvas.height / 2 - (mouse.y - canvas.height / 2) * 0.3;
    };

    const onMouseLeave = () => {
      targetCx = canvas.width / 2;
      targetCy = canvas.height / 2;
    };

    window.addEventListener("resize", setSize);
    canvas.parentElement?.addEventListener("mousemove", onMouseMove);
    canvas.parentElement?.addEventListener("mouseleave", onMouseLeave);

    class Star {
      x: number; y: number; z: number;
      constructor() {
        this.x = (Math.random() - 0.5) * 2500;
        this.y = (Math.random() - 0.5) * 2500;
        this.z = Math.random() * 2000;
      }
      update() {
        this.z -= 6; // Warp speed
        if (this.z <= 0) {
          this.x = (Math.random() - 0.5) * 2500;
          this.y = (Math.random() - 0.5) * 2500;
          this.z = 2000;
        }
      }
      draw() {
        if (!ctx) return;
        const focalLength = canvas.width;
        const sx = (this.x / this.z) * focalLength + cx;
        const sy = (this.y / this.z) * focalLength + cy;
        const radius = Math.max(0.5, (2000 - this.z) / 400);
        const opacity = Math.min(1, (2000 - this.z) / 1000);

        ctx.beginPath();
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 247, ${opacity})`; // Cyber cyan stars
        ctx.fill();
      }
    }

    const init = () => {
      stars = [];
      const numStars = (canvas.width * canvas.height) / 500;
      for (let i = 0; i < numStars; i++) stars.push(new Star());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cx += (targetCx - cx) * 0.05; // smooth damping
      cy += (targetCy - cy) * 0.05;
      for (let i = 0; i < stars.length; i++) { stars[i].update(); stars[i].draw(); }
      animationFrameId = requestAnimationFrame(animate);
    };

    setSize();
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { if (!animationFrameId) animate(); } 
      else { if (animationFrameId) { cancelAnimationFrame(animationFrameId); animationFrameId = 0; } }
    }, { threshold: 0.01 });
    observer.observe(canvas);

    return () => { window.removeEventListener("resize", setSize); canvas.parentElement?.removeEventListener("mousemove", onMouseMove); canvas.parentElement?.removeEventListener("mouseleave", onMouseLeave); observer.disconnect(); if (animationFrameId) cancelAnimationFrame(animationFrameId); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
};
export default InteractiveContact;