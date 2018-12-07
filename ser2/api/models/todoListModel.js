'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  op: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
    img:{
    type: String,
        default: '../assets/img/1.jpg'
    },
  ing:{
    type:Array,
      Required: 'Kindly enter the name of the task'
  },
    info: {
        type: String,
        default: ''
    },
    cocking: {
        type: Array,
        default: ''
    },
    kat: {
        type: String,
        default: ''
    },
    comp: {
        type: String,
        default: ''
    },
    por: {
        type: String,
        default: ''
    },
    commentt:{
      type:Array,
        Required: 'Kindly enter the name of the task'
    }

});


module.exports = mongoose.model('Tasks', TaskSchema);