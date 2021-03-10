import React from "react"

import "./spaced-components.scss"

export default function SpacedComponents({children}){
    return(
        <div class="spaced-components layout">
            {children}
        </div>
    );
}