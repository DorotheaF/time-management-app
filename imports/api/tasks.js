import { Mongo } from 'meteor/mongo';
 
export const Tasks = new Mongo.Collection('tasks');

/* task{
    _id: { type: String }, //unique task id
    taskName: { type: String },
    timeEst: { type: Int }, //estimated time to complete
    dueDate: { type: Date }, 
    subject: { type: String } //the class/category it is for
}

*/

Meteor.methods({
    'task.addTask'(name, est, due, subj) {
        if (taskName==""){
            throw new Meteor.Error('task-not-labeled', "Can't find my pants"); //does this stop it from running?
        }
        //add user check
        //add throw warning for empty fields

        Tasks.insert({ //automatically adds unique _id
            taskName: name,
            timeEst: est, //estimated time to complete
            dueDate: due, 
            subject: subj //the class/category it is for
        });
    },
    'task.removeTask'(taskName) { //should use _id?
        const task = Tasks.findOne(taskName); //get the id?    
        Todos.remove(task);
      },
    //update date
    //update title

  })

  //add accounts (colors?) and projects