import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px black', height: '795px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;