// Code EyesOnMe Component Here


function EyesOnMe({Button,handlefocus,handleblur}) {
    return(
        <div>
            <button
            value={Button}
            onFocus={handlefocus}
            onBlur={handleblur}
            >EyesOnMe</button>
        </div>
    )
}

export default EyesOnMe