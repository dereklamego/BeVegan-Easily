package com.example.apipostgres;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = { "com.example.apipostgres.model" })
@EnableJpaRepositories(basePackages = { "com.example.apipostgres.repository" })
public class ApiPostgresApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiPostgresApplication.class, args);
	}

}
