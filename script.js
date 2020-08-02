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
      image: "https://d3v93rzqvnwm3k.cloudfront.net/photos/images/c4f43cf93452db224a18cb51d027f22c_three_column.jpg"
    },
    {
      year: 1997,
      title: "Named 'Shrutika' meaning 'Silent'(lol).",
      image: "https://d3v93rzqvnwm3k.cloudfront.net/photos/images/f697fcc06aec128ad08a41bc0fedf325_three_column.jpg"
    },
    {
      year: 1999,
      title: "Kindergarten Girl.",
      image: "https://harvardgazette.files.wordpress.com/2013/09/090913_gates_archives_019_605.jpg"
    },
    {
      year: 1975,
      title: "Micro-Soft is formed, a partnership between Bill Gates and Paul Allen.",
      image:"https://d3v93rzqvnwm3k.cloudfront.net/photos/images/4a8aa7ff781018b94613c59a6def695c_three_column.jpg"
    },
    // {
    //   year: 1976,
    //   title: "Writes \"Open Letter to Hobbyists\"."
    // },
    {
      year: 1978,
      title: "Opens first international office in Japan.",
      image: "https://d3v93rzqvnwm3k.cloudfront.net/photos/images/1ad4b83971a6cc72d507d50740a87771_three_column.jpg"
    },
    {
      year: 1979,
      title: "Relocates headquarters to Bellevue, Washington.",
      image:"https://media.licdn.com/mpr/mpr/shrinknp_800_800/AAEAAQAAAAAAAAKdAAAAJDNjNzZjYmU5LTgwMjAtNDFjZi1hZDU3LTNjYzk5ZTRmNmJiYQ.jpg"
    },
    {
      year: 1980,
      title: "Microsoft partners with IBM to write BASIC for the IBM PC.",
      image: "http://www.computerhistory.org/atchm/wp-content/uploads/2013/12/IMG_19771.jpg"
    },
    {
      year: 1981,
      title: "Microsoft becomes incorporated and Bill Gates becomes President.",
      image: "http://b-i.forbesimg.com/clareoconnor/files/2013/04/bill-gates-paul-allen-1981.jpg"
    },
    {
      year: 2019,
      title: "February - Bhandardara.",
      image: "https://expert4data.files.wordpress.com/2014/01/pc.jpg"
    },
    // {
    //   year: 1989,
    //   title: "Bill Gates founds Corbis, an archive of art and photography."
    // },
    {
      year: 2020,
      title: "January - Saguna Baug.",
      image: "F:\Prasad\IITB Tut\two\shrutikakadam.github.io\pics\3.jpeg"
    },
    {
      year: 2020,
      title: "Almost a Dentist.",
      image: "https://3.bp.blogspot.com/-0xhmNGVGY2Q/Uh0R-eVLnsI/AAAAAAAAAbs/IqAeNiM58KM/s640/2.JPG"
    },
    {
      year: 2020,
      title: "Foodie turns 24.",
      image: "http://www.jeremyperson.com/wp-content/uploads/2009/07/bill-gates-commencement.jpg"
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