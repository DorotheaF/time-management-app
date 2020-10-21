import '../imports/api/tasks.js';

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Tasks } from "../imports/api/tasks.js";

const name1 = "Test task 66";
const est1 = "00:30";
const due1 = "10/10/2020";
const subj1 = "MCEN 3025";
const array =[name1, est1, due1, subj1];

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
  
});