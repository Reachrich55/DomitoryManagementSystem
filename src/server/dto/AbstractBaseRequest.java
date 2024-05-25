package dto;

import java.io.Serializable;

/**
 * 基础请求
 * @version 0.0.1
 * @since 0.0.1
 */
public abstract class AbstractBaseRequest implements Serializable {

    /**
     * 请求id
     */
    private String requestId;

    /**
     * 操作人
     */
    private String operator;

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
}
