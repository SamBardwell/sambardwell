"use client";

import { useState } from "react";
import Image from "next/image";

interface TrainerCardProps {
  show: boolean;
  onClose: () => void;
}

export function TrainerCard({ show, onClose }: TrainerCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white text-2xl font-mono"
        >
          ×
        </button>
        
        <div 
          className="relative w-[640px] h-[420px] cursor-pointer"
          style={{ 
            perspective: '1500px',
          }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div 
            className="relative w-full h-full transition-transform duration-600"
            style={{ 
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateX(180deg)' : 'rotateX(0deg)',
            }}
          >
            <div 
              className="absolute inset-0"
              style={{ 
                backfaceVisibility: 'hidden',
              }}
            >
              <Image
                src="/trainer-front.png"
                alt="Trainer Card Front"
                fill
                className="object-contain"
                style={{ imageRendering: 'pixelated' }}
                priority
              />
            </div>

            {/* Back of Card */}
            <div 
              className="absolute inset-0"
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateX(180deg)',
              }}
            >
              <Image
                src="/trainer-back.png"
                alt="Trainer Card Back"
                fill
                className="object-contain"
                style={{ imageRendering: 'pixelated' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}