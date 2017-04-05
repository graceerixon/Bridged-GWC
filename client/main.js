import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './main.html';

Template.body.onCreated(function bodyOnCreated() {
	this.state = new ReactiveDict();
	Meteor.subscribe('seniorData');
	Meteor.subscribe('teenData');
	Meteor.subscribe('contactUs');
	Meteor.subscribe('admin');
});

Template.nav.events({
	'click .logout': function(event){
		event.preventDefault();
		Meteor.logout();
		FlowRouter.go('home');
	}
});