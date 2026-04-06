import { useEffect, useRef } from "react";

const InteractiveProjects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number = 0;
    let grid: GridNode[] = [];
    let cols = 0;
    let rows = 0;

    const mouse = { x: -1000, y: -1000, radius: 350 };

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

    class GridNode {
      x: number; y: number; baseX: number; baseY: number;
      targetX: number; targetY: number;
      opacity: number; targetOpacity: number;
      size: number; targetSize: number;

      constructor(x: number, y: number) {
        this.baseX = x;
        this.baseY = y;
        this.x = x;
        this.y = y;
        this.targetX = x;
        this.targetY = y;
        this.opacity = 0.05;
        this.targetOpacity = 0.05;
        this.size = 1.5;
        this.targetSize = 1.5;
      }

      update() {
        const dx = mouse.x - this.baseX;
        const dy = mouse.y - this.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius && mouse.x !== -1000) {
          const force = (mouse.radius - distance) / mouse.radius;
          this.targetX = this.baseX - (dx / distance) * force * 50; // Push force
          this.targetY = this.baseY - (dy / distance) * force * 50;
          this.targetSize = 1.5 + force * 2.5;
          this.targetOpacity = 0.05 + force * 0.8;
        } else {
          this.targetX = this.baseX;
          this.targetY = this.baseY;
          this.targetSize = 1.5;
          this.targetOpacity = 0.05;
        }

        // Smooth Easing
        this.x += (this.targetX - this.x) * 0.1;
        this.y += (this.targetY - this.y) * 0.1;
        this.size += (this.targetSize - this.size) * 0.1;
        this.opacity += (this.targetOpacity - this.opacity) * 0.1;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(0, 255, 247, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const drawLine = (node1: GridNode, node2: GridNode) => {
      const op = (node1.opacity + node2.opacity) / 2 - 0.1;
      if (op > 0.02 && ctx) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 255, 247, ${op})`;
        ctx.lineWidth = 1;
        ctx.moveTo(node1.x, node1.y);
        ctx.lineTo(node2.x, node2.y);
        ctx.stroke();
      }
    };

    const init = () => {
      grid = [];
      const spacing = 45;
      cols = Math.ceil(canvas.width / spacing) + 1;
      rows = Math.ceil(canvas.height / spacing) + 1;
      const offsetX = (canvas.width - (cols - 1) * spacing) / 2;
      const offsetY = (canvas.height - (rows - 1) * spacing) / 2;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          grid.push(new GridNode(offsetX + c * spacing, offsetY + r * spacing));
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < grid.length; i++) {
        grid[i].update();
        grid[i].draw();
      }

      // Draw Mesh Connections
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const i = c * rows + r;
          const node = grid[i];

          if (c < cols - 1) {
            const right = grid[(c + 1) * rows + r];
            if (right) drawLine(node, right);
          }
          if (r < rows - 1) {
            const down = grid[c * rows + (r + 1)];
            if (down) drawLine(node, down);
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
      window.removeEventListener("resize", setSize);
      canvas.parentElement?.removeEventListener("mousemove", onMouseMove);
      canvas.parentElement?.removeEventListener("mouseleave", onMouseLeave);
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
};
export default InteractiveProjects;