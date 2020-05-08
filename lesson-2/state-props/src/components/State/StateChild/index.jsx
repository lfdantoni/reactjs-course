import React from 'react';

export function StateChild({callback}) {
    return <button onClick={() => callback(6)}>I need money!</button>
}