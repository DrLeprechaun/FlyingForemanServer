package com.gakeko.ffserver.model;

public class CommandDescriptor {
	
	private String commandName;
	
	public CommandDescriptor() {
		this.commandName = "";
	}
	
	public CommandDescriptor(int cmd) {
		switch (cmd) {
		case 0: {
			this.commandName = "stop";
			break;
		}
		case 1: {
			this.commandName = "start";
			break;
		}
		case 2: {
			this.commandName = "up";
			break;
		}
		case 3: {
			this.commandName = "down";
			break;
		}
		case 4: {
			this.commandName = "left";
			break;
		}
		case 5: {
			this.commandName = "forward";
			break;
		}
		case 6: {
			this.commandName = "right";
			break;
		}
		default : {
			this.commandName = "";
			break;
		}
		}
	}
	
	public String getCommandName() {
		return this.commandName;
	}
	
	public void setCommandName(String commandName) {
		this.commandName = commandName;
	}

}
