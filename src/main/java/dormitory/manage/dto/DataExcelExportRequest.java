package dormitory.manage.dto;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

// 指定数据导出Excel
// DataExcelExportRequest 类是一个具体的导出请求类，用于将特定的数据导出到 Excel 文件中。
// 该类通过继承 AbstractExcelExportRequest，复用了父类的基本 Excel 导出信息（如文件名、页签名称、列名等），并添加了一个用于存储数据的属性 data。
public class DataExcelExportRequest extends AbstractExcelExportRequest implements Serializable {

    // 数据
    private List<Map<String, String>> data;

    // 获取数据
    public List<Map<String, String>> getData() {
        return data;
    }

    // 设置数据
    public void setData(List<Map<String, String>> data) {
        this.data = data;
    }
}
