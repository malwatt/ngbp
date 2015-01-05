angular.module( 'ngSS.contacts', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'contacts', {
    url: '/contacts',
    views: {
      "main": {
        controller: 'ContactsCtrl',
        templateUrl: 'contacts/contacts.tpl.html'
      }
    },
    data:{ pageTitle: 'Contacts' }
  });
})

.controller( 'ContactsCtrl', function ContactsCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
