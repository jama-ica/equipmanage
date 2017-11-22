'use strict'

class Command{

	static get Type(){
		return {
			LOGIN : "login",
			LOGOUT : "logout",
			GET_ALL_USERS : "getAllUsers"
		};
	}

	constructor( type, parameters ){
		// 必ず parameters を先に初期化
		this.parameters = (parameters == null)? {} : parameters;
		this.setType( type );
	}

	// type
	getType(){
		return this.getParameter( "command" );
	}
	setType( type ){
		this.setParameter( "command", type );
	}

	// parameters
	getParameters(){
		return this.parameters;
	}
	setParameters( parameters ){
		this.parameters = parameters;
	}

	// parameter
	getParameter( key ){
		return this.parameters[key];
	}
	setParameter( key, value ){
		this.parameters[key] = value;
	}

}