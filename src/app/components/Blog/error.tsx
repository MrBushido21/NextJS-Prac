'use client'
function ErrorWrapper({error}: {error: Error}) {
    return (
        <h3>Oops!!! {error.message}</h3>
    );
    }
    export default ErrorWrapper;