package com.zgczx.enums;

import lombok.Getter;

/**
 * @Author: Dqd
 * @Date: 2019/1/2 16:18
 * @Description:    课程状态
 */
@Getter
public enum CourseEnum {
    /**
     * 课程待预约
     */
    SUB_WAIT(0,"待预约"),
    /**
     * 课程已被预约
     */
    SUB_SUCCESS(1,"已被预约"),
    /**
     * 课程正在进行
     */
    COURSE_INTERACT(2,"课程正在进行"),
    /**
     * 课程正常结束
     */
    COURSE_FINISH(3,"课程正常结束"),
    /**
     * 课程失效
     */
    COURSE_CANCELED(4,"课程失效"),

    ;

    private Integer code;

    private String message;

    CourseEnum(Integer code, String message) {
        this.code = code;
        this.message = message;
    }
}
