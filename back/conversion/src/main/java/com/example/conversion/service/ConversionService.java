package com.example.conversion.service;

public interface ConversionService {
    double convertLength(double value, String fromUnit, String toUnit);
    double convertWeight(double value, String fromUnit, String toUnit);
    double convertTemp(double value, String fromUnit, String toUnit);
}
