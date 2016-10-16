var app = angular.module('SiteApp');

app.controller('MainController', MainController );

MainController.$inject = ['$scope', '$rootScope', '$route', '$routeParams', '$location', '$http' ];
function MainController($scope, $rootScope, $route, $routeParams, $location, $http ) {
	
	var vm = this;
	
	$scope.$route = $route;
	$scope.$location = $location;
    	$scope.$routeParams = $routeParams;


	// RESUME OBJECT
	vm.resume = {}
	vm.resume.objective = "Philadelphia based Software Engineer dedicated to designing, implementing, and maintaining powerful technologies that demonstrate expansive functionality with minimal, clean, user experiences.  Driven, creative, and social, enjoys working in a collaborative environment that continuously encourages learning."

	vm.resume.experiences = [

		{
			job: 'Bypass Mobile / Parametric Dining LLC',
			job_location: 'Philadelphia, PA',
			job_title: 'Software Engineer',
			duration: 'Jan 2014 - Present',
			details: [
				'Designed, implemented, and maintained a web-based, client-facing, admin tool',
				'Designed, expanded, and maintained API and Database Schema',
				'Designed, expanded, and maintained Crons, Message Passing System, Dynamic Reporting System',
				'Assisted workflow of development and production environments'
			]
		},{       
			job: 'ScienceTap Application',
            job_location: 'Philadelphia, PA',
            job_title: 'Team Lead',
			duration: 'Sep 2012 - Sep 2015',
            details: [
				'Founded project, assembled, and managed team and clients',
				'Designed and developed iOS mobile app for Temple University and the NSF',
				'Won 2nd Place Future of Computing Competition at Temple University',
				'Funded by Temple University and National Science Foundation'
            ]
        },{       
			job: 'Research Experience for Undergraduates Program',
            job_location: 'Philadelphia, PA',
            job_title: 'Research Assistant',
			duration: 'June 2014 - Sep 2014',
            details: [
				'Assisted Dr. Justin Shi of Temple University with research on minimalistic UI/UX interaction',
				'Funded by the National Science Foundation'
            ]
        },{
            job: 'GSW Advertising',
            job_location: 'Newtown, PA',
            job_title: 'Graphic Design Intern',
            duration: 'June 2011 - Sep 2011',
            details: [
				'Assisted Art Director Noah Spring, proofed graphics, and contributed to product reviews',
				'Designed and implemented a campaign and pitch for Xanax XR for review by team',
				'Studied principles of effective and engaging graphic design'
            ]
        }

	];

	vm.resume.education = [
		{
			institution: 'Temple University, Philadelphia PA',
			degree: 'BS Computer and Information Science',
			minor: 'Minor in Italian Language',
			year: 'June 2015'
		}
	];
	vm.resume.skills = "JS, AngularJS, Angular Material, Node.js, PHP, SQL, MySQL, Python, HTML5, CSS3, Java, C, Swift, Git, Amazon Web Services EC2 and S3, RabbitMQ, Bootstrap, Underscore, Backbone, JIRA, Confluence, Phonegap, Raspberry Pi, Adobe Photoshop, Adobe InDesign";
	//vm.resume.skills = ['JS', 'AngularJS', 'Angular Material', 'Node.js', 'PHP', 'SQL', 'MySQL', 'Python', 'HTML5', 'CSS3', 'Java', 'C', 'Swift', 'Git', 'Amazon Web Services EC2 and S3', 'RabbitMQ', 'Bootstrap', 'Underscore', 'Backbone', 'JIRA', 'Confluence', 'Phonegap', 'Raspberry Pi', 'Adobe Photoshop', 'Adobe InDesign'];

};
