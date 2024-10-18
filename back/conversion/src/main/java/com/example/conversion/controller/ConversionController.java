package com.example.conversion.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.conversion.dto.ConversionRequest;
import com.example.conversion.service.ConversionService;

@RestController
@RequestMapping("/conversion")
public class ConversionController {

    private final ConversionService conversionService;

    public ConversionController(ConversionService conversionService) {
        this.conversionService = conversionService;
    }

    @PostMapping("/length")
    public double convertLength(@RequestBody ConversionRequest request) {
        return conversionService.convertLength(request.getValue(), request.getFromUnit(), request.getToUnit());
    }

    @PostMapping("/weight")
    public double convertWeight(@RequestBody ConversionRequest request) {
        return conversionService.convertWeight(request.getValue(), request.getFromUnit(), request.getToUnit());
    }

    @PostMapping("/temp")
    public double convertTemp(@RequestBody ConversionRequest request) {
        return conversionService.convertTemp(request.getValue(), request.getFromUnit(), request.getToUnit());
    }
}
