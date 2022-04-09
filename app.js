

// const fs = require('fs')
// fs.writeFileSync('notes.txt','Hello Every One')

// const { require } = require("yargs")

// ///////////////////////////
// //Read File
// console.log(fs.readFileSync('notes.txt').toString())

// ////////////////
// //Add Data To File
// fs.appendFileSync('notes.txt','-Ehab Fouad')

// ///////////////////////////
// const yargs = require('yargs')


// const notes = require('./notes')

// const fs =require('fs')
// fs.writeFileSync('student.txt')

//////////////////////////////////////////////////////////////////////////////////////////


const yargs = require('yargs')
const notes = require('./data')

//////////////////////////////ADD/////////////////////////////////
yargs.command({
    command:'add',
    describe:'Add Data',
    //option command deal with
    builder:{
        id:{
            describe:'This Is Student`s ID',
            type:'number',
            demandOption:true
        },
        sName:{
            describe:'This Is Student`s Name',
            type:'string',
            demandOption:true
        },
        degrees:{
            describe:'This Is Student`s Degrees',
            type:'array',
            demandOption:true
        },
        comment: {
            describe: 'This is comment description in Add command',
            type: 'string'
        }
    },
    handler:(x)=>{
        notes.addNote(x.id, x.name, x.degree, x.comment)
    }
})

//////////////////////////////////////////DELETE////////////////////////////
yargs.command({
    command: 'delete',
    describe: 'Delete Data',
    builder: {
        id: {
            describe: 'This is body description in delete command',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (x) => {
        notes.removeNote(x.id)
    }
})

//////////////////////////////////////////Read////////////////////////////
yargs.command({
    command: 'read',
    describe: 'Read Data',
    builder: {
        id: {
            describe: 'This is body description in read command',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (x) => {
        notes.readNote(x.id)
    }
})
//////////////////////////////////////////list====>Total Degrees////////////////////////////

yargs.command({
    command: 'list',
    describe: 'List Data',
    handler: () => {
        notes.listNote()
    }
})

// console.log(yargs.argv)
yargs.parse()