
function Header(props){
    return (
        <header class="head" style={{
            backgroundColor: props.bgColor,
            color: props.color
        }} >
            <div class="title" > Welcome to { props.name } </div>
            <div class="right" >
                <ul>
                    <li> Shashank Mathur</li>
                    <li> +91 9928131452</li>
                    <li>mail@gmail.com</li>
                </ul>
            </div>
            <div class="clear" ></div>
        </header>
    );
}

export default Header;