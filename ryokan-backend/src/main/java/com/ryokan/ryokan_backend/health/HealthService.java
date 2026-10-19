package com.ryokan.ryokan_backend.health;

import java.time.Instant;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class HealthService {

    private final String applicationName;

    public HealthService(@Value("${spring.application.name}") String applicationName) {
        this.applicationName = applicationName;
    }

    public HealthResponse check() {
        return new HealthResponse("UP", applicationName, Instant.now());
    }
}
