var app = angular.module("angularApp", ["ngRoute"])
                .config(function ($routeProvider, $locationProvider) {

                    $routeProvider.caseInsensitiveMatch = true;
                     
                    $routeProvider
                    .when("/home", {
                        templateUrl: "Templates/home.html",
                        controller: "homeController"
                    })
                      
                    .when("/courses", {
                        templateUrl: "Templates/aboutus.html",
                        controller: "aboutusController"
                    })

                    .when("/students", {
                        templateUrl: "Templates/contact.html",
                        controller: "contactController"
                      
                    })

                    .when("/angular", {
                        templateUrl: "Templates/angular.html",
                        controller: "angularController"
                      
                    })
 
                    .otherwise({
                        redirectTo: "/home"
                    })

                   $locationProvider.html5Mode(true);
                })
                    


                        .controller("homeController", function ($scope) {
                        $scope.message = "Home Page";
                        })


                        .controller("aboutusController", function ($scope) {
                            $scope.courses = ["Web", "C#", "SQL", "VB"];
                        })


                        .controller("contactController", function ($scope) {
                            $scope.students = ["John", "Mary", "James", "Ellen"];
                        })

                        
                        .controller("angularController", function ($scope) {
                                                        
                            var employee = {
                                firstname: "John",
                                lastname: "Smith",
                                gender: "Male"
                            };
                            $scope.employee = employee;

                            $scope.message = "AngularJS Tutorial";


                            var country = {
                                    name: "USA",
                                    capital: "Washington",
                                    flag: "/Images/usa-flag.png"
                                };

                                $scope.country = country;



                                var employees = [
                                    {firstname: "Ben", lastname: "Hasting", gender: "Male", salary: 55000},
                                    {firstname: "Sara", lastname: "Paul", gender: "Female", salary: 68000},
                                    {firstname: "Mark", lastname: "Holland", gender: "Male", salary: 57000},
                                    {firstname: "Pam", lastname: "Macintosh", gender: "Female", salary: 53000},
                                    {firstname: "Todd", lastname: "Barber", gender: "Male", salary: 60000},
                                    {firstname: "Harry", lastname: "Hasting", gender: "Male", salary: 75000},

                                ];
                                            $scope.employees = employees

                                var technologies = [
                                        {name: "C#", likes: 0, dislikes: 0 },
                                        {name: "ASP.NET", likes: 0, dislikes: 0 },
                                        {name: "SQL Server", likes: 0, dislikes: 0 },
                                        {name: "AngularJS", likes: 0, dislikes: 0 },

                                ];

                                $scope.technologies = technologies;

                                $scope.incrementLikes = function (technology) {
                                    technology.likes++;
                                }

                                $scope.incrementDislikes = function (technology) {
                                    technology.dislikes++;
                                }

                                







                                var emps = [
                                    {name: "Ben", dateofBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.788},
                                    {name: "Sara", dateofBirth: new Date("May 23, 1970"), gender: "Female", salary: 68000},
                                    {name: "Mark", dateofBirth: new Date("August 23, 1967"), gender: "Male", salary: 57000},
                                    {name: "Pam", dateofBirth: new Date("November 23, 1990"), gender: "Female", salary: 53000},
                                    {name: "Todd", dateofBirth: new Date("November 23, 2001"), gender: "Male", salary: 60000},
                                    {name: "Harry", dateofBirth: new Date("November 23, 1977"), gender: "Male", salary: 75000},

                                ];

                                $scope.emps = emps;
                                $scope.rowLimit = 5;
                                
                                $scope.sortColumn = "name";

                                $scope.reverseSort = false;

                                $scope.sortData = function (column) {
                                    $scope.reverseSort = ($scope.sortColumn == column) ? !scope.reverseSort : false;
                                    $scope.sortColumn = column;
                                }

                                $scope.getSortClass = function (column){
                                    if($scope.sortColumn == column)
                                    {
                                        return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
                                    }
                                    return '';
                                }
                        
                            
                        });




app.controller('MainController', ['$scope', function($scope){
    $scope.timestamp = Date();
}]);
