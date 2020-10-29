import { Accounts } from 'meteor/accounts-base';
 
//add custom info fields for users: classes/colors, task collection, etc.

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});