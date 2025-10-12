import type { ReactNode } from 'react';
import "./componets.scss";

type Props = {
    title: string;
    children: ReactNode;
}

function Card({ title, children }: Props) {
    return (
        <div className="text-card">
            <h2>{title}</h2>
            {children}
        </div>
    );
}

export default Card;