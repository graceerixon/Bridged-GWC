import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './main.html';


Template.seniorForm.events({
  'submit form': function(event){
    event.preventDefault();
	var email = ($('[name=email]').val());
    var password = $('[name=password]').val();
	var seniorFirst = $('[name=firstName]').val();
	var seniorLast = $('[name=lastName]').val();
	var entrance = $('[name=entrance]').val();
	console.log(event);
    Accounts.createUser({
		email: email,
      password: password
	}, function(error){
		Meteor.call('insert seniorInfo', seniorFirst, seniorLast, entrance);
		if(error){
			console.log(error.reason);
		} else {
			FlowRouter.go('home');
		}
	});
}});