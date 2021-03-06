import { Mongo } from 'meteor/mongo';
 
export const Tasks = new Mongo.Collection('tasks');

/* task{
    _id: { type: String }, //unique task id
    taskName: { type: String }, 
    timeEst: { type: Int }, //estimated time to complete
    dueDate: { type: Date }, 
    subject: { type: String }, //the class/category it is for
    timeSpent: { type: Int } // the cumulative time spent on the task so far, to udpate with progress in current session
    completed: 

}

*/ 
// TODO: index by taskname or due date?

Meteor.methods({
    'task.addTask'(array) {
        
        if (array[0]==""){ 
            throw new Meteor.Error('task-not-labeled', "The task does not have a title"); //does this stop it from running?
        }
        //add user check
        //add throw warning for empty fields
        //check task name is unique ? 

        Tasks.insert({ //automatically adds unique _id
            taskName: array[0],
            timeEst: array[1], //estimated time to complete
            dueDate: array[2], 
            subject: array[3], //the class/category it is for
            timeSpent: 0,
            completed: 0, //0 = not completed, date = completed date, -1 = not completed, but late, 2 current task
            current: 0
        });
    }, 
    'task.removeTask'(taskName) { //should use _id?
        const task = Tasks.findOne(taskName); //get the id?    
        Tasks.remove(task);
      },
    //update date
    //update title
    //fetch tasks 
    //mark completed
    'task.returnByDate'(){
        //get current date
        //make call searching for tasks organized by not completed and duedate - currentdate (> 0) ascending limited to 5
        //Tasks.find( { $query: {}, $orderby: { date : 1 } } )

        // Tasks.find({}, { sort: { createdAt: -1 } }).fetch()
        //cursor = Tasks.find({}, { sort: { dueDate: -1 } });
        //array = [];
        array = Tasks.find({}, {sort: { dueDate: 1 }}).fetch();

        
        console.log("The array is \n" + array);
        i = 0;
        for (i; i<array.length; i++){
            console.log(array[i].taskName);
        }        
        return array;
    },
    'task.updateWorkingStatus'(taskId, status){
        //get current date
        //make call searching for tasks organized by not completed and duedate - currentdate (> 0) ascending limited to 5
        //Tasks.find( { $query: {}, $orderby: { date : 1 } } )
        // Tasks.find({}, { sort: { createdAt: -1 } }).fetch()
        //cursor = Tasks.find({}, { sort: { dueDate: -1 } });
        //array = [];
        if (status == 1){
            console.log("removing old current")
            Tasks.update({current: 1}, {$set: { current: 0 }});
        }        
        console.log("updating new current to " + status)
        Tasks.update({_id: taskId}, {$set: { current: status }});
        return true;
    },
    'task.fetchWorkingStatus'(){
        //get current date
        //make call searching for tasks organized by not completed and duedate - currentdate (> 0) ascending limited to 5
        //Tasks.find( { $query: {}, $orderby: { date : 1 } } )
        // Tasks.find({}, { sort: { createdAt: -1 } }).fetch()
        //cursor = Tasks.find({}, { sort: { dueDate: -1 } });
        //array = [];

        array = Tasks.find({current: 1}).fetch();

        if (array != null){
            return true;
        }       
        else{
            return false;
        } 
        
    }

  })

  //add accounts (colors?) and projects