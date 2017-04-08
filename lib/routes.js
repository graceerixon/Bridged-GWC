import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: "home",
  action: function() {
    BlazeLayout.render("content", {content: "home"});
  }
});

FlowRouter.route('/about', {
  name: "about",
  action: function() {
    BlazeLayout.render("content", {content: "about"});
  }
});

FlowRouter.route('/teen', {
  name: "teenForm",
  action: function() {
    BlazeLayout.render("content", {content: "teenForm"});
  }
});

FlowRouter.route('/senior', {
  name: "senior",
  action: function() {
    BlazeLayout.render("content", {content: "senior"});
  }
});

FlowRouter.route('/contact', {
  name: "contactUs",
  action: function() {
    BlazeLayout.render("content", {content: "contactUs"});
  }
});

FlowRouter.route('/info', {
  name: "info",
  action: function() {
    BlazeLayout.render("content", {content: "info"});
  }
});

FlowRouter.route('/admin', {
  name: "admin",
  action: function() {
    BlazeLayout.render("content", {content: "admin"});
  }
});

FlowRouter.route('/seniorInfo', {
  name: "seniorInfo",
  action: function() {
    BlazeLayout.render("content", {content: "seniorInfo"});
  }
});

FlowRouter.route('/login', {
  name: "adminLogin",
  action: function() {
    BlazeLayout.render("content", {content: "adminLogin"});
  }
});