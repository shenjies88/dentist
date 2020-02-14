package com.practice.backend.service;

import com.practice.backend.entity.PatientInfoDO;
import com.practice.backend.mapper.PatientInfoMapper;
import com.practice.backend.vo.PageResultVo;
import com.practice.backend.vo.PageVo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author shenjies88
 * @since 2020-01-19 11:21:55
 */
@AllArgsConstructor
@Service
public class PatientInfoService {

    private PatientInfoMapper patientInfoMapper;

    @Transactional(rollbackFor = Exception.class)
    public void insert(PatientInfoDO body) {
        this.patientInfoMapper.insert(body);
    }

    @Transactional(rollbackFor = Exception.class)
    public void delete(List<Integer> ids) {
        this.patientInfoMapper.delete(ids);
    }

    @Transactional(rollbackFor = Exception.class)
    public void update(Integer id, PatientInfoDO body) {
        this.patientInfoMapper.update(id, body);
    }

    public PatientInfoDO detail(Integer id) {
        return this.patientInfoMapper.queryEntityById(id);
    }

    public PageResultVo<PatientInfoDO> queryListPage(PageVo param) {
        return PageResultVo.paging(param, this.patientInfoMapper::queryListPage);
    }
}