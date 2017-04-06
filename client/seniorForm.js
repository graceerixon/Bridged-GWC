import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './main.html';


Template.seniorForm.events({
  'submit form': function(event){
    event.preventDefault();
	var email = ($('[name=email]').val());
	var seniorFirst = $('[name=seniorFirst]').val();
	var seniorLast = $('[name=seniorLast]').val();
	
	//var first = ($('[name=first]').val());
	//var second = ($('[name=second]').val());
	//var third = ($('[name=third]').val());
	//var four = ($('[name=four]').val());
	//var five = ($('[name=five]').val());
	//var six = ($('[name=six]').val());
	seniorInterests = [];
	list2 = ($('[name=seniorInterests]:checked'));
	for (var i = 0; i < list2.length; i++) {
		seniorInterests.push(list2[i].value);
	}
	
	
	
	var place = $('[name=place]').val();
	var entrance = $('[name=entrance]').val();
	console.log(event);
	Meteor.call('insert seniorInfo', email, seniorFirst, seniorLast, seniorInterests, place, entrance);
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
		var e = document.getElementById("secondBox");
		if (e.checked) {
			var already2 = document.getElementById("display").innerText;
			document.getElementById("display").innerText = already2 + "  The Internet,";
		}
	},
	
	'click #thirdBox': function selectMeThree() {
		document.getElementById("thirdBox").checked = !document.getElementById("thirdBox").checked;
		var e = document.getElementById("thirdBox");
		if (e.checked) {
			var already = document.getElementById("display").innerText;
			document.getElementById("display").innerText = already + "   Mobile Devices,";
		}
	},
	
	'click #fourBox': function selectMeFour() {
		document.getElementById("fourBox").checked = !document.getElementById("fourBox").checked;
		var e = document.getElementById("fourBox");
		if (e.checked) {
			var already = document.getElementById("display").innerText;
			document.getElementById("display").innerText = already + "   Social Media,";
		}
	},
	
	'click #fiveBox': function selectMeFive() {
		document.getElementById("fiveBox").checked = !document.getElementById("fiveBox").checked;
		var e = document.getElementById("fiveBox");
		if (e.checked) {
			var already = document.getElementById("display").innerText;
			document.getElementById("display").innerText = already + "   Computers,";
		}
	},
	
	'click #sixBox': function selectMeSix() {
		document.getElementById("sixBox").checked = !document.getElementById("sixBox").checked;
		var e = document.getElementById("sixBox");
		if (e.checked) {
			var already = document.getElementById("display").innerText;
			document.getElementById("display").innerText = already + "   Word Processing,";
		}
	}
});