import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { selectMeOne } from './boxes.js';

import './main.html';

Template.admin.events({
	'submit form': function(event){
		event.preventDefault();
		var email = ($('[name=email]').val());
		var password = $('[name=password]').val();
	
		console.log(event);
		Accounts.createUser({
			email: email,
			password: password
		}, function(error){
			Meteor.call('insert admin', email, password);
			if(error){
				console.log(error.reason);
			} else {
				FlowRouter.go('home');
			}
		});
	},
});