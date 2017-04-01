import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './main.html';


Template.teenForm.events({
  'submit form': function(event){
    event.preventDefault();
	var email = ($('[name=email]').val());
    var password = $('[name=password]').val();
	var firstName = $('[name=firstName]').val();
	var lastName = $('[name=lastName]').val();
	var phone = $('[name=phone]').val();
	var zip = $('[name=zip]').val();
	var age = $('[name=age]').val();
	var school = $('[name=school]').val();
	var answer = $('[name=answer]').val();
	console.log(event);
    Accounts.createUser({
      email: email,
      password: password
    }, function(error){
		strengths = [first, second, third, fourth, fifth];
		Meteor.call('insert teenInfo', firstName, lastName, phone, zip, age, school, answer);
		if(error){
			console.log(error.reason);
		} else {
			FlowRouter.go('home');
		}
	});
    }
  });