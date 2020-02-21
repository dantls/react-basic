import React from 'react';

import './styles.css';

function PostContent({content}){
    return (
        <div className="post-content">
            <p>{content}</p>
        </div>
    );
}
export default PostContent;