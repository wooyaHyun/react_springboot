package com.tutorial.springboot.service.impl;

import com.tutorial.springboot.mapper.HelloDao;
import com.tutorial.springboot.service.HelloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class HelloServiceImpl implements HelloService {

    @Autowired
    private HelloDao helloDao;

    @Override
    public String helloGetNow() throws Exception {
        return helloDao.helloGetNow();
    }
}
