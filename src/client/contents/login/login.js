'use strict'

// import controller from 'Controller'

function initialize( ){	
	let login = new Login();
	login.initialize();
}

class Login{

	constructor(  ){
		;
	}

	initialize( ){
		controller.loadAllUsers( this, function( self, users ){
			// loaded all users
			let root = d3.select("#contents");
			self.createContents( root );
			self.updateSelect( users );
		});
	}
	
	onClickButtonForLogin( self ){
		let selectedOption = self.getSelectedOption();
		controller.login( self, selectedOption.value, function( self, result ){
			// logged in
			if( result.success ){
				self.moveToNextContents();
			}else{
				console.error( result );
			}
		});
	}

	moveToNextContents(){
		window.location.href = "../menu/menu.html";
	}

	/**
	 *	Contents
	 */
	createContents( root ){
		root.selectAll().remove();

		root.append("div").classed("title", true).text("Login to Equip Manager");

		let form = root.append("form");
		
		form.append("div").text("User Name: ");
		
		let list = form.append("select").attr("id", "idNameSelect").attr("name", "list").attr("size", "1");
		
		let button = form.append("input").attr("type", "button")
			.attr("value", "login");

		let self = this;
		button.node().addEventListener("click", function(){
			self.onClickButtonForLogin(self);
		});
	}

	updateSelect( users ){
		let select = d3.select("#idNameSelect");
		select.selectAll().remove();

		for( var user of users ){
			select.append("option").attr("value", user).text(user);
		}
	}

	getSelectedOption(){
		let select = d3.select("#idNameSelect");
		let options = select.selectAll("option");
		return options[ select.node().selectedIndex ];
	}

}