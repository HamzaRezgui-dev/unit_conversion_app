package com.example.conversion.dto;

public class ConversionRequest {
    private double value;
    private String fromUnit;
    private String toUnit;

    public double getValue() {
        return value;
    }

    public String getFromUnit() {
        return fromUnit;
    }

    public String getToUnit() {
        return toUnit;
    }
}
