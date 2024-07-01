import "./Header.css"
const Header = (props) =>{
    return(
        <div className="div">
            <h2>WELCOME KYRGYZSTAN</h2>
            <button onClick={props.button}>TOWN</button>
        </div>
    )
}

export default Header