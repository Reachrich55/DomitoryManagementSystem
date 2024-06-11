package dormitory.manage.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import dormitory.manage.entity.StudentEntity;

import java.util.List;

// 仓库包，此java package对应数据访问层，等同于DAO，jpa框架的repository配合data-rest提供restful方式的接口，可以简化开发

// 学生存储服务

@RepositoryRestResource(collectionResourceRel = "student", path = "student")
public interface StudentRepository extends PagingAndSortingRepository<StudentEntity, String> {

    // Spring Data JPA 根据方法名的命名规则自动生成查询语句，这两个方法会自动根据学生编号（sn 字段）和学生姓名（name 字段）查询对应的学生信息。
    // 通过继承 PagingAndSortingRepository 接口，StudentRepository 可以直接使用 Spring Data JPA 提供一组基本的创建、读取、更新、删除方法以及分页和排序功能。
    // 按照学生编号查询学生信息
    StudentEntity findBySn(String sn);

    // 按照学生姓名查询学生信息
    List<StudentEntity> findByName(String name);
}


