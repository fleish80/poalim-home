/**
 * Created by Pais on 10/10/2015.
 */

 var lang = 'HE';
 var languages = {
     'HE': 'he',
     'EN': 'en'
 };
 var RESOURCE = {
     he: {
         //global
         'global.firstName': 'שם פרטי',
         'global.lastName': 'שם משפחה',
     },
     en: {
     }
 };
angular.module('poalim-home').filter('trans', ['$scope', '$meteor',function ($scope, $meteor) {
                                                return function (input) {
                                                    return RESOURCE[languages[lang]][input];
                                                };
                                   }]);


