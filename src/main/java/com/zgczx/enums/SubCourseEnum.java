package com.zgczx.enums;

import lombok.Getter;

/**
 * @Author: Dqd
 * @Date: 2018/12/29 13:13
 * @Description: 学生预约状态
 */
@Getter
public enum SubCourseEnum {

    /**
     * 提交预约请求
     */
    SUB_WAIT(0,"提交预约请求"),
    /**
     * 学生预约成功
     */
    SUB_CANDIDATE_SUCCESS(1,"学生预约成功"),
    /**
     * 学生预约失败
     */
    SUB_CANDIDATE_FAILED(2,"学生预约失败"),
    /**
     * 学生取消预约
     */
    STU_CANCEL_SUB(3,"学生取消预约"),
    /**
     * 教师预约预约
     */
    TEA_CANCEL_SUB(4,"教师取消预约"),
    ;

    private Integer code;

    private String message;

    SubCourseEnum(Integer code, String message) {
        this.code = code;
        this.message = message;
    }
}
