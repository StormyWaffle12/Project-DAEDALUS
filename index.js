const fs = require('fs')
const prompt = require('prompt-sync')()
const me = require('./memory/me.json')

//memory is untested. probably need to test
const memory = fs.readdir("./memory", (err, files) => {
    files.forEach(file => {
        return file
    })
})

var daedalus = {
    "update": function () {
        console.clear()
        console.log(me.name)
        var input=prompt(">> ")
        if(input='.exit()'){
            console.clear()
            process.exit()
        }
    }
}

setInterval(()=>{daedalus.update()})