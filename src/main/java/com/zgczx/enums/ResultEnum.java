package com.zgczx.enums;

import lombok.Getter;

/**
 * 结果枚举类
 *
 * @author Jason
 * @date 2019-01-03
 */
@Getter
public enum ResultEnum {

    /**
     * 运行成功
     */
    SUCCESS(0, "成功"),
    /**
     * 参数异常
     */
    PARAM_EXCEPTION(500,"参数异常"),
    /**
     * 信息未发现异常
     */
    INFO_NOTFOUND_EXCEPTION(501,"信息未发现异常"),
    /**
     * 数据库操作异常
     */
    DATABASE_OP_EXCEPTION(502,"数据库操作异常"),
    /**
     * 预约冲突
     */
    SUB_FAIL(503,"预约冲突"),
    /**
     * 微信公众账号方面错误
     */
    WECHAT_MP_ERROR(504, "微信公众账号方面错误"),

    ;

    private Integer code;

    private String message;

    ResultEnum(Integer code, String message) {
        this.code = code;
        this.message = message;
    }

}
