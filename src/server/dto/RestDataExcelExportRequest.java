package dto;

import java.io.Serializable;

/**
 * 数据库数据导出Excel
 * @version 0.0.1
 * @since 0.0.1
 */
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
