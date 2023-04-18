console.log('Request data...')
const p = new Promise (function(resolve, reject){
    setTimeout(()=>{
        console.log('Preparing data...')
        const backandData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backandData)
    }, 2000)
})

p.then((data)=>{
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true,
                resolve(data)
        }, 2000)
    })
        p2.then(data2 => {
        console.log('Data received', data2)
        })
    })