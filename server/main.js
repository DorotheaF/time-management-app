import '../imports/api/tasks.js';

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Tasks } from "../imports/api/tasks.js";

const name1 = "Test task 1";
const est1 = "00:30";
const due1 = "11/1/2020";
const subj1 = "GEEN 2400";
const array =[name1, est1, due1, subj1];

const name2 = "Test task 2";
const est2 = "00:45";
const due2 = "11/05/2020";
const subj2 = "MCEN 3025";
const array2 =[name2, est2, due2, subj2];

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
  
});