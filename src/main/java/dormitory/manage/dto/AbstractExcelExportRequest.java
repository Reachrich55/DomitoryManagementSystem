package dormitory.manage.dto;

import java.io.Serializable;
import java.util.List;

// 导出Excel数据请求
// AbstractExcelExportRequest 类是一个基础的 Excel 导出请求类，可以被其他具体的导出请求类继承，以复用 excelName、sheetName、columnNames 和 columns 属性。
// 通过继承 AbstractExcelExportRequest，具体的导出请求类可以拥有基本的 Excel 导出信息，同时也可以扩展更多特定的导出请求属性和方法。
public abstract class AbstractExcelExportRequest extends AbstractBaseRequest implements Serializable {

    // Excel导出文件名称
    private String excelName;

    // Excel导出页签名称
    private String sheetName;

    // Excel导出列名
    private List<String> columnNames;

    // 列key
    private List<String> columns;

    // 获取Excel导出文件名称
    public String getExcelName() {
        return excelName;
    }

    // 设置Excel导出文件名称
    public void setExcelName(String excelName) {
        this.excelName = excelName;
    }

    // 获取Excel导出页签名称
    public String getSheetName() {
        return sheetName;
    }

    // 设置Excel导出页签名称
    public void setSheetName(String sheetName) {
        this.sheetName = sheetName;
    }

    // 获取Excel导出列名
    public List<String> getColumnNames() {
        return columnNames;
    }

    // 设置Excel导出列名
    public void setColumnNames(List<String> columnNames) {
        this.columnNames = columnNames;
    }

    // 获取列key
    public List<String> getColumns() {
        return columns;
    }

    // 设置列key
    public void setColumns(List<String> columns) {
        this.columns = columns;
    }
}
