// file for all the global api calls to the database
import axios from 'axios';
import poll from '../models/events';
import user from '../models/user';
import mongoose from 'mongoose';

require('dotenv').config();
mongoose.connect(process.env.MONGO_URL);

const getEventDetails = (req, res) => {
    events.find({}, (err, events) => {
        if (err) {
            res.send(err);
        }
        res.json(events);
    }
    );
}

const getEventDetailsById = (req, res) => {
    events.findById(req.params.id, (err, events) => {
        if (err) {
            res.send(err);
        }
        res.json(events);
    }
    );
}

const createEvent = (req, res) => {
    let newEvent = new events(req.body);
    newEvent.save((err, events) => {
        if (err) {
            res.send(err);
        }
        res.json(events);
    });
}

const updateEvent = (req, res) => {
    events.findOneAndUpdate({ _id: req
        .params
        .id
    }, req.body, { new: true }, (err, events) => {
        if (err) {
            res.send(err);
        }
        res.json(events);
    }
    );
}

const deleteEvent = (req, res) => {
    events.remove({ _id: req.params.id }, (err, events) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted event' });
    }
    );
}

const getUserDetails = (req, res) => {
    user.find({}, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    }
    );
}

const getUserDetailsById = (req, res
) => {
    user.findById(req.params.id, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    }
    );
}

const createUser = (req, res) => {
    let newUser = new user(req.body);
    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
}

const updateUser = (req, res) => {
    user.findOneAndUpdate({ _id: req
        .params
        .id
    }, req
        .body, { new: true }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        }
    );
}

const deleteUser = (req, res) => {
    user.remove({ _id: req.params.id }, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted user' });
    }
    );
}

export default global = {
    getEventDetails,
    getEventDetailsById,
    createEvent,
    updateEvent,
    deleteEvent,
    getUserDetails,
    getUserDetailsById,
    createUser,
    updateUser,
    deleteUser
}