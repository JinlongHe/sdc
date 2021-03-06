package com.zgczx.service;

import com.zgczx.dataobject.FeedBack;
import com.zgczx.dataobject.SubCourse;
import com.zgczx.dto.CourseDTO;
import com.zgczx.dto.SubDTO;

import java.util.List;


/**
 *  学生接口
 *
 * @author 陈志恒
 */
public interface StuService {
    /**
     *
     * 功能描述: 显示所有课程信息
     *
     * @param page 页面数
     * @param size size页面大小
     */
     List<CourseDTO> findAllCourse(Integer page,Integer size);
    /**
     *
     * 功能描述: 提交预约请求
     *
     * @param stuOpenid 学生微信id
     * @param courserId  课程id
     */
     SubCourse order(String stuOpenid, Integer courserId);
    /**
     *
     * 功能描述:取消预约请求
     *
     * @param cause 取消原因
     * @param courserId 课程id
     * @param stuOpenid 学生微信id
     */
     SubCourse cancelOrder(String cause,String stuOpenid, Integer courserId);
    /**
     *
     * 功能描述: 提交反馈
     *
     * @param courseId 课程id
     * @param message 代表反馈内容
     * @param score 代表反馈评分
     * @param subId 预约课程id
     */
     FeedBack feedBack(Integer courseId, String message, Integer score,Integer subId);

    /**
     *查询历史记录课程
     *
     * @Author chen
     * @Date 21:02 2018/12/20
     * @param page 页数
     * @param size 页面大小
     * @param stuOpenid 学生微信id
     * @return List<CourseDTO> 课程封装对象的集合
     **/
     List<SubDTO> lookHistory(Integer page, Integer size, String stuOpenid);



}
