
import React from 'react';
import clsx from 'clsx';

interface SectionProps extends React.HTMLAttributes<HTMLElement> { }

export const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={clsx('py-16 md:py-24', className)}
                {...props}
            />
        );
    }
);
Section.displayName = 'Section';
