package com.gakeko.ffserver.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import com.gakeko.ffserver.model.EchoModel;
//import ua.naiksoftware.example_server.model.EchoModel

@Service
public class SocketService {
	
	@Autowired
    private SimpMessagingTemplate simpTemplate;

    public void echoMessage(String message) {
        //log.debug("Start convertAndSend ${new Date()}")
    	System.out.println("Start convertAndSend");;
        simpTemplate.convertAndSend("/topic/greetings", new EchoModel(message));
        System.out.println("End convertAndSend");;
    }

}
