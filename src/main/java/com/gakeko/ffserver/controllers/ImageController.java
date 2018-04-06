package com.gakeko.ffserver.controllers;

import java.io.IOException;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.hibernate.Transaction;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;

import com.gakeko.ffserver.persistence.HibernateUtil;

import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.File;
import java.io.FileInputStream;
import com.gakeko.ffserver.entities.PhotoRegister;

import javax.servlet.http.HttpServletResponse;


@RestController
public class ImageController {
	
	//@ResponseBody (method = RequestMethod.GET, produces = MediaType.IMAGE_JPEG_VALUE)
	/*@RequestMapping(value="/getImage", method = RequestMethod.GET, produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] getImage() throws IOException {
    	//return "Hello, my image";
		InputStream in = getClass().getResourceAsStream("ftp://178.63.57.162/akvr/IMG_3120.JPG");
			    return IOUtils.toByteArray(in);
    }*/
	
	@RequestMapping(value = "/sid1", method = RequestMethod.GET,
            produces = MediaType.IMAGE_JPEG_VALUE)
    public void getImage1(HttpServletResponse response) throws IOException {

        ClassPathResource imgFile = new ClassPathResource("ftp://akvr:latecO20112017@178.63.57.162/akvr/IMG_3120.JPG");

        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(imgFile.getInputStream(), response.getOutputStream());
    }
	
	@RequestMapping(value = "/sid2", method = RequestMethod.GET,
            produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<InputStreamResource> getImage2() throws IOException {

        ClassPathResource imgFile = new ClassPathResource("ftp://akvr:latecO20112017@178.63.57.162/akvr/IMG_3120.JPG");

        return ResponseEntity
                .ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(new InputStreamResource(imgFile.getInputStream()));
    }
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/sid3", method = RequestMethod.GET,
            produces = MediaType.IMAGE_JPEG_VALUE)
    public void getImage3(HttpServletResponse response) throws IOException {

		File file = new File("E:\\img\\IMG_3121.JPG");
		FileInputStream fis = new FileInputStream(file);

        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(fis, response.getOutputStream());
    }
	
	//@CrossOrigin(origins = "http://localhost:4200")
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/getLeftPhoto", method = RequestMethod.GET,
            produces = MediaType.IMAGE_JPEG_VALUE)
    public void getLeftPhoto(HttpServletResponse response, @RequestParam(value="id") long id) throws IOException {
		
		PhotoRegister photoRegister = new PhotoRegister();

		try {
			Session session = HibernateUtil.getSessionFactory().openSession();
    		Transaction tx = session.beginTransaction();
    	
    		photoRegister = (PhotoRegister) session.createCriteria(PhotoRegister.class)
    				.add(Restrictions.eq("photoRegisterId", id))
    				.uniqueResult();
    		
    		
    		tx.commit();
    		session.close();
		} catch (Exception e) {
			e.printStackTrace();
			AppErrorController.description = e.toString()+ ":" + e.getMessage();
		}
		
		File file = new File(photoRegister.getPhotoRegisterLeftLocation());
		FileInputStream fis = new FileInputStream(file);

        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(fis, response.getOutputStream());
    }
	
	//@CrossOrigin(origins = "http://localhost:4200")
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/getRightPhoto", method = RequestMethod.GET,
            produces = MediaType.IMAGE_JPEG_VALUE)
    public void getRightPhoto(HttpServletResponse response, @RequestParam(value="id") long id) throws IOException {
		
		PhotoRegister photoRegister = new PhotoRegister();

		try {
			Session session = HibernateUtil.getSessionFactory().openSession();
    		Transaction tx = session.beginTransaction();
    	
    		photoRegister = (PhotoRegister) session.createCriteria(PhotoRegister.class)
    				.add(Restrictions.eq("photoRegisterId", id))
    				.uniqueResult();
    		
    		
    		tx.commit();
    		session.close();
		} catch (Exception e) {
			e.printStackTrace();
			AppErrorController.description = e.toString()+ ":" + e.getMessage();
		}
		
		File file = new File(photoRegister.getPhotoRegisterRightLocation());
		FileInputStream fis = new FileInputStream(file);

        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(fis, response.getOutputStream());
    }

}
