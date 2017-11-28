package com.gakeko.ffserver.model;

import org.springframework.core.convert.converter.Converter;
import com.gakeko.ffserver.model.EchoModel;

public class StringToEchoConverter implements Converter<String, EchoModel> {
	
	private EchoModel echoModel;
	
	public StringToEchoConverter (EchoModel echoModel) {
		this.echoModel = echoModel;
	}
	
	@Override
    public EchoModel convert (String string) {
        try {
            return new EchoModel(string);
        } catch (Exception e) {
            return null;
        }
    }

}
