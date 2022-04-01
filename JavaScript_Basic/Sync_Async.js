
// Synchronous Function
function calculateValues(num1,num2,num3){
    let add = num1 + num2;
    let square = add * add;
    let multiply = square * num3;
    let divide = multiply / 2;

}

// Asynchronous Function
const posts = [
    {
        id: 1,
        title: "Title 1",
        body: "Welcome to the world of asynchronous programming"
    },
    {
        id: 2,
        title: "Title 2",
        body: "Welcome to the world of asynchronous programming"
    },
    {
        id: 3,
        title: "Title 3",
        body: "Welcome to the world of asynchronous programming"
    }
];
function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((posts) => {
            output += `<li>${posts.id} - ${posts.title} - ${posts.body}</li>`;
        });
        document.body.innerHTML = output;
    },1000)
}

// function createPost(post,callback){
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     },2000)
// }
// // createPost({id: 4, title: "Title 4", body: "Welcome to the world of asynchronous programming"});
// // getPosts();



// createPost({id: 4, title: "Title 4", body: "Welcome to the world of asynchronous programming"},getPosts);

// Asynchronous Function using Promise

function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
                console.log("Post Added");
                resolve();
            }else{
                reject("Error: Something went wrong");
            }
        },2000);
    });
}

// let newPost = createPost({id: 4, title: "Title 4", body: "Welcome to the world of asynchronous programming"}).then(getPosts);


// Asynchronous Function using Async Await

async function init(){
    await createPost({id: 4, title: "Title 4", body: "Welcome to the world of asynchronous programming"});
    getPosts();
}
init();


// Multiple Promises

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;

const promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve,2000,'Goodbye');
});

Promise.all([promise1,promise2,promise3]).then((values) => {
    console.log(values);
}).catch(() => {
    console.log("error");
});