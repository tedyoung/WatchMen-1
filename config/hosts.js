var one_minute = 60; // 60 seconds
var ten_minutes = 10 * one_minute;
var half_hour = 30 * one_minute;

//service name must be unique for a certain host.
//host name must be unique
module.exports =
	[
		{
			name: 'FNOL on tyoung-t3500',
			host: 'tyoung-t3500',
			port: 8082,
			ping_service_name: 'http',
			timeout:10000,
			ping_interval: one_minute,
			failed_ping_interval: one_minute,
			enabled: true,
			services : [
				{
					name: 'FNOL Search Page',
					method: 'get',
					url : '/search.html',
					expected: {statuscode: 200, contains: 'FNOL Wizard'}
				}
			]
		} ,
		{
			name: 'ClaimCenter FNOL API',
			host: 'tyoung-t3500',
			port: 8080,
			ping_service_name: 'http',
			timeout: 10000,
			ping_interval: one_minute,
			failed_ping_interval: one_minute,
			warning_if_takes_more_than: 3000, //miliseconds
			enabled: true,
			services : [
				{
					name: 'Auto Claim API (WS)',
					method: 'get',
					url : '/cc/ws/gw/webservice/edge/fnol/IAutoClaimAPI?WSDL',
					expected: {statuscode: 200, contains: 'wsdl:operation name="getTypelistByName"'}
				}
			]
		} ,
		{
			name: 'Tomcat EDGE Server',
			host: 'labsci2',
			port: 8082,
			ping_service_name: 'http',
			timeout: 10000,
			ping_interval: one_minute,
			failed_ping_interval: one_minute,
			enabled: true,
			services : [
				{
					name: 'Launcher Home Page',
					method: 'get',
					url : '/launcher/login.htm',
					expected: {statuscode: 200, contains: '<h1>Guidewire Labs - Edge Apps</h1>'}
				},
				{
					name: 'Consumer Portal',
					method: 'get',
					url: '/consumer/login.htm',
					expected: {statuscode: 200, contains: '<title>Consumer'}
				}
			]
		} ,
		{
			name:'form post test',
			host: 'hroch486.icpf.cas.cz',
			port:80,
			ping_service_name: 'http',
			ping_interval: one_minute,
			failed_ping_interval: one_minute / 3,
			enabled: false,
			services : [
				{
					name: 'post',
					method: 'get',
					url : '/formpost.html',
					expected: {statuscode: 200, contains: 'Test Form -- POST method'}
				},
				{
					name: 'post with data',
					method: 'post',
					input_data : 'your_name=Ivan&fruit=Banana',
					content_type : 'application/x-www-form-urlencoded', // application/json
					url : '/cgi-bin/echo.pl',
					expected: {statuscode: 200, contains: 'your_name = Ivan'}
				}
			]
		}
	];