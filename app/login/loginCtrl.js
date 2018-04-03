angular.module("Mail")
.controller("loginCtrl", ["$scope", "$location", function($scope, $location) {
  $scope.vm = {
     formData: {
       email: '',
       password: ''
     },
    submit: function() {

       if($scope.vm.formData.email == "abc@xyz.com" && $scope.vm.formData.password == "asdf") {
         $location.path('/home');
       } else{
         $scope.error_message = "Please provide the correct credentails";
      $scope.vm.formData = "";
    }

    }
 };
}]);
