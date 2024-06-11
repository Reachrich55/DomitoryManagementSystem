package dormitory.manage.dto;

import java.io.Serializable;

// 基础请求

// AbstractBaseRequest 类是一个基础类，可以被其他具体请求类继承，以复用 requestId 和 operator 属性。
// 通过继承 AbstractBaseRequest，具体的请求类可以拥有基本的请求信息，同时也可以扩展更多特定的请求属性和方法。
public abstract class AbstractBaseRequest implements Serializable {

    // 请求id
    private String requestId;

    // 操作人
    private String operator;

    // 获取请求ID
    public String getRequestId() {
        return requestId;
    }

    // 设置请求ID
    public void setRequestId(String requestId) {
        this.requestId = requestId;
    }

    // 获取操作人
    public String getOperator() {
        return operator;
    }

    // 设置操作人
    public void setOperator(String operator) {
        this.operator = operator;
    }
}
