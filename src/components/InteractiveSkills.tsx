import { useEffect, useRef } from "react";

const InteractiveSkills = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number = 0;
    let nodes: Node[] = [];
    const mouse = { x: -1000, y: -1000, radius: 150 };

    const setSize = () => {
      canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
      init();
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const onMouseLeave = () => { mouse.x = -1000; mouse.y = -1000; };

    window.addEventListener("resize", setSize);
    canvas.parentElement?.addEventListener("mousemove", onMouseMove);
    canvas.parentElement?.addEventListener("mouseleave", onMouseLeave);

    class Node {
      x: number; y: number; vx: number; vy: number;
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        // Light push from mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          this.x -= (dx / distance) * 10;
          this.y -= (dy / distance) * 10;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgb(195, 255, 0)";
        ctx.fill();
      }
    }

    const init = () => {
      nodes = [];
      const numNodes = (canvas.width * canvas.height) / 5000;
      for (let i = 0; i < numNodes; i++) {
        nodes.push(new Node(Math.random() * canvas.width, Math.random() * canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < nodes.length; i++) {
        nodes[i].update();
        nodes[i].draw();

        // Draw Circuit-like Right Angle Connections
        for (let j = i; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            const opacity = 1 - distance / 100;
            ctx.strokeStyle = `rgba(168, 85, 247, ${opacity * 0.7})`; // Cyber purple traces
            ctx.lineWidth = 1.2;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[i].x, nodes[j].y); // Right angle turn
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    setSize();
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { if (!animationFrameId) animate(); } 
      else { if (animationFrameId) { cancelAnimationFrame(animationFrameId); animationFrameId = 0; } }
    }, { threshold: 0.01 });
    observer.observe(canvas);

    return () => {
      window.removeEventListener("resize", setSize); canvas.parentElement?.removeEventListener("mousemove", onMouseMove); canvas.parentElement?.removeEventListener("mouseleave", onMouseLeave); observer.disconnect(); if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
};
export default InteractiveSkills;