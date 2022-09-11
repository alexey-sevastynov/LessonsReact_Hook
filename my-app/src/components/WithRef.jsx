import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

function WithRef() {

    const inputEl = useRef(null);

    useEffect(() => {
        console.log(inputEl);
    }, [])

    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            placeholder="name"
                            ref={inputEl} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default WithRef;