package com.lateco.lotteryserver.entities;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Arrays;
import java.sql.Array;
import java.util.stream.IntStream;
import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.Table;
import org.hibernate.type.TimestampType;

import com.vladmihalcea.hibernate.type.array.IntArrayType;

@Entity
@Table(name = "regular_bets")
public class RegularBets implements Serializable{
	
	private Long regularBetsId;
	private Long regularBetsLotteryIdFk;
	private Long regularBetsUserIdFk;
	private Array regularBetsCombination;
	private TimestampType regularBetsBetTimestamp;
	private Boolean regularBetsWin;
	
	public RegularBets (Long regularBetsId, Long regularBetsLotteryIdFk, Long regularBetsUserIdFk, Array regularBetsCombination, TimestampType regularBetsBetTimestamp, Boolean regularBetsWin) {
		this.regularBetsId = regularBetsId;
		this.regularBetsLotteryIdFk = regularBetsLotteryIdFk;
		this.regularBetsUserIdFk = regularBetsUserIdFk;
		this.regularBetsCombination = regularBetsCombination;
		this.regularBetsBetTimestamp = regularBetsBetTimestamp;
		this.regularBetsWin = regularBetsWin;
	}
	
	public RegularBets() {}
	
	public RegularBets(long userId, int[] combination) {
		this.regularBetsLotteryIdFk = new Long(1);
		this.regularBetsUserIdFk = new Long(1);
		//this.regularBetsCombination = IntStream.of( combination ).boxed().toArray( Integer[]::new );
		/*ArrayList<Integer> combinationInteger = new ArrayList<Integer>();
		for (String str : combination) {
			try {
				combinationInteger.add(Integer.parseInt(str));
			} catch (NumberFormatException nfe) {
				nfe.printStackTrace();
				combinationInteger.add(0);
			}
		}*/
		//this.regularBetsCombination = Arrays.stream( combination ).boxed().toArray( IntArrayType::new );
		this.regularBetsWin = false;
	}

	public Long getRegularBetsId() {
		return regularBetsId;
	}

	public void setRegularBetsId(Long regularBetsId) {
		this.regularBetsId = regularBetsId;
	}

	public Long getRegularBetsLotteryIdFk() {
		return regularBetsLotteryIdFk;
	}

	public void setRegularBetsLotteryIdFk(Long regularBetsLotteryIdFk) {
		this.regularBetsLotteryIdFk = regularBetsLotteryIdFk;
	}

	public Long getRegularBetsUserIdFk() {
		return regularBetsUserIdFk;
	}

	public void setRegularBetsUserIdFk(Long regularBetsUserIdFk) {
		this.regularBetsUserIdFk = regularBetsUserIdFk;
	}

	public Array getRegularBetsCombination() {
		return regularBetsCombination;
	}

	public void setRegularBetsCombination(Array regularBetsCombination) {
		this.regularBetsCombination = regularBetsCombination;
	}

	public TimestampType getRegularBetsBetTimestamp() {
		return regularBetsBetTimestamp;
	}

	public void setRegularBetsBetTimestamp(TimestampType regularBetsBetTimestamp) {
		this.regularBetsBetTimestamp = regularBetsBetTimestamp;
	}

	public Boolean getRegularBetsWin() {
		return regularBetsWin;
	}

	public void setRegularBetsWin(Boolean regularBetsWin) {
		this.regularBetsWin = regularBetsWin;
	}
	
	

}
