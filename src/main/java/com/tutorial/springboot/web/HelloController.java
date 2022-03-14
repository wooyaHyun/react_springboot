package com.tutorial.springboot.web;


import com.tutorial.springboot.service.HelloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class HelloController {

    @Autowired
    private HelloService helloService;

    @GetMapping("/hello")
    public String hello() throws Exception{
        String str = helloService.helloGetNow();
        return "HelloWorld" + str;
    }
}
