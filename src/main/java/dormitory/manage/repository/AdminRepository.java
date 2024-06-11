package dormitory.manage.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import dormitory.manage.entity.AdminEntity;

// 系统管理员存储服务
// AdminRepository 是一个接口，它继承了 PagingAndSortingRepository<AdminEntity, String> 接口。
// PagingAndSortingRepository 是 Spring Data JPA 提供的一个接口，它提供了一组基本的 CRUD 方法，以及分页和排序功能

// @RepositoryRestResource 是 Spring Data REST 提供的一个注解，用于指示该接口是一个 REST 资源仓库。
@RepositoryRestResource(collectionResourceRel = "admin", path = "admin")
public interface AdminRepository extends PagingAndSortingRepository<AdminEntity, String> {

    // 自定义查询方法，按照管理员账号查询

    AdminEntity findByName(String name);
}
