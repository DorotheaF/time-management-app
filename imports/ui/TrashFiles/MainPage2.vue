<template>
    <div class="mainpage">
        <div class="content">   

                

            <div class="todo">            
                <header>
                <h1>Todo List ({{ incompleteCount }}) </h1>
                <label class="hide-completed">
                    <input
                    type="checkbox"
                    readOnly
                    checked="hideCompleted"
                    v-model="hideCompleted"
                    @click="toggleHideCompleted"
                    />
                    Hide Completed Tasks
                </label>

                <!-- <blaze-template template="loginButtons" tag="span"></blaze-template> -->

                <form class="new-task" @submit.prevent="handleSubmit">
                    <input
                    type="text"
                    placeholder="Type to add new tasks"
                    v-model="newTask"
                    />
                </form>
                
                </header>
                <ul>
                <Task v-for="(task, index) in tasks" v-bind:key="task._id" v-bind:task="task" v-bind:yello="index+1"/>
                </ul>

                <div class="chunkyrow">
                  
                  <div class="prioritylist">
                    <div style ="flex-grow: 1">
                    <h1> Never gonna give you up, never gonna let you down, never gonna run around and desert you, never gonna make you cry, never gonna say goodbye, never gonna tell a lie and hurt you.</h1>
                    </div>
                  </div>

                  <div class="daycalendar">
                    <div style= "flex-grow: 5">
                    <h1>Next Three Days 
                          Monday            Tuesday             Wednesday
                    </h1>
                    </div>
                  </div>
                  
              </div>
              <div class="chunkyrow">
                <div class=daycalendar>
                  <li class="nav-item">
                    <a class="nav-link active" href="">Enter New Task</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="">Enter New Project</a>
                  </li>
                  <li class = "nav-item">
                     <a class="nav-link active" href="">Start New Session</a>
                  </li>
                </div>

                <div class=daycalendar>
                  <h1>All Classes</h1>
                  <h1>Math</h1>
                  <h1>English</h1>
                  <h1>Chemistry. The bane of one's existence</h1>
                </div>
              </div>
                   
            </div>      

        </div>           
    </div>
  
</template>
 
<script>
export default {
}
</script>

<style>
</style>
