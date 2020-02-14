package com.practice.backend.mapper;

import com.practice.backend.entity.PatientInfoDO;
import com.practice.backend.vo.PageVo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @author shenjies88
 * @since 2020-01-19 11:21:55
 */
public interface PatientInfoMapper {

    /**
     * 新增数据
     */
    void insert(@Param("data") PatientInfoDO data);

    /**
     * 通过主键删除数据
     */
    void delete(@Param("ids") List<Integer> ids);

    /**
     * 修改数据
     */
    void update(@Param("id") Integer id, @Param("data") PatientInfoDO data);

    /**
     * 通过ID查询单条数据
     */
    PatientInfoDO queryEntityById(@Param("id") Integer id);

    /**
     * 分页列表查询
     */
    List<PatientInfoDO> queryListPage(@Param("param") PageVo param);
}