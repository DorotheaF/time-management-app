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
                    <h1> Priority List In these past 5 years however, you have also become my friend. The first time you asked me if you could be my best friend, I laughed it off, mainly because you meant it as a joke, but also because it seemed redonkulous at the time. But not only have you made me who I am, but I have shared some of the most meaningful laughs and memories of my life with you. You might not have had the choice to have me for a daughter, but you did have the choice to make your friend, and I am so grateful for that.</h1>
                    </div>
                  </div>

                  <div class="daycalendar">
                    <div style= "flex-grow: 5">
                    <h1>Next Three Days 
                         We don’t always agree with each other, and that is perhaps why I am then able to value our relationship all the more. You have shown me how much deeper a friendship can go, and how important it is to hold on to those you care about. Linsey, you are considerate and yet strong willed. When you have a want or need, you let nothing get in your way, and yet you know how to reach out to others, and how to listen. 
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
