package com.qingsongyayi.backend.controller;

import com.qingsongyayi.backend.common.HttpResult;
import com.qingsongyayi.backend.entity.PatientInfoDO;
import com.qingsongyayi.backend.service.PatientInfoService;
import com.qingsongyayi.backend.vo.PageResultVo;
import com.qingsongyayi.backend.vo.PageVo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author shenjies88
 * @since 2020-01-19 11:21:55
 */
@Api(tags = "病人基本信息")
@AllArgsConstructor
@RequestMapping("/patient/base")
@RestController
public class PatientInfoController {

    private PatientInfoService patientInfoService;

    @ApiOperation("增加病人基本信息实体")
    @PostMapping
    public HttpResult insert(@RequestBody PatientInfoDO body) {

        this.patientInfoService.insert(body);
        return HttpResult.success();
    }

    @ApiOperation("删除病人基本信息实体")
    @DeleteMapping
    public HttpResult delete(@RequestBody List<Integer> ids) {

        this.patientInfoService.delete(ids);
        return HttpResult.success();
    }

    @ApiOperation("更新病人基本信息实体")
    @PutMapping("{id}")
    public HttpResult update(@PathVariable(name = "id") Integer id, @RequestBody PatientInfoDO body) {

        this.patientInfoService.update(id, body);
        return HttpResult.success();
    }

    @ApiOperation("病人基本信息实体详情")
    @GetMapping("{id}")
    public HttpResult<PatientInfoDO> detail(@ApiParam(value = "id", required = true) @PathVariable Integer id) {

        PatientInfoDO data = this.patientInfoService.detail(id);
        return HttpResult.success(data);
    }

    @ApiOperation("病人基本信息列表")
    @PostMapping("/list")
    public HttpResult<PatientInfoDO> listPage(@RequestBody PageVo param) {

        PageResultVo<PatientInfoDO> list = this.patientInfoService.queryListPage(param);
        return HttpResult.success(list);
    }
}