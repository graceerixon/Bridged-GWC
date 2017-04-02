import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './main.html';


Template.contactUs.events({
  'submit form': function(event){
    event.preventDefault();
	var name = ($('[name=name]').val());
    var email = $('[name=email]').val();
	var message = $('[name=message]').val();
	console.log(event);
	Meteor.call('insert contactUs', name, message);
	FlowRouter.go('home');

	}
    });