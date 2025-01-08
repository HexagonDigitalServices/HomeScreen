import React from 'react'

export function OrbitingCircle({
    className,
    children,
    reverse,
    duration = 20,
    radius = 150,
    path = true,
    iconSize = 30,
    speed = 1,
    ...props
}) {
    const calculatedDuration = duration / speed;
    return (
        <>
            {path && (
                <svg xmlns='http://www.w3.org/2000/svg' version='1.1'
                    className=' pointer-events-none absolute inset-0 size-full'>
                    <circle
                        stroke='orange'
                        strokeWidth="2"
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill='none'
                    />
                </svg>
            )}
            {React.Children.map(children, (child, index) => {
                const angle = (360 / React.Children.count(children)) * index;
                return (
                    <div
                        style={{
                            "--duration": calculatedDuration,
                            "--radius": radius,
                            "--angle": angle,
                            "--icon-size": `${iconSize}px`,
                        }}
                        className={` absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full
                    ${reverse ? "[animate-direction:reverse]" : ""
                            } ${className}`}
                        {...props}>
                        {child}
                    </div>
                )
            })}
        </>
    )
}

export default OrbitingCircle