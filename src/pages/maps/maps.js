// "use strict";

// angular.module('InstiMap',['uiGmapgoogle-maps'])
// 		// .config(function(uiGmapGoogleMapApiProvider) {
// 		// 	 uiGmapGoogleMapApiProvider.configure({
// 		// 	  key: 'AIzaSyAV9zfTlFe-7L6h0pohlbnXAy8qMojUBnU',
// 		// 	  v: '3.17',
// 		// 	  libraries: 'weather,geometry,visualization'
// 		// 	 });
// 		// 	})
// 		.controller("InstiMapController", function($scope, uiGmapGoogleMapApi) {
//   			var areaLat      = 12.995218,
// 		      areaLng      = 80.238010,
// 		      areaZoom     = 8;

// 		  	uiGmapGoogleMapApi.then(function(maps) {
// 		    	$scope.map     = { center: { latitude: areaLat, longitude: areaLng }, zoom: areaZoom };
// 		    	$scope.options = { scrollwheel: false };
// 		  	});

// 		});