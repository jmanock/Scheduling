(function() {
  'use strict';

  angular
    .module('scheduling')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, Firebase, $firebaseObject, moment, toastr) {
    var booking = new Firebase('https://toga.firebaseio.com/booked');
    var ref = new Firebase('https://toga.firebaseio.com/days');
    var syncObject = $firebaseObject(ref);
    syncObject.$bindTo($scope,'days');

    var days = moment().format('dddd');


    $scope.booked = function(day, time, user){
      /* TODO
        * Needs to
          - style
          - have to change slots.booked to true on submit
          - needs to check to make sure info is filled out
      */

      booking.update({
        Day:day,
        Time:time,
        User:{
          Name:user.name,
          Email:user.email,
          PhoneNumber:user.phoneNumber
        }
      });
      console.log($scope.open($index));

    };
    $scope.open = false;

    $scope.reset = function(){
      ref.set({
        1:{
          name:'Tuesday',
          slots:{
            900:{
              time:'9:00am',
              booked:false
            },
            1000:{
              time:'10:00am',
              booked:false
            },
            1100:{
              time:'11:00am',
              booked:false
            },
            1200:{
              time:'12:00pm',
              booked:false
            },
            1300:{
              time:'1:00pm',
              booked:false
            },
            1400:{
              time:'2:00pm',
              booked:false
            },
            1500:{
              time:'3:00pm',
              booked:false
            },
            1600:{
              time:'4:00pm',
              booked:false
            },
            1700:{
              time:'5:00pm',
              booked:false
            },
            1800:{
              time:'6:00pm',
              booked:false
            }
          }
        },
        2:{
          name:'Thursday',
          slots:{
            900:{
              time:'9:00am',
              booked:false
            },
            1000:{
              time:'10:00am',
              booked:false
            },
            1100:{
              time:'11:00am',
              booked:false
            },
            1200:{
              time:'12:00pm',
              booked:false
            },
            1300:{
              time:'1:00pm',
              booked:false
            },
            1400:{
              time:'2:00pm',
              booked:false
            },
            1500:{
              time:'3:00pm',
              booked:false
            },
            1600:{
              time:'4:00pm',
              booked:false
            },
            1700:{
              time:'5:00pm',
              booked:false
            },
            1800:{
              time:'6:00pm',
              booked:false
            }
          }
        },
        3:{
          name:'Friday',
          slots:{
            900:{
              time:'9:00am',
              booked:false
            },
            1000:{
              time:'10:00am',
              booked:false
            },
            1100:{
              time:'11:00am',
              booked:false
            },
            1200:{
              time:'12:00pm',
              booked:false
            },
            1300:{
              time:'1:00pm',
              booked:false
            },
            1400:{
              time:'2:00pm',
              booked:false
            },
            1500:{
              time:'3:00pm',
              booked:false
            },
            1600:{
              time:'4:00pm',
              booked:false
            },
            1700:{
              time:'5:00pm',
              booked:false
            },
            1800:{
              time:'6:00pm',
              booked:false
            }
          }
        }
      });
    };

    if(days === 'Saturday'){
       $scope.reset();
       booking.remove();
    }
  }

})();
