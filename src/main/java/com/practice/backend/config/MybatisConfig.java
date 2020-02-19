package com.practice.backend.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

/**
 * @author shenjies88
 * @since 2020/2/19-10:36 AM
 */
@MapperScan("com.practice.backend.mapper")
@Configuration
public class MybatisConfig {
}
