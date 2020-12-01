# time-management-app
For the Engineering Projects for the Community class at the University of Colorado, Boulder, a group of engineers decided to take on the challenge of developing a time management aplication for gradeschoolers (grades 4-9). The team decided to design a web application with several components, including a main page, calendar, task list, task entry form, current session, and timer. Students will be able use these different components to organize their homework, study sessions, or projects.  

The web application was built using Meteor.js (with Vue.js and Node.js). Only one of the team members had any experience with software/web development, but the whole team learned and grew as the project progressed. Due to a lack of expereince, some of the code is messy -- but it gets the job done. 

Since the class has come to an end, development of this project has put on hold, until another group chooses to pick it back up.

### To download and run the project
1) Install meteor.js and create a new project
2) Git clone this repository
3) Copy the folder ```node-modules``` from the new folder into the ```time-management-app``` project (since the folder is in the git-ignore)
4) Run the meteor command from the terminal in the project folder, and allow the packages to download
5) Visit the localhost site, and be amazed!  

## To-do
- [ ] Setup database for users (with tasks as a sub document for each)
- [ ] Add indexing to task name and due date for faster sorting
- [ ] Fix dates to work across timezones
- [ ] Add dropdown calendar in the new task form (and prepopulate classes too)
- [ ] Add database sanitizer for user input
- [ ] Color code tasks, and distinguish between projects and tasks
- [ ] Create current session functionality
- [ ] Test with chromebooks
- [ ] Finish timer functionality 
- [ ] Add diagnostics functionality (track app use, time estimation accuracy, number of tasks, etc. across weeks/months)
- [x] Add task breakdown to backlog in trello
- [x] Create consistent coding/color/styling guidlines
- [x] Determine database formats and start on methods/file setup
- [x] Figure out routing and make pages skeleton

## Known Bugs
- [ ] Time zones don't work (time is hard coded for MST)

### Our Tools
Github, [what is it?](https://www.howtogeek.com/180167/htg-explains-what-is-github-and-what-do-geeks-use-it-for/). Basically version control and code sharing  
[Bootstrap](https://getbootstrap.com/), for formatting  
MongoDB  
Meteor  
Vue  

### Info and Resources
[Github markdown](https://guides.github.com/features/mastering-markdown/) (aka, how I formatted this)  
[Premade Calendar](https://mdbootstrap.com/plugins/jquery/full-calendar/)
[Timer]

