package com.practice.backend.entity;


import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * @author shenjies88
 * @since 2020-01-19 11:21:55
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(description = "病人基本信息", reference = "patient_info")
public class PatientInfoDO {

    @ApiModelProperty(value = "主键", example = "主键", hidden = true)
    private Integer id;

    @NotBlank(message = "姓名不能为空")
    @ApiModelProperty(value = "姓名", example = "姓名")
    private String name;

    @NotBlank(message = "性别不能为空")
    @ApiModelProperty(value = "性别", example = "男")
    private String sex;

    @NotNull(message = "年龄不能为空")
    @ApiModelProperty(value = "年龄", example = "11", dataType = "java.lang.Integer")
    private Integer age;

    @Size(min = 11, max = 11)
    @NotBlank(message = "手机号码不能为空")
    @ApiModelProperty(value = "手机号码", example = "18178324804")
    private String phone;

    @ApiModelProperty(value = "固定电话", example = "18178324804")
    private String fixedPhone;

    @NotBlank(message = "联系地址不能为空")
    @ApiModelProperty(value = "联系地址", example = "联系地址")
    private String contactAddress;

    @ApiModelProperty(value = "备注", example = "备注")
    private String note;

    @ApiModelProperty(value = "创建时间", example = "2020-01-10 11:37:00")
    private String createAt;

}