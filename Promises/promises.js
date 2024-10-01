

let pr1 = new Promise( (resolve,reject)=>{

    setTimeout( ()=>{
        console.log('prom1')
    }, 1500)

}
)

pr1.then( (resp)=>{
    console.log(resp)

})
.catch( (err)=>{
    console.log("error", err)
})

console.log('******')

let studentName = 'stud1'

let enrollStudent = (studentName)=>{

    return new Promise( (resolve,reject)=>{
        setTimeout( ()=>{

            let success = (Math.random()*100 > 40)

            if(success){
                resolve(`enrollment success for ${studentName}`)
            }
            else{
                resolve(`enrollment failed for ${studentName}; Try again.`)

            }
        }, 2000)
    })

}

// handling the promise

enrollStudent(studentName)
.then( (response)=>{
    console.log(response)
})
.catch( (err)=>{
    console.log(err)
})