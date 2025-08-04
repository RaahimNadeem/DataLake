"use client"

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface OptimizedVideoProps {
  webmSrc: string;
  mp4Src: string;
  posterSrc: string;
  className?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  webmSrc,
  mp4Src,
  posterSrc,
  className = "",
  style = {},
  onLoad,
  onError,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (videoRef.current) {
              videoRef.current.load();
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoadedData = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // CDN URL transformation (you can customize this)
  const getCDNUrl = (url: string) => {
    // If you're using a CDN, transform the URL here
    // Example: return url.replace('/public/', 'https://cdn.yourdomain.com/');
    return url;
  };

  return (
    <motion.video
      ref={videoRef}
      className={className}
      style={style}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload="metadata" // Only load metadata initially
      poster={getCDNUrl(posterSrc)}
      onLoadedData={handleLoadedData}
      onError={handleError}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Multiple video sources for better browser compatibility */}
      <source src={getCDNUrl(webmSrc)} type="video/webm" />
      <source src={getCDNUrl(mp4Src)} type="video/mp4" />
      
      {/* Fallback for browsers that don't support video */}
      <img src={getCDNUrl(posterSrc)} alt="Video poster" className="w-full h-full object-cover" />
    </motion.video>
  );
};

export default OptimizedVideo; 