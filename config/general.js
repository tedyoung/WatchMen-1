module.exports = {
	'notifications' : {
		enabled: true, //if disabled, no notifications will be sent
		to: ['tyoung@guidewire.com'], //default notification list if no alert_to is specified for host or url
		postmark : {
			from: 'tyoung@guidewire.com',
			api_key : 'a626753d-705e-492b-8a2a-181ced4128a4'
		}
	}
};
