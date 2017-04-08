import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { selectMeOne } from './boxes.js';

import './main.html';

Template.adminLogin.events({
	'submit form': function(event){
		event.preventDefault();
		email = $('[name=email]').val();
		var password = $('[name=password]').val();
		FlowRouter.go('home');
		Meteor.loginWithPassword(email, password);
	}
});