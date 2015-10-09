angular.module('poalim-home', ['angular-meteor', 'ui.router', 'ngMaterial']);

function onReady() {
    angular.bootstrap(document, ['poalim-home']);
}

if (Meteor.isCordova)
    angular.element(document).on("deviceready", onReady);
else
    angular.element(document).ready(onReady);