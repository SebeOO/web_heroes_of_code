import React from 'react';

const ActionButtons = ({ isRegistering, setIsRegistering }) => {
    return (
        <div className="actions">
            <button
                type="button"
                onClick={() => {
                    setIsRegistering((prev) => !prev);
                }}
            >
                {isRegistering
                    ? 'Already have an account? Login'
                    : "Don't have an account? Register"}
            </button>
        </div>
    );
};

export default ActionButtons;
