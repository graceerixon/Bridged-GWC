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

//Template.info.events ({
	/**'click #communicationButton':function clickCom() {
			var communication = teenData.find({interests:{$all:["communication"]}}).fetch();
			for (var i = 0; i < communication.length; i++)
			{
				$( "#returnPeople" ).append("<p>" + communication[i] + "</p>");
			}
		},**/
//});

Template.info.helpers({
	groups: function displayTeens() {
		//var com = teenData.find({interests:{$all:["communication"]}}).fetch();
		var ten = teenData.find().fetch();
		//console.log(teens);
		return returnTeen(ten);
	}
});