package dormitory.manage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

// 应用启动类，主程序入口,spring boot 框架自带tomcat，对于jar包可以直接启动

@EnableJpaAuditing
@SpringBootApplication
public class DmApplication {

    public static void main(String[] args) {
        SpringApplication.run(DmApplication.class, args);
    }

}
