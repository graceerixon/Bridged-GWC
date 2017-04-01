import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './main.html';


Template.seniorForm.events({
  'submit form2': function(event){
    event.preventDefault();
	var seniorFirst = $('[name=firstName]').val();
	var seniorLast = $('[name=lastName]').val();
	var entrance = $('[name=entrance]').val();
	console.log(event);
    Accounts.createUser({
	function(error){
		Meteor.call('insert seniorInfo', firstName, lastName, entrance);
		if(error){
			console.log(error.reason);
		} else {
			FlowRouter.go('home');
		}
	}
	})
    }
  });