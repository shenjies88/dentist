package com.qingsongyayi.backend.controller;

import com.qingsongyayi.backend.common.HttpResult;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author shenjies88
 * @since 2020/1/18-9:12 PM
 */
@Api(tags = "Boot")
@RequestMapping
@RestController
public class BootController {

    @ApiOperation("Boot")
    @GetMapping("/boot")
    public HttpResult<String> boot() {
        return HttpResult.success("Boot");
    }
}
