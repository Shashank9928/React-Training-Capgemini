
function handleClick(){
    alert("Hello World");
}

function Main(props){
    return (
        <div class="main" >
            <div class="content"
                style={{
                    backgroundColor: props.contentBackgroundColor,
                    color: props.contentColor,
                }} 
            >
                <div className="container" >
                    <div className="row" >
                        <div className="col-md-12" >
                            <div className="jumbotron" >
                                <h1> Welcome to { props.name } </h1>
                                <p>
                                    This is a simple hero unit, a simple jumbotron-style component for calling
                                    extra attention to featured content or information.
                                </p>
                                <p>
                                    <button className="btn btn-primary btn-lg" onClick={handleClick} >Learn more</button>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Main;


