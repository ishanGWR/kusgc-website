"use client";

import React, { useRef, useEffect } from "react";

// Minimal Fluid Simulation Logic (Adapted and simplified for efficiency)
class FluidSimulation {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private width: number;
    private height: number;
    private grid: Float32Array;
    private prevGrid: Float32Array;
    private numParticles: number = 20000;
    private mouseX: number = 0;
    private mouseY: number = 0;
    private isMouseDown: boolean = false;
    private colorOffset: number = 0;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d")!;
        this.width = canvas.width;
        this.height = canvas.height;
        this.grid = new Float32Array(this.width * this.height);
        this.prevGrid = new Float32Array(this.width * this.height);
        this.init();
        this.animate = this.animate.bind(this);
    }

    private init() {
        this.resize();
        window.addEventListener("resize", () => this.resize());
        window.addEventListener("mousemove", (e) => this.handleMouseMove(e));
        window.addEventListener("mousedown", () => this.isMouseDown = true);
        window.addEventListener("mouseup", () => this.isMouseDown = false);
    }

    private resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
        this.grid = new Float32Array(this.width * this.height);
        this.prevGrid = new Float32Array(this.width * this.height);
        this.numParticles = Math.min(20000, Math.floor((this.width * this.height) / 10)); // Adjust based on screen size
    }

    private handleMouseMove(e: MouseEvent) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
    }

    public animate() {
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Gradual fade for trails
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.colorOffset += 0.5; // Slowly change color over time

        for (let i = 0; i < this.numParticles; i++) {
            const x = Math.random() * this.width;
            const y = Math.random() * this.height;

            const dx = x - this.mouseX;
            const dy = y - this.mouseY;
            const distSq = dx * dx + dy * dy;
            const radius = 100;
            const radiusSq = radius * radius;

            let force = 0;
            if (distSq < radiusSq) {
                force = (radiusSq - distSq) / radiusSq;
                if (this.isMouseDown) force *= 3; // Stronger force on click
            }

            const angle = Math.atan2(dy, dx) + force * Math.PI * 0.1;
            const newX = x + Math.cos(angle) * (1 + force * 2);
            const newY = y + Math.sin(angle) * (1 + force * 2);

            // Draw a tiny particle with dynamic color
            const hue = (this.colorOffset + distSq * 0.005) % 360; // Vary color with distance from mouse
            this.ctx.fillStyle = `hsla(${hue}, 80%, 60%, ${0.3 + force * 0.5})`; // Color trails
            this.ctx.fillRect(newX, newY, 1.5, 1.5); // Simple point particle
        }

        requestAnimationFrame(this.animate);
    }
}

export default function FluidBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;
        const fluidSim = new FluidSimulation(canvasRef.current);
        fluidSim.animate();

        return () => {
            // Clean up event listeners or animation frames if needed
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 h-full w-full opacity-60" // Subtle opacity
        />
    );
}