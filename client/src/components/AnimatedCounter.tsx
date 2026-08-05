import { useState, useEffect, useRef } from 'react';

export default function AnimatedCounter({ value }: { value: string | number }) {
    const strValue = String(value);
    // Match structure: prefix (non-digit characters), numeric part (including commas/dots), suffix (the rest)
    const regexMatch = strValue.match(/^([\D]*?)([\d,.]+)([\s\S]*)$/);

    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasStarted) {
                setHasStarted(true);
            }
        }, { threshold: 0.1 });

        if (ref.current) observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted || !regexMatch) return;

        const originalNumStr = regexMatch[2];
        const target = parseFloat(originalNumStr.replace(/,/g, ''));
        let startTimestamp: number | null = null;
        const duration = 2000;

        let animationFrameId: number;

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(target * ease);

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(step);
            } else {
                setCount(target);
            }
        };

        animationFrameId = requestAnimationFrame(step);

        return () => cancelAnimationFrame(animationFrameId);
    }, [hasStarted, strValue]);

    if (!regexMatch) return <span>{strValue}</span>;

    const prefix = regexMatch[1];
    const originalNumStr = regexMatch[2];
    const suffix = regexMatch[3];

    const hasCommas = originalNumStr.includes(',');
    const isDecimal = originalNumStr.includes('.');

    let displayNum = '';
    if (isDecimal) {
        displayNum = count.toFixed(originalNumStr.split('.')[1]?.length || 1);
    } else {
        displayNum = Math.floor(count).toString();
    }

    const formattedNum = hasCommas ? Number(displayNum).toLocaleString('en-US') : displayNum;

    return (
        <span ref={ref}>
            {prefix}{formattedNum}{suffix}
        </span>
    );
}
