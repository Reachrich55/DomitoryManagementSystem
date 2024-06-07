package dormitory.manage.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import dormitory.manage.entity.BuildingEntity;

// 楼宇存储服务

@RepositoryRestResource(collectionResourceRel = "building", path = "building")
public interface BuildingRepository extends PagingAndSortingRepository<BuildingEntity, String> {

    /**
     * 楼宇信息
     *
     * @param name 楼宇名称
     * @return 楼宇信息
     */
    BuildingEntity findByName(String name);
}
