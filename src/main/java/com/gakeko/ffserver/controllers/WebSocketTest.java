package com.gakeko.ffserver.controllers;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.gakeko.ffserver.entities.WebSocketTestEntity;

import java.net.URI;
import java.net.URISyntaxException;
import com.gakeko.ffserver.socket.WebSocketClientEndpoint;


@RestController
public class WebSocketTest {
	
	@RequestMapping("/websockettest")
    public WebSocketTestEntity testEntity(@RequestParam(value="content", defaultValue="OK") String content) {
        
		/*try {
			final WebSocketClientEndpoint clientEndPoint = new WebSocketClientEndpoint(new URI("ws://localhost:8080/"));
			

            // send message to websocket
			System.out.println("==========================================================");
			System.out.println(content);
            clientEndPoint.sendMessage(content);
            System.out.println("==========================================================");

            // wait 5 seconds for messages from websocket
            Thread.sleep(5000);
			
		} catch (Exception e) {
            System.err.println("URISyntaxException exception: " + e.getMessage());
        }*/
		
		return new WebSocketTestEntity(content);
    }

}
