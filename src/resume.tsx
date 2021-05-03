import React from "react";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

const Resume = () => {
    return (
        <div>
            <a href='/resume'>Download my Resume</a>
            <ResponsiveEmbed>
                <embed src="/static/test.pdf"/>
            </ResponsiveEmbed>
        </div>
    );
};

export default Resume;