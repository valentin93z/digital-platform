import { useState, useRef, useEffect } from "react";

export const useElementWidth = () => {

    const ref = useRef();
    const [width, setWidth] = useState(null);

    const observer = useRef(
        new ResizeObserver((entries) => {
            const { width } = entries[0].contentRect;
            setWidth(width);
        })
    );

    useEffect(() => {
        observer.current.observe(ref.current);
    }, [ref, observer]);

    return [ref, width];
}