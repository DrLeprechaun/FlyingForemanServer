package com.lateco.lotteryserver.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lateco.lotteryserver.entities.BasicResponse;
import com.lateco.lotteryserver.entities.PlayerAmount;
import com.lateco.lotteryserver.entities.Players;
import com.lateco.lotteryserver.entities.RegularBets;
import com.lateco.lotteryserver.persistence.HibernateUtil;

@RestController
public class RegularBetsController {
	
	@RequestMapping("/createRegularBet")
    public BasicResponse createRegularBet(@RequestParam(value="userId") long userId, @RequestParam(value="combination") int[] combination) {
		
		RegularBets regularBet = new RegularBets(userId, combination);
		//RegularBets regularBet = new RegularBets(userId, new ArrayList<>(Arrays.asList(combination.split(","))));
		
		try {
    		Session session = HibernateUtil.getSessionFactory().openSession();
    		session.beginTransaction();
    	
    		session.save(regularBet);
    		session.close();
    		} catch (Exception e) {
    			e.printStackTrace();
    			
    		}
			return new BasicResponse("SUCCESS", ""); 	
	}

}
