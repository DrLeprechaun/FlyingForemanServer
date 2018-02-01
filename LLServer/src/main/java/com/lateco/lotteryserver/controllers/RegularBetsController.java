package com.lateco.lotteryserver.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.SQLQuery;
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
		try {
			Session session = HibernateUtil.getSessionFactory().openSession();
    		session.beginTransaction();
    		
    		RegularBets rb = new RegularBets(userId, combination);
    		session.save(rb);
    		
    		session.close();
		} catch (Exception e){
			e.printStackTrace();
		}
		return new BasicResponse("SUCCESS", "");
	}
    /*public BasicResponse createRegularBet(@RequestParam(value="userId") long userId, @RequestParam(value="combination") int[] combination) {
		
			List<RegularBets> list = new ArrayList<RegularBets>();
			try {
				Session session = HibernateUtil.getSessionFactory().openSession();
	    		session.beginTransaction();
	    		
	    		Query query = session.createQuery("from RegularBets b");
	    		list = query.list();
	    		
	    		session.close();
			} catch (Exception e){
				e.printStackTrace();
			}
			return new BasicResponse("SUCCESS", list.get(0).getRegularBetsCombination().toString()); 	
	}*/
	

}
