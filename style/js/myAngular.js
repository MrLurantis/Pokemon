/**
 * Created by HZYJKJ on 2018/1/17.
 */
var app = angular.module('myApp',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('img1',{
            url:'/img1',
            templateUrl:'views/img1.html'
        })
        .state('img2',{
            url:'/img2',
            templateUrl:'views/img2.html'
        })
        .state('img3',{
            url:'/img3',
            templateUrl:'views/img3.html'
        })
        .state('img4',{
            url:'/img4',
            templateUrl:'views/img4.html'
        })
        .state('img5',{
            url:'/img5',
            templateUrl:'views/img5.html'
        });
    $urlRouterProvider.otherwise('/img1');
});