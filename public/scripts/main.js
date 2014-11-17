/**
 * Created by Badar on 5/23/14.
 */

var compEmail=angular.module('compEmail',['ngRoute'])

      .config(['$routeProvider',function($routeProvider){

        $routeProvider
            .when('/',{
                       controller:'comEmailCtrl',
                       templateUrl:'partials/sendMessagePage.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])