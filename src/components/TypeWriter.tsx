import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface TypeWriterProps {
    text: string;
    delay?: number;
    className?: string;
}

export const TypeWriter = ({ text, delay = 100, className = '' }: TypeWriterProps) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText((prev) => prev + text[currentIndex]);
                setCurrentIndex(currentIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return (
        <span className={className}>
            {currentText}
            <motion.span
                className='inline-block w-[2px] h-5 bg-white ml-[2px]'
                animate={{ opacity: [1, 0] }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
            />
        </span>
    );
};
