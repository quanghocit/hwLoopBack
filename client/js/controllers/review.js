angular
  .module('app')
  .controller('AllReviewsController', ['$scope', 'Person', function ($scope, Person) {
    $scope.people = Person.find();
  }])
  .controller('AddReviewController', ['$scope', 'Person', '$state', function ($scope, Person, $state) {
    $scope.action = 'Add';

    $scope.submitForm = function () {
      Person
        .create({
          firstname: $scope.person.firstname,
          lastname: $scope.person.lastname,
        })
        .$promise
        .then(function () {
          console.log("Add person success");
          $state.go('all-person');
        });
    };
  }])
  .controller('DeleteReviewController', ['$scope', 'Person', '$state',
    '$stateParams', function ($scope, Person, $state, $stateParams) {
      Person
        .deleteById({id: $stateParams.id})
        .$promise
        .then(function () {
          $state.go('all-person');
        });
    }])
  .controller('EditReviewController', ['$scope', '$q', 'Person', '$stateParams', '$state',
    function ($scope, $q, Person, $stateParams, $state) {
      $scope.action = 'Edit';

      Person
        .findById({id: $stateParams.id})
        .$promise
        .then(function (data) {
          $scope.person = data;
        });

      $scope.submitForm = function () {
        $scope.person
          .$save()
          .then(function (person) {
            $state.go('all-person');
          });
      };
    }]);
