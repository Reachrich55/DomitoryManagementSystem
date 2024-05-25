package repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import entity.AdminEntity;

/**
 * 系统管理员存储服务

 * @version 0.0.1
 * @since 0.0.1
 */
@RepositoryRestResource(collectionResourceRel = "admin", path = "admin")
public interface AdminRepository extends PagingAndSortingRepository<AdminEntity, String> {

    /**
     * 按照管理员账号查询
     *
     * @param name 管理员账号
     * @return 管理员信息
     */
    AdminEntity findByName(String name);
}
