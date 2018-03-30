package com.gakeko.ffserver.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.SEQUENCE;
import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import java.util.Date;

@Entity
@Table(name = "photo_register")
public class PhotoRegister implements Serializable {
	
	private Long photoRegisterId;
	private String photoRegisterLeftName;
	private String photoRegisterRightName;
	private String photoRegisterLeftLocation;
	private String photoRegisterRightLocation;
	private BigDecimal photoRegisterAzimuth;
	private BigDecimal photoRegisterXCoordinate;
	private BigDecimal photoRegisterYCoordinate;
	private Date photoRegisterLeftTs;
	private Date photoRegisterRightTs;
	private BigDecimal photoRegisterDistance;
	private Long photoRegisterUserId;
	
	public PhotoRegister(Long photoRegisterId, String photoRegisterLeftName, String photoRegisterRightName,
			String photoRegisterLeftLocation, String photoRegisterRightLocation, BigDecimal photoRegisterAzimuth,
			BigDecimal photoRegisterXCoordinate, BigDecimal photoRegisterYCoordinate, Date photoRegisterLeftTs,
			Date photoRegisterRightTs, BigDecimal photoRegisterDistance, Long photoRegisterUserId) {
		this.photoRegisterId = photoRegisterId;
		this.photoRegisterLeftName = photoRegisterLeftName;
		this.photoRegisterRightName = photoRegisterRightName;
		this.photoRegisterLeftLocation = photoRegisterLeftLocation;
		this.photoRegisterRightLocation = photoRegisterRightLocation;
		this.photoRegisterAzimuth = photoRegisterAzimuth;
		this.photoRegisterXCoordinate = photoRegisterXCoordinate;
		this.photoRegisterYCoordinate = photoRegisterYCoordinate;
		this.photoRegisterLeftTs = photoRegisterLeftTs;
		this.photoRegisterRightTs = photoRegisterRightTs;
		this.photoRegisterDistance = photoRegisterDistance;
		this.photoRegisterUserId = photoRegisterUserId;
	}
	
	public PhotoRegister() {}

	public Long getPhotoRegisterId() {
		return photoRegisterId;
	}

	public void setPhotoRegisterId(Long photoRegisterId) {
		this.photoRegisterId = photoRegisterId;
	}

	public String getPhotoRegisterLeftName() {
		return photoRegisterLeftName;
	}

	public void setPhotoRegisterLeftName(String photoRegisterLeftName) {
		this.photoRegisterLeftName = photoRegisterLeftName;
	}

	public String getPhotoRegisterRightName() {
		return photoRegisterRightName;
	}

	public void setPhotoRegisterRightName(String photoRegisterRightName) {
		this.photoRegisterRightName = photoRegisterRightName;
	}

	public String getPhotoRegisterLeftLocation() {
		return photoRegisterLeftLocation;
	}

	public void setPhotoRegisterLeftLocation(String photoRegisterLeftLocation) {
		this.photoRegisterLeftLocation = photoRegisterLeftLocation;
	}

	public String getPhotoRegisterRightLocation() {
		return photoRegisterRightLocation;
	}

	public void setPhotoRegisterRightLocation(String photoRegisterRightLocation) {
		this.photoRegisterRightLocation = photoRegisterRightLocation;
	}

	public BigDecimal getPhotoRegisterAzimuth() {
		return photoRegisterAzimuth;
	}

	public void setPhotoRegisterAzimuth(BigDecimal photoRegisterAzimuth) {
		this.photoRegisterAzimuth = photoRegisterAzimuth;
	}

	public BigDecimal getPhotoRegisterXCoordinate() {
		return photoRegisterXCoordinate;
	}

	public void setPhotoRegisterXCoordinate(BigDecimal photoRegisterXCoordinate) {
		this.photoRegisterXCoordinate = photoRegisterXCoordinate;
	}

	public BigDecimal getPhotoRegisterYCoordinate() {
		return photoRegisterYCoordinate;
	}

	public void setPhotoRegisterYCoordinate(BigDecimal photoRegisterYCoordinate) {
		this.photoRegisterYCoordinate = photoRegisterYCoordinate;
	}

	public Date getPhotoRegisterLeftTs() {
		return photoRegisterLeftTs;
	}

	public void setPhotoRegisterLeftTs(Date photoRegisterLeftTs) {
		this.photoRegisterLeftTs = photoRegisterLeftTs;
	}

	public Date getPhotoRegisterRightTs() {
		return photoRegisterRightTs;
	}

	public void setPhotoRegisterRightTs(Date photoRegisterRightTs) {
		this.photoRegisterRightTs = photoRegisterRightTs;
	}

	public BigDecimal getPhotoRegisterDistance() {
		return photoRegisterDistance;
	}

	public void setPhotoRegisterDistance(BigDecimal photoRegisterDistance) {
		this.photoRegisterDistance = photoRegisterDistance;
	}

	public Long getPhotoRegisterUserId() {
		return photoRegisterUserId;
	}

	public void setPhotoRegisterUserId(Long photoRegisterUserId) {
		this.photoRegisterUserId = photoRegisterUserId;
	}
	
	
	
	

}
