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
    'task.addTask'(array) {
        
        if (array[0]==""){ 
            throw new Meteor.Error('task-not-labeled', "The task does not have a title"); //does this stop it from running?
        }
        //add user check
        //add throw warning for empty fields

        Tasks.insert({ //automatically adds unique _id
            taskName: array[0],
            timeEst: array[1], //estimated time to complete
            dueDate: array[2], 
            subject: array[3] //the class/category it is for
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