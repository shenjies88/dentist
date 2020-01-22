package com.qingsongyayi.backend.controller;

import com.qingsongyayi.backend.common.HttpResult;
import com.qingsongyayi.backend.vo.LoginVo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

/**
 * @author shenjies88
 * @since 2020/1/21-8:48 PM
 */
@Api(tags = "用户信息接口")
@AllArgsConstructor
@RequestMapping("/api/user")
@RestController
public class UserController {

    @ApiOperation("登陆")
    @PostMapping("/login")
    public HttpResult login(@RequestBody LoginVo body) {

        if (body.getUserName().equals("admin") && body.getPassword().equals("password")) {
            Map<String, Object> map = new HashMap<>();
            map.put("userName", body.getUserName());
            map.put("password", body.getPassword());
            map.put("token", (System.currentTimeMillis() + new Random().nextInt(999999999)) + "");
            map.put("permissions", new ArrayList<>());
            return HttpResult.success(map);
        } else {
            throw new RuntimeException("账号或者密码错误");
        }
    }
}
