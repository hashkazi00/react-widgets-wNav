import React from 'react';

const Link = ({href, children, className}) => {


    const onClick = (e) => {

        if(e.metaKey || e.ctrlKey){
            return; //to allow the browser continue it's native behaviour
        }

        e.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return <a href={href} onClick={onClick} className={className}>{children}</a>
}

export default Link;