import { Meteor } from 'meteor/meteor';

import { teenData } from '../lib/teenData.js';
//import { seniorData } from '../lib/seniorData.js';
import { contactUs } from '../lib/contactUs.js';
import { admin } from '../lib/admin.js';

Meteor.startup(() => {
  if (Meteor.isServer) {
	Meteor.publish('seniorData', function publication() {
		return seniorData.find();
	});
	}
	
	if (Meteor.isServer) {
	Meteor.publish('teenData', function publication() {
		return teenData.find();
	});
	}
	
	if (Meteor.isServer) {
	Meteor.publish('contactUs', function publication() {
		return contactUs.find();
	});
	}
	
	if (Meteor.isServer) {
	Meteor.publish('admin', function publication() {
		return admin.find();
	});
	}
	
	Meteor.methods({
		'insert teenInfo': function(email, firstName, lastName, interests, phone, zip, age, school, answer) {
			teenData.insert({
				userId: Meteor.userId(),
				email: email,
				firstName: firstName,
				lastName: lastName,
				interests: interests,
				phone: phone,
				age: age,
				school: school,
				answer: answer
			});
		}
	});
	
	Meteor.methods({
		'insert seniorInfo': function(email, seniorFirst, seniorLast, seniorInterests, place, entrance) {
			seniorData.insert({
				userId: Meteor.userId(),
				seniorFirst: seniorFirst,
				seniorLast: seniorLast,
				seniorInterests: seniorInterests,
				place: place,
				entrance: entrance
			});
		}
	});
	
	Meteor.methods({
		'insert contactUs': function(name, message) {
			contactUs.insert({
				userId: Meteor.userId(),
				name: name,
				message: message
			});
		}
	});
	
	Meteor.methods({
		'insert admin': function(email, password) {
			admin.insert({
				userId: Meteor.userId(),
				email: email,
				password: password
			});
		}
	});
	
});
