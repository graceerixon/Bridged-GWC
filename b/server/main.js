import { Meteor } from 'meteor/meteor';

export const seniorData = new Mongo.Collection('seniorData');
export const teenData = new Mongo.Collection('teenData');

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
	
	Meteor.methods({
		'insert teenInfo': function(firstName, lastName, phone, zip, age, school, answer) {
			Strengths.insert({
				userId: Meteor.userId(),
				firstName: firstName,
				lastName: lastName,
				phone: phone,
				age: age,
				school: school,
				answer: answer
			});
		}
	});
	
	Meteor.methods({
		'insert seniorInfo': function(seniorFirst, seniorLast, entrance) {
			Strengths.insert({
				userId: Meteor.userId(),
				seniorFirst: seniorFirst,
				seniorLast: seniorLast,
				entrance: entrance
			});
		}
	});
	
});
