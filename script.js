let isMomHappy = true
const willIGetNewIphone = new Promise((resolve, reject) =>{
    if (isMomHappy) {
        const newIphone = {
            brand: "iphone-x",
            color: "black"
        };
        resolve(newIphone);
    } else {
        const reason = new Error(`mom isn't happy`);
        reject(reason);
    }
});


const showOff = newIphone => {
    let message = `Hey friend, i have a new
    ${newIphone.color} ${newIphone.brand}`;

    return Promise.resolve(message)
}

const askMom = function (){
    console.log(`before asking mom`);
    willIGetNewIphone.then(showOff)
    .then(fulfilled => {
        console.log(fulfilled);
    }).catch(err => console.log(err.message));
    console.log(`after asking mom`);

};

askMom();

async function askMom2() {
    try{
        console.log(`before asking mom`);
        let phone = await willIGetNewIphone;
        let message = await showOff(phone);
        console.log(message);
        console.log(`after getting a response`);
    } catch(err) {
        console.log(err.message);
    }
} 

(async () => {
    await askMom2();
}) ();

const getUser = () => {
    setTimeout(() => {
        return {name: 'Max'}
    }, 2000)
}
console.log(getUser());

const getUser2 = cb =>{
    setTimeout(() => {
        cb({name: 'Max'})
    }, 2000)
}

getUser2(user => {
    console.log(user.name);
    
})

function getUser3 (){
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve({user: 'Elad'}), 0)
    })
}

getUser3().then((user) => console.log(user))