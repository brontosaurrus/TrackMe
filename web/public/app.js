$('#navbar').load('navbar.html');
$('#footer').load('footer.html');

//const devices = JSON.parse(localStorage.getItem('devices')) || [];
const response = $.get('http://localhost:3001/devices');
//console.log(reponse);


$.get('http://localhost:3001/devices')
.then(response => {
	console.log(response);
})
.catch(error => {
	console.log(`Error: ${error}`);
});

	

$get('http://localhost:3001/devices')
.then(response => {
	reponse.forEach(device => {
		$('#devices tbody').append(`
		<tr>
			<td>${device.user}</td>
			<td>${device.name}</td>
		</tr>`
	);
	})
	.catch(error => {
		console.error(`Error: ${error}`);
	
})


$('#add-device').on('click', () => {
	const name = $('#name').val();
	const user = $('#user').val();
	const sensorData = [];
	const body = {
		name,
		user,
		sensorData
		};
		
		
$.post('http://localhost:3001/devices', body)
.then(response => {
	location.href = '/';
	})
	.catch(error => {
		console.error(`Error: ${error}`);
	});
});





$('#send-command').on('click', function() {
	const command = $('#command').val();
	console.log(`command is: ${command}`);
});

$('#register').on('click', () => {
	const username = $('#user').val();
	const password = $('#password').val();
	const confirm-password = $('#confirm-password').val();
	const users = JSON.parse(localStorage.getItem('users')) || [];
	const exists = users.find(user => user.name == username);
	if ( ( typeof exists == "undefined") && (password == confirm-password) ) {
			users.push({ username, password});
			localStorage.setItem('users', JSON.stringify(users));
			location.href = '/login';		}

});

$('#login').on('click', () => {
	const username = $('#user').val();
	const password = $('#password').val();
	const users = JSON.parse(localStorage.getItem('users')) || [];
	const exists = users.find(user => user.name == username);
	if (exists && exists.password == password) {
		localStorage.setItem('isAuthenticated', true);
		location.href = '/';
	} else {
		$('#message').append('<p class ="alert alert-danger">Authentication failed</p>');
	}
	
});

const logout = () => {
	localStorage.removeItem('isAuthenticated');
	location.href = '/login';
}
