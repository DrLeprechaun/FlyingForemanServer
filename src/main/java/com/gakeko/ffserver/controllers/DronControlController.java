package com.gakeko.ffserver.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.gakeko.ffserver.entities.Greeting;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.gakeko.ffserver.model.EchoModel;
import com.gakeko.ffserver.model.ResponseModel;
import com.gakeko.ffserver.model.CommandDescriptor;
import com.gakeko.ffserver.service.SocketService;


@RestController
public class DronControlController {
	
	@Autowired
    SocketService socketService;
	
	@CrossOrigin
	@RequestMapping(value = "/executeCommand")
    public ResponseModel echoTest(@RequestParam("cmd") int cmd) {
		CommandDescriptor commandDescriptor = new CommandDescriptor(cmd);
    	socketService.echoMessage(commandDescriptor.getCommandName());
		return new ResponseModel("SUCCESS", "Command submitted: " + commandDescriptor.getCommandName());
    }

}
