package com.gakeko.ffserver.controllers;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.gakeko.ffserver.entities.Greeting;

//import groovy.util.logging.Log4j
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
//import ua.naiksoftware.example_server.model.EchoModel;
//import ua.naiksoftware.example_server.service.SocketService;
import com.gakeko.ffserver.model.EchoModel;
import com.gakeko.ffserver.model.ResponseModel;
import com.gakeko.ffserver.service.SocketService;

@RestController
class GreetingController {


    @Autowired
    SocketService socketService;

    @MessageMapping("/hello-msg-mapping")
    @SendTo("/topic/greetings")
    EchoModel echoMessageMapping(String message) {
        //log.debug("React to hello-msg-mapping")
    	System.out.println("React to hello-msg-mapping");
        return new EchoModel(message.trim());
    }

    @RequestMapping(value = "/hello-convert-and-send", method = RequestMethod.POST)
    void echoConvertAndSend(@RequestParam("msg") String message) {
        socketService.echoMessage(message);
    }
    
    @RequestMapping(value = "/echoTest")
    public String echoTest(@RequestParam("msg") String message) {
    	socketService.echoMessage(message);
    	return new String(message.trim());
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/webTest")
    public ResponseModel webTest() {
    	socketService.echoMessage("command1");
    	return new ResponseModel("SUCCESS", "Command submitted");
    }
}
