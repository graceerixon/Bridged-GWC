import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './main.html';


Template.seniorForm.events({
  'submit form': function(event){
    event.preventDefault();
	var email = ($('[name=email]').val());
	var seniorFirst = $('[name=seniorFirst]').val();
	var seniorLast = $('[name=seniorFirst]').val();
	
	var first = ($('[name=first]').val());
	var second = ($('[name=second]').val());
	var third = ($('[name=third]').val());
	var four = ($('[name=four]').val());
	var five = ($('[name=five]').val());
	var six = ($('[name=six]').val());
	seniorInterests = [first, second, third, four, five, six];
	
	
	var place = $('[name=place]').val();
	var entrance = $('[name=entrance]').val();
	console.log(event);
	Meteor.call('insert seniorInfo', email, seniorFirst, seniorLast, seniorInterests, place, entrance);
	FlowRouter.go('home');
	}
});