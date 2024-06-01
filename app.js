// ? fs api

const fs = require('fs')

// ! Read a File

//? Synchronous Way
// const content = fs.readFileSync('./sample.txt');
// console.log(content.toString());


//? Asynchronous 

// fs.readFile('./sample.txt','utf-8',(err,content)=>{
//     if(err){
//         console.log(err);
//    throw err
//     }else{
//         console.log(content);
//     }
// })

// ?   Write to a File

// fs.writeFile('./new.txt','some new content',(err)=>{
//     if (err) {
//         console.log(err);
//     }
//     else('some written')
// })

// ? Appending to a File

// fs.appendFile('./new.txt','Appended Content',(err)=>{
//     if (err) {
//         console.log(err);
//     }else{
//         console.log('appended');
//     }
// })


// // ? Checking if a File exist

// fs.access('./new2.txt',fs.constants.F_OK,(err)=>{
//     if (err) {
//         console.log(err);
//     }else{
//         console.log('File Exist');
//     }
// })


//? Delete File 

// fs.unlink('./new.text',(err)=>{
// if (err) {
//     console.log(err);
// }
// else{
//     console.log('File Deleted');
// }
// })

//! Using Promise

const fs2 = require('fs/promises')


//     try{
// let content = fs2.readFile('./sample.txt','utf-8')
// console.log(content);
//     }catch(err){
// console.log(err);
//     }



//     const readFileContent = async ()=>{
//         try{
// let content = await fs2.readFile('./sample.txt','utf-8')
// console.log(content);
//         }
//         catch(err){
// console.log(err);
//         }
//     }

//     readFileContent()



// ! OS API

const os = require('os')


// ? os.arch

// console.log('CPU atchitacture',os.arch());


// ? os.cpus

// console.log('cpu info',os.cpus());


// ? os endianness

// console.log(os.endianness());

// ?os.freememory

// console.log(os.freemem());

// ? os.homedir

// console.log(os.homedir());

// ? os.hostname

// console.log(os.hostname());

// ? os.loadsvg

// console.log(os.loadavg());

// ?os.networkInterfaces

// console.log(os.networkInterfaces());

// ? os.platform

// console.log(os.platform());

//? os.release

// console.log(os.release());

// ? os.totalmemory

// console.log(os.totalmem());

