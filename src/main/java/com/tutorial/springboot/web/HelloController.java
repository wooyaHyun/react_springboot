package com.tutorial.springboot.web;


import com.tutorial.springboot.config.auth.dto.SessionUser;
import com.tutorial.springboot.service.HelloService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RequiredArgsConstructor
@RestController
@Slf4j
public class HelloController {

    private final HttpSession httpSession;


    @GetMapping("/hello")
    public Map<String, String> hello() throws Exception{

        SessionUser user = (SessionUser) httpSession.getAttribute("user");
        Map<String, String> map = new HashMap<>();
        if(user != null){
            map.put("name",user.getName());
            map.put("mail",user.getEmail());
        }else {
            map.put("name", "init");
            map.put("mail", "init");
        }
        return map;
    }
}
