package com.gakeko.ffserver.entities;


import java.util.List;

public class PhotoRegisterResponse extends BasicResponse {
	
	private final List<PhotoRegister> photoRegisterList;
	
	public PhotoRegisterResponse(String status, String description, List<PhotoRegister> photoRegisterList) {
		super.setStatus(status);
		super.setDescription(description);
		this.photoRegisterList = photoRegisterList;
	}
	
	public List<PhotoRegister> getPhotoRegisterList() {
		return this.photoRegisterList;
	}

}
