'use client';

import { useRef, useEffect, useCallback } from 'react';
import { FPS, X_STEPS, Y_STEPS } from '@/lib/constants';

function ImageGazer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastFrameRef = useRef(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 5.2;
    }
  }, []);

  const handlePointerMove = useCallback((e: MouseEvent) => {
    const now = performance.now();
    if (now - lastFrameRef.current < 1000 / FPS) return;

    lastFrameRef.current = now;

    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Get the container's position on screen
    const containerRect = container.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;
    const containerCenterY = containerRect.top + containerRect.height / 2;

    // Calculate direction from container center to mouse
    const deltaX = e.clientX - containerCenterX;
    const deltaY = e.clientY - containerCenterY;

    // Normalize based on a fixed distance for smooth viewport tracking
    const maxDistance = 1000; // pixels from container center to reach extreme
    const normalizedX = Math.max(-1, Math.min(1, deltaX / maxDistance));
    const normalizedY = Math.max(-1, Math.min(1, deltaY / maxDistance));

    // Map to indices (0 to X_STEPS-1, 0 to Y_STEPS-1)
    const videoXIndex = Math.round(((normalizedX + 1) / 2) * (X_STEPS - 2)); // Can't go above 23
    const videoYIndex = Math.round(((normalizedY + 1) / 2) * (Y_STEPS - 1));

    // Calculate frame index (row-major order: y * width + x)
    const frameIndex = videoYIndex * X_STEPS + videoXIndex;

    // Calculate time based on FPS (frames are sequential in the video at 60fps)
    const frameTime = frameIndex / FPS;

    // Update video currentTime if it's loaded
    if (video && video.readyState >= 2) {
      // HAVE_CURRENT_DATA or better
      video.currentTime = frameTime;
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    document.addEventListener('pointermove', handlePointerMove);
    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
    };
  }, [handlePointerMove]);

  return (
    <div
      ref={containerRef}
      className="size-full bg-secondary mx-auto flex items-center justify-center"
    >
      <video
        ref={videoRef}
        src="/harrison-big.mp4"
        preload="auto"
        defaultValue={5}
        muted
        className="block w-full border-radius-20px overflow-hidden"
      />
    </div>
  );
}

export default ImageGazer;
