package dormitory.manage.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import dormitory.manage.entity.LiveEntity;

// 入住信息存储服务

@RepositoryRestResource(collectionResourceRel = "live", path = "live")
public interface LiveRepository extends PagingAndSortingRepository<LiveEntity, String> {
}
