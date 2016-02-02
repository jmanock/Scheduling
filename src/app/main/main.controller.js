(function() {
  'use strict';

  angular
    .module('scheduling')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, Firebase, $firebaseObject, moment, toastr) {
    var ref = new Firebase('https://toga.firebaseio.com/days');
    var syncObject = $firebaseObject(ref);
    syncObject.$bindTo($scope,'days');

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    if(dd<10){
      dd='0'+dd;
    }
    if(mm<10){
      mm='0'+mm;
    }
    today = mm+'/'+dd+'/'+yyyy;

    var something = moment().format('MMM Do YY'+' dddd');



    $scope.booked = function(day, time){
      /* TODO
      ** Is this going to be for client or owner???
      **
        * Needs to
          - Chang to every week with dates?
          - Take a name
          - Take a phone number
          - accept or decline
          - Take the reset button off
      */
      toastr.info(day,time);

    };

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

  }
})();
