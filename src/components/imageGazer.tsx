'use client';

import React, { useRef, useEffect } from 'react';
import { FPS, X_STEPS, Y_STEPS } from '@/lib/constants';

function ImageGazer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastFrameTimeRef = useRef(0);

  useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      const video = videoRef.current;
      const container = containerRef.current;

      if (!video || !container) return;

      // Throttle to match video FPS for smoother playback
      const now = performance.now();
      if (now - lastFrameTimeRef.current < 1000 / FPS) {
        return;
      }
      lastFrameTimeRef.current = now;

      // Calculate container center position
      const containerRect = container.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;
      const containerCenterY = containerRect.top + containerRect.height / 2;

      // Calculate direction from container center to mouse
      const containerDeltaX = e.clientX - containerCenterX;
      const containerDeltaY = e.clientY - containerCenterY;

      // Normalize based on container dimensions
      const maxDistanceX = containerRect.width / 2;
      const maxDistanceY = containerRect.height / 2;
      const containerNormalizedX = Math.max(
        -1,
        Math.min(1, containerDeltaX / maxDistanceX)
      );
      const containerNormalizedY = Math.max(
        -1,
        Math.min(1, containerDeltaY / maxDistanceY)
      );

      // Map to indices
      const videoXIndex = Math.round(
        ((containerNormalizedX + 1) / 2) * (X_STEPS - 1)
      );
      const videoYIndex = Math.round(
        ((containerNormalizedY + 1) / 2) * (Y_STEPS - 1)
      );

      // Calculate frame index (row-major order: y * width + x)
      const frameIndex = videoYIndex * X_STEPS + videoXIndex;

      // Calculate time for this frame based on FPS
      const frameTime = frameIndex / FPS;

      // Update video currentTime if it's loaded
      if (video.readyState >= 2) {
        // HAVE_CURRENT_DATA or better
        video.currentTime = frameTime;
      }
    };

    // Add event listener to document for global cursor tracking
    document.addEventListener('pointermove', handlePointerMove);

    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full bg-black mx-auto flex items-center justify-center"
    >
      <video
        ref={videoRef}
        src="/harrison-big.mp4"
        preload="auto"
        muted
        className="block w-full max-w-600px border-radius-20px overflow-hidden"
      />
    </div>
  );
}

export default ImageGazer;
