import { motion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';

interface Ball {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
}

export const FloatingBalls = () => {
    const [balls, setBalls] = useState<Ball[]>([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e: MouseEvent) => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY,
        });
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [handleMouseMove]);

    useEffect(() => {
        const generateBalls = () => {
            const numberOfBalls = window.innerWidth < 768 ? 100 : 300;
            const newBalls: Ball[] = [];
            for (let i = 0; i < numberOfBalls; i++) {
                newBalls.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 8 + 4,
                    duration: Math.random() * 10 + 15,
                });
            }
            setBalls(newBalls);
        };

        generateBalls();
    }, []);

    return (
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            {balls.map((ball) => {
                const distance = Math.hypot(
                    mousePosition.x - (ball.x * window.innerWidth) / 100,
                    mousePosition.y - (ball.y * window.innerHeight) / 100
                );

                const maxDistance = 200; // Maximum distance for interaction
                const scale = Math.max(1, 1 + (1 - Math.min(distance, maxDistance) / maxDistance));

                return (
                    <motion.div
                        key={ball.id}
                        className='absolute rounded-full bg-fuchsia-600/20'
                        style={{
                            width: ball.size,
                            height: ball.size,
                            left: `${ball.x}%`,
                            top: `${ball.y}%`,
                        }}
                        animate={{
                            x: [0, 30, -20, 20, 0],
                            y: [0, -20, 30, -25, 0],
                            scale: scale,
                        }}
                        transition={{
                            duration: ball.duration,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            scale: {
                                duration: 0.2,
                                ease: 'easeOut',
                            },
                        }}
                    />
                );
            })}
        </div>
    );
};
