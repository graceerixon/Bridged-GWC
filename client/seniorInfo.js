import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { returnSeniors } from './people.js';
import { seniorData } from '../lib/seniorData.js';

import './main.html';

Template.seniorInfo.onCreated(function() {
	//this.state = new ReactiveDict();
	Meteor.subscribe("seniorData");
});


Template.seniorInfo.helpers({
	groups: function displaySeniors() {
		var sen = seniorData.find().fetch();
		return returnSeniors(sen);
	}
});