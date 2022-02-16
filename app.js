const os = require('os')
const fs = require('fs')
const path = require('path')

let user1 = {
    name: "nazar",
    age: 22
}
let user2 = {
    name: "ivan",
    age: 19
}

console.log(user1)
console.log(user2)

fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err => {
    if (err) {
        console.log(err)
        throw err
    }
}))
fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true}, (err => {
    if (err) {
        console.log(err)
        throw err
    }
}))

data1 = "name : " + user1.name + "\n" + "age : " + user1.age + "\n" + "date : " + new Date()
data2 = "name : " + user2.name + "\n" + "age : " + user2.age + "\n" + "date : " + new Date()

/*
fs.writeFile(path.join(__dirname, 'main', 'online', 'user1FromOnline.txt'), data1, err => {
    if (err) {
        throw err
    }
})
fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'user2FromInPerson.txt'), data2, err => {
    if (err) {
        throw err
    }
})
*/


function moveUser() {
    fs.stat('main/inPerson/user2FromInPerson.txt', function (err, stats) {
        if (err) {
            fs.writeFile(path.join(__dirname, 'check.txt'), "false", err => {
                if (err) {
                    throw err
                }
            })
        } else {
            fs.writeFile(path.join(__dirname, 'check.txt'), "true", err => {
                if (err) {
                    throw err
                }
            })
        }
    });
    fs.readFile("check.txt", "utf8", function(error,data){
    console.log(data)
        if (data === 'true') {
            fs.rename('main/online/user1FromOnline.txt', 'main/inPerson/user1FromOnline.txt', err => {
                if (err) {
                    console.log(err)
                }
            })
            fs.rename('main/inPerson/user2FromInPerson.txt', 'main/online/user2FromInPerson.txt', err => {
                if (err) {
                    console.log(err)
                }
            })
            console.log("true")
        }
        if (data === 'false') {
            fs.rename('main/inPerson/user1FromOnline.txt', 'main/online/user1FromOnline.txt', err => {
                if (err) {
                    console.log(err)
                }
            })
            fs.rename('main/online/user2FromInPerson.txt', 'main/inPerson/user2FromInPerson.txt', err => {
                if (err) {
                    console.log(err)
                }
            })
        }
    });}


moveUser()