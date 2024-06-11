package dormitory.manage.dto;

import dormitory.manage.enums.ResponseCodeEnum;

import java.io.Serializable;

// 基础返回
// AbstractBaseResponse 类是一个基础响应类，可以被其他具体响应类继承，以复用 requestId、operator、timestamp、code、info 和 data 属性。
// 通过继承 AbstractBaseResponse，具体的响应类可以拥有基本的响应信息，同时也可以扩展更多特定的响应属性和方法。
public abstract class AbstractBaseResponse<T> implements Serializable {

    // 请求id
    private String requestId;

    // 操作人
    private String operator;

    // 操作时间
    private long timestamp;

    // 返回码
    private String code;

    // 返回信息
    private String info;

    // 返回数据
    private T data;

    // 设置返回码和返回信息
    public void setResponseCode(ResponseCodeEnum responseCode){
        this.code = responseCode.getCode();
        this.info = responseCode.getInfo();
    }

    public String getRequestId() {
        return requestId;
    }

    public void setRequestId(String requestId) {
        this.requestId = requestId;
    }

    public String getOperator() {
        return operator;
    }

    public void setOperator(String operator) {
        this.operator = operator;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
