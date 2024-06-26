package dormitory.manage.dto;

import java.io.Serializable;

// 登出数据请求传输对象

public class LogoutRequest extends AbstractBaseRequest implements Serializable {

    /**
     * 账号
     */
    private String account;

    /**
     * 类型
     */
    private String type;

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
