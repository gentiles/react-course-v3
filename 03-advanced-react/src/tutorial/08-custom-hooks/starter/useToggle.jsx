import React, { useState } from "react";

function useToggle(defaultValue){
    const [isShow, setShow] = useState(defaultValue)

    const toggle =()=>{
        setShow(!isShow)
    }

    return {isShow, toggle}
}

export default useToggle