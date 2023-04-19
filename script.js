// console.log('Request data...')
// const p = new Promise (function(resolve, reject){
//     setTimeout(()=>{
//         console.log('Preparing data...')
//         const backandData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backandData)
//     }, 2000)
// })

// p.then((data)=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//             }, 2000)
//         })
//     })
//     .then(clientData => {
//         clientData.formPromis = true
//         return clientData
//     })
//     .then(data2 => { 
//         console.log('Data received', data2)
//     })
//     .catch(err => console.error('Error:', err))
//     .finally(()=> console.log('finally'))


    const sleep = ms => {
        return new Promise(resolve => {
            setTimeout(()=> resolve(),ms)
        })
    }

// sleep(2000).then(()=> console.log('After 2 sec'))
// sleep(3000).then(()=> console.log('after 3 sec'))

Promise.all([sleep(2000),sleep(5000)])
 .then(()=>{
    console.log('all promisee')
 })


 Promise.race([sleep(2000),sleep(5000)])
 .then(()=>{
    console.log('race promisee')
 })