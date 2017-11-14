package com.gakeko.ffserver.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.gakeko.ffserver.properties.WebPortalProperties;

@RestController
public class WebPortalController {

	@Autowired
	WebPortalProperties props;
	
	@RequestMapping("/hello")
	public String hello(@RequestParam String name) {
		return props.getGreeting()+name;
	}
}