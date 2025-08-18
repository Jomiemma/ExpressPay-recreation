import React, { useState } from 'react';

function ToggleItem({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <section className="payment-dropdown">
            <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
                <h2>{title}</h2>
                <span>{isOpen ? '➖' : '➕'}</span>
            </div>
                    {isOpen && <p className="dropdown-content">{children}</p>}
        </section>
    );
}

export default ToggleItem;