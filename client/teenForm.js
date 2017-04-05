import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { selectMeOne } from './boxes.js';

import './main.html';


Template.teenForm.events({

  'submit form': function(event){
    event.preventDefault();
	var email = ($('[name=email]').val());
	var firstName = $('[name=firstName]').val();
	var lastName = $('[name=lastName]').val();
	
	var firstBox = ($('[name=firstBox]').val());
	var secondBox = ($('[name=secondBox]').val());
	var thirdBox = ($('[name=thirdBox]').val());
	var fourBox = ($('[name=fourBox]').val());
	var fiveBox = ($('[name=fiveBox]').val());
	var sixBox = ($('[name=sixBox]').val());
	interests = [firstBox, secondBox, thirdBox, fourBox, fiveBox, sixBox];
  
	var phone = $('[name=phone]').val();
	var zip = $('[name=zip]').val();
	var age = $('[name=age]').val();
	var school = $('[name=school]').val();
	var answer = $('[name=answer]').val();
	
	console.log(event);
	Meteor.call('insert teenInfo', email, firstName, lastName, interests, phone, zip, age, school, answer);
	FlowRouter.go('home');
	},
  });