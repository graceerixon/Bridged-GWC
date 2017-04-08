import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './main.html';


Template.senior.events({
	'submit form': function(event){
		event.preventDefault();
		var firstName = $('[name=firstName]').val();
		var lastName = $('[name=lastName]').val();
		interests = [];
		list = ($('[name=interests]:checked'));
		for (var i = 0; i < list.length; i++) {
			interests.push(list[i].value);
		}
	
		console.log(event);
		Meteor.call('insert seniorInfo', firstName, lastName, interests);
		FlowRouter.go('home');
	},
	
	'click #firstBox':function selectMeOne() {
		document.getElementById("firstBox").checked = !document.getElementById("firstBox").checked;
		var e = document.getElementById("firstBox");
		if (e.checked) {
			var already = document.getElementById("display").innerText;
			document.getElementById("display").innerText = already + "   Communication,";
		}
  },
  
	'click #secondBox': function selectMeTwo() {
		document.getElementById("secondBox").checked = !document.getElementById("secondBox").checked;
		var f = document.getElementById("secondBox");
		if (f.checked) {
			var already = document.getElementById("display").innerText;
			document.getElementById("display").innerText = already + "  The Internet,";
		}
	},
	
	'click #thirdBox': function selectMeThree() {
		document.getElementById("thirdBox").checked = !document.getElementById("thirdBox").checked;
		var g = document.getElementById("thirdBox");
		if (g.checked) {
			var already = document.getElementById("display").innerText;
			document.getElementById("display").innerText = already + "   Mobile Devices,";
		}
	},
	
	'click #fourBox': function selectMeFour() {
		document.getElementById("fourBox").checked = !document.getElementById("fourBox").checked;
		var h = document.getElementById("fourBox");
		if (h.checked) {
			var already = document.getElementById("display").innerText;
			document.getElementById("display").innerText = already + "   Social Media,";
		}
	},
	
	'click #fiveBox': function selectMeFive() {
		document.getElementById("fiveBox").checked = !document.getElementById("fiveBox").checked;
		var i = document.getElementById("fiveBox");
		if (i.checked) {
			var already = document.getElementById("display").innerText;
			document.getElementById("display").innerText = already + "   Computers,";
		}
	},
	
	'click #sixBox': function selectMeSix() {
		document.getElementById("sixBox").checked = !document.getElementById("sixBox").checked;
		var j = document.getElementById("sixBox");
		if (j.checked) {
			var already = document.getElementById("display").innerText;
			document.getElementById("display").innerText = already + "   Word Processing,";
		}
	}
});