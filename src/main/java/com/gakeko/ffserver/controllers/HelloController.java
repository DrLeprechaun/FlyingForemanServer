package com.gakeko.ffserver.controllers;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.gakeko.ffserver.entities.Hello;
import com.gakeko.ffserver.entities.HelloMessage;


@Controller
public class HelloController {
	
	@MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public Hello greeting(HelloMessage message) throws Exception {
        Thread.sleep(1000); // simulated delay
        return new Hello("Hello, " + message.getName() + "!");
    }

}
