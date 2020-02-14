package com.practice.backend.vo;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.Min;

/**
 * @author shenjies88
 * @since 2020/1/12-12:38
 */
@Data
@AllArgsConstructor
public class PageVo {

    PageVo() {

    }

    @Min(1)
    @ApiModelProperty(example = "1")
    private Integer pageNum = 1;

    @Min(1)
    @ApiModelProperty(example = "10")
    private Integer pageSize = 10;
}
