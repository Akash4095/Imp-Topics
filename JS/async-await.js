




//creating promise

const prom = new Promise((reslove, reject) => {
    setTimeout(() => {
        reslove("promise resolved")
    }, 10000)
})

const promiseValue = prom.then((res) => console.log(res))

// what is async

//async always return a promise
async function getData() {
    return "message"
}

const data = getData()
console.log('data', data) // return promise
data.then((res) => console.log(res)) // message


// await can only be used inside async function
async function handlePromise() {
    console.log("hello world")  // this line dont wait for 10s
    const result = await prom
    console.log('Namaste Javascript')  // this line also printed after 10s after promise is resolved
    console.log(result)
}


const API_URL = "https://api.github.com/users/Akash4095"
// fetch api call

// fetch().then(res=> res.json()).then(res=> console.log(res))

// using async await
async function callGithubUser() {
    try {
        const data = await fetch(API_URL)
        const jsonValue = await data.json()
    }
    catch (err) {
        console.log('err', err)
    }

}