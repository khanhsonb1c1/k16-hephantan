// mongodb+srv://khanhson05072000:1234567890@cluster0.wo675js.mongodb.net/


'use strict'

const mongoose = require('mongoose');

// const { db: { host, name, port}} = require("../configs/config.mongodb")

const connectString = "mongodb+srv://khanhson05072000:1234567890@cluster0.wo675js.mongodb.net/"

console.log(connectString, 'connect string')

class Database {
    constructor() {
        this.connect();
    };


    // connect
    connect(type = 'mongodb'){

        if(1 === 1) {
            mongoose.set('debug', true)
            mongoose.set('debug', {color: true})
        }

        mongoose.connect(connectString, {
            maxPoolSize: 10 // max connect 
        }).then(() => {
            console.log('connect successfully')
        }).catch((err) => {
            console.log('Connect error: ', err)
        })
    }


    static getInstance() {
        if(!Database.instance) {
            Database.instance = new Database()
        }  
        return Database.instance; 
    }
}

const instanceMongoDb = Database.getInstance();


module.exports = instanceMongoDb;