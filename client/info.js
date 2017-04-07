import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { returnTeen } from './people.js';
import { teenData } from '../lib/teenData.js';

import './main.html';

Template.info.onCreated(function() {
	//this.state = new ReactiveDict();
	Meteor.subscribe("teenData");
});


Template.info.helpers({
	groups: function displayTeens() {
		var ten = teenData.find().fetch();
		return returnTeen(ten);
	}
});