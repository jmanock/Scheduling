angular.module('scheduleApp', ['firebase'])
.controller('mainController', function($scope, $firebase){
  var ref = new Firebase('https://toga.firebaseio.com');
  var fb = $firebase(ref);

  var syncObject = fb.$asObject();
  syncObject.$bindTo($scope, 'days');

  $scope.sch = function(){
    console.log('hello friend');
  };

  $scope.reset = function() {
    fb.$set({
      tuesday: {
        name: 'Tuesday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      },
      thursday: {
        name: 'Thursday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      },
      friday:{
        name:'Friday',
        slots:{
          0900:{
            time:'9:00am',
            booked:false
          },
          0110:{
            time:'11:00am',
            booked:false
          }
        }
      }
    });

  };

});
