'use strict'

// import Command from 'command/command'
// import CommandSender from 'command/ommandSender'

class Controller{

	constructor(){
		this.commandSender = new CommandSender();
	}

	loadAllUsers( self, callback ){
		// let command = new Command( Command.Type.GET_ALL_USERS );
		// this.commandSender.sendCommand( command, function( command, response ){
		// 	callback( self, response.users );
		// });
		let users = ["taro", "hanako", "takashi"];
		callback( self, users );
	}

	login( self, user, callback ){
		// let command = new Command( Command.Type.LOGIN );
		// command.setParameter( "user", user );
		// this.commandSender.sendCommand( command, function( command, response ){
		// 	callback( self, true );
		// });
		let result = {};
		result.success = true;
		callback( self, result );
	}
}

//export let contoller = new Controller();
var controller = new Controller();
