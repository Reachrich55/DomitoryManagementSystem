package dormitory.manage.dto;

import java.io.Serializable;

// 数据库数据导出Excel
// RestDataExcelExportRequest 类是一个具体的导出请求类，用于通过 RESTful 接口从数据库导出数据到 Excel 文件中。
// 该类通过继承 AbstractExcelExportRequest，复用了父类的基本 Excel 导出信息（如文件名、页签名称、列名等），并添加了一个用于存储 REST URL 的属性 url。
public class RestDataExcelExportRequest extends AbstractExcelExportRequest implements Serializable {

    //rest url
    private String url;

    // 获取REST URL
    public String getUrl() {
        return url;
    }

    // 设置REST URL
    public void setUrl(String url) {
        this.url = url;
    }
}
