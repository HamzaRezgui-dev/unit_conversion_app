package com.example.conversion.impl;

import org.springframework.stereotype.Service;

import com.example.conversion.service.ConversionService;
import java.util.Map;
import java.util.HashMap;


@Service
public class ConversionServiceImpl implements ConversionService {

    private static final Map<String, Double> lengthConversionFactors = new HashMap<>();
    private static final Map<String, Double> weightConversionFactors = new HashMap<>();
    private static final Map<String, Double> tempConversionFactors = new HashMap<>();

    static {
        // the values here are based on 1 meter
        lengthConversionFactors.put("millimeter", 0.001);
        lengthConversionFactors.put("centimeter", 0.01);
        lengthConversionFactors.put("meter", 1.0);
        lengthConversionFactors.put("kilometer", 1000.0);
        lengthConversionFactors.put("inch", 0.0254);
        lengthConversionFactors.put("foot", 0.3048);
        lengthConversionFactors.put("yard", 0.9144);
        lengthConversionFactors.put("mile", 1609.34);
    }

    static {
        weightConversionFactors.put("milligram", 0.000001);
        weightConversionFactors.put("gram", 0.001);
        weightConversionFactors.put("kilogram", 1.0);
        weightConversionFactors.put("ounce", 0.0283495);
        weightConversionFactors.put("pound", 0.453592);
    }

    static {
        tempConversionFactors.put("celsius", 1.0);
        tempConversionFactors.put("fahrenheit", 33.8);
        tempConversionFactors.put("kelvin", 274.15);
    }

    @Override
    public double convertLength(double value, String fromUnit, String toUnit) {
        if (!lengthConversionFactors.containsKey(fromUnit.toLowerCase()) || 
            !lengthConversionFactors.containsKey(toUnit.toLowerCase())) {
            throw new IllegalArgumentException("Invalid length unit provided");
        }

        // what i will do first is convert whatever value i have to meters
        double valueInMeters = value * lengthConversionFactors.get(fromUnit.toLowerCase());

        // then i will convert the value in meters to the desired unit
        return valueInMeters / lengthConversionFactors.get(toUnit.toLowerCase());
    }

    @Override
    public double convertWeight(double value, String fromUnit, String toUnit) {
        if (!weightConversionFactors.containsKey(fromUnit.toLowerCase()) || 
            !weightConversionFactors.containsKey(toUnit.toLowerCase())) {
            throw new IllegalArgumentException("Invalid weight unit provided");
        }

        double valueInKilograms = value * weightConversionFactors.get(fromUnit.toLowerCase());
        return valueInKilograms / weightConversionFactors.get(toUnit.toLowerCase());
    }

    @Override
    public double convertTemp(double value, String fromUnit, String toUnit) {
        fromUnit = fromUnit.toLowerCase();
        toUnit = toUnit.toLowerCase();
    
        // First, convert the input value to Celsius
        double valueInCelsius;
        switch (fromUnit) {
            case "celsius":
                valueInCelsius = value;
                break;
            case "fahrenheit":
                valueInCelsius = (value - 32) * 5 / 9;
                break;
            case "kelvin":
                valueInCelsius = value - 273.15;
                break;
            default:
                throw new IllegalArgumentException("Invalid temperature unit provided");
        }
    
        // Then, convert from Celsius to the desired unit
        switch (toUnit) {
            case "celsius":
                return valueInCelsius;
            case "fahrenheit":
                return (valueInCelsius * 9 / 5) + 32;
            case "kelvin":
                return valueInCelsius + 273.15;
            default:
                throw new IllegalArgumentException("Invalid temperature unit provided");
        }
    }
    

}
