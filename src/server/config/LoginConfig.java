package config;

import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ClassPathScanningCandidateComponentProvider;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.type.filter.AnnotationTypeFilter;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.*;
import org.springframework.web.servlet.handler.MappedInterceptor;

import javax.persistence.Entity;
import java.util.Set;

/**
 * 登录配置
 * @version 0.0.1
 * @since 0.0.1
 */
@Configuration
public class LoginConfig implements WebMvcConfigurer {

    @Bean
    public RepositoryRestConfigurer repositoryRestConfigurer() {
        return new RepositoryRestConfigurer() {
            @Override
            public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
                final ClassPathScanningCandidateComponentProvider provider = new ClassPathScanningCandidateComponentProvider(false);
                provider.addIncludeFilter(new AnnotationTypeFilter(Entity.class));
                final Set<BeanDefinition> beans = provider.findCandidateComponents("entity");
                for (final BeanDefinition bean : beans) {
                    try {
                        config.exposeIdsFor(Class.forName(bean.getBeanClassName()));
                    } catch (final ClassNotFoundException e) {
                        throw new IllegalStateException("Failed to expose `id` field due to", e);
                    }
                }
            }
        };
    }


