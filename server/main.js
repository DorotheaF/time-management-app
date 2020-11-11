import '../imports/api/tasks.js';

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Tasks } from "../imports/api/tasks.js";

const name1 = "Test task 1";
const est1 = "00:30";
const due1 = "2020-11-09";
const subj1 = "GEEN 2400";
const array =[name1, est1, due1, subj1];

const name2 = "Test task 2";
const est2 = "00:45";
const due2 = "2020-11-10";
const subj2 = "MCEN 3025";
const array2 =[name2, est2, due2, subj2];

const name3 = "Test task 3";
const est3 = "00:15"; 
const due3 = "2021-11-11";
const subj3 = "ENES 3100";
const array3 =[name3, est3, due3, subj3];

Meteor.startup(() => {
  // if (!Accounts.findUserByUsername(SEED_USERNAME)) {
  //   Accounts.createUser({
  //     username: SEED_USERNAME,
  //     password: SEED_PASSWORD,
  //   });
  // }
  if (!Tasks.findOne({taskName: name1})) {
    Meteor.call('task.addTask', array);
    // Tasks.insert({ //automatically adds unique _id
    //   taskName: name1,
    //   timeEst: est1, //estimated time to complete
    //   dueDate: due1, 
    //   subject: subj1 //the class/category it is for
    // });
  }
  if (!Tasks.findOne({taskName: name2})) {
    Meteor.call('task.addTask', array2);
  }
  if (!Tasks.findOne({taskName: name3})) {
    Meteor.call('task.addTask', array3);
  }
  
});