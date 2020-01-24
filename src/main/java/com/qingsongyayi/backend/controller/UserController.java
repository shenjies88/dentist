package com.qingsongyayi.backend.controller;

import com.qingsongyayi.backend.common.HttpResult;
import com.qingsongyayi.backend.vo.LoginVo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

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

    @ApiOperation("用户信息")
    @GetMapping("/info")
    public HttpResult info() {

        Map<String, Object> map = new HashMap<>();
        map.put("userName", "admin");
        map.put("password", "password");
        map.put("token", (System.currentTimeMillis() + new Random().nextInt(999999999)) + "");
        map.put("permissions", new ArrayList<>());
        return HttpResult.success(map);
    }

    @ApiOperation("退出登陆")
    @PostMapping("/logout")
    public HttpResult logout() {
        return HttpResult.success();
    }
}
