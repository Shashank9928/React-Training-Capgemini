import React from "react";
// function LogIn(){
//     return ( 
//     <div> 
//         <h1>Log In Screen </h1>
//         <form>
//             <label>Email</label>
//             <input type="text" name="email" />
//             <label>Password</label>
//             <input type="password" name="password" />
//             <button>Log In</button>
//         </form>
//     </div> 
//     );
// }


// // Without Jsx
// function LogIn(){
//     return (
//         React.createElement(
//             "div", {id:"hello"},
//             React.createElement("h1",{}, "Without Jsx"),
//     ));
// }

// With Jsx
function LogIn(){
    return (
        <div id="hello">
            <h1>With Jsx</h1>
        </div>
    );
}

export default LogIn;