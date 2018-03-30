package com.gakeko.ffserver.controllers;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.ArrayList;
import com.gakeko.ffserver.entities.PhotoRegister;
import com.gakeko.ffserver.entities.PhotoRegisterResponse;
import com.gakeko.ffserver.persistence.HibernateUtil;

@RestController
public class PhotoRegisterController {
	
	@ExceptionHandler
	@CrossOrigin
	@RequestMapping("/getPhotoRegister")
	public PhotoRegisterResponse getPhotoRegister(/*@RequestParam(value="userId") long id*/) {
		
		List<PhotoRegister> photoRegisterList = new ArrayList<PhotoRegister>();
		
		try {
			Session session = HibernateUtil.getSessionFactory().openSession();
    		session.beginTransaction();
    	
    		Query query = session.createQuery("from PhotoRegister");
    		photoRegisterList = query.list();
    		session.close();
		} catch (Exception e) {
			e.printStackTrace();
			AppErrorController.description = e.toString()+ ":" + e.getMessage();
		}
		
		return new PhotoRegisterResponse("SUCCESS", "", photoRegisterList);
	}

}
