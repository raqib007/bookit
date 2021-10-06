const Room = require( '../models/room');
const mongoose = require('mongoose');
const rooms = require('../data/rooms.json');

const seedRooms = async () => {
    try {

        mongoose.connect('mongodb+srv://raqib:W0pdqigKOqxdmuqV@cluster0.a4hec.mongodb.net/bookit?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(con => console.log("Connected to atlas DB"));

        await Room.deleteMany();
        console.log('Rooms are deleted');

        await Room.insertMany(rooms);
        console.log('All Rooms are added');

        process.exit();

    }catch (error){
        console.log(error.message);
        process.exit();
    }
}

seedRooms();
