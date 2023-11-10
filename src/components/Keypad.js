// Code Keypad Component Here

function Keypad ({passWord, handlepassword}){
    return (
        <div>
            <input 
            type="password"
            id="newPassword"
            onChange={handlepassword}
            value={passWord}
            />
        </div>
    )
}

export default Keypad;