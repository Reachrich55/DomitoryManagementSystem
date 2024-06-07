package dormitory.manage.dto;

import java.io.Serializable;

// 数据库数据导出Excel

public class RestDataExcelExportRequest extends AbstractExcelExportRequest implements Serializable {

    /**
     * rest url
     */
    private String url;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
