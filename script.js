angular.module('app', ['ngMaterial']);

angular.module('app').controller("mainCtrl", mainCtrl);

angular.module('app').config(config);

function mainCtrl($mdSidenav){
  var vm = this;
  
  vm.openLeftMenu = openLeftMenu;
  vm.menuOpened = false;
  vm.historyTiles = [
    {
      year: 1997,
      title: "A foodie is born.",
      image: "pics/1.jpg"
    },
    {
      year: 1997,
      title: "Named 'Shrutika' meaning 'Silent'(lol).",
      image: "pics/2.jpg"
    },
    {
      year: 1999,
      title: "Kindergarten Girl.",
      image: "pics/3.jpg"
    },
    {
      year: 2013,
      title: "School Ends.",
      image:"pics/4.jpg"
    },
    // {
    //   year: 1976,
    //   title: "Writes \"Open Letter to Hobbyists\"."
    // },
    {
      year: 2015,
      title: "16th February",
      image: "pics/5.jpg"
    },
    {
      year: 2015,
      title: "12th Ends.",
      image:"pics/6.jpg"
    },
    {
      year: 2016,
      title: "4th August - LOL",
      image: "pics/7.jpg"
    },
    {
      year: 2016,
      title: "Becoming a Dentist",
      image: "pics/8.jpg"
    },
    {
      year: 2019,
      title: "February - Bhandardara.",
      image: "pics/9.jpg"
    },
    // {
    //   year: 1989,
    //   title: "Bill Gates founds Corbis, an archive of art and photography."
    // },
    {
      year: 2020,
      title: "January - Saguna Baug.",
      image: "pics/10.jpg"
    },
    {
      year: 2020,
      title: "Almost a Dentist.",
      image: "pics/11.jpg"
    },
    {
      year: 2020,
      title: "Foodie turns 23.",
      image: "pics/12.jpg"
    },
  ];
  
  // Sidenav
  function openLeftMenu() {
    $mdSidenav('left').toggle();
    // vm.menuOpened = !vm.menuOpened;
  }
}
mainCtrl.$inject = ["$mdSidenav"];

function config($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('grey', {
      'default': '100',
      'hue-1': '100',
      'hue-2': '600',
      'hue-3': 'A100'
    });
}

config.$inject = ["$mdThemingProvider"];
