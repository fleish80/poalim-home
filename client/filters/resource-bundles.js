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
         'projectTypes.luxuryProject':'פרויקט יוקרה'
     },
     en: {
     }
 };
angular.module('poalim-home').filter('trans',function () {
                                                return function (input) {
                                                    return RESOURCE[languages[lang]][input];
                                                };
                                   });


