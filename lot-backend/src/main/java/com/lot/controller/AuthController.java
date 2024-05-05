package com.lot.controller;

import com.lot.config.JwtProvider;
import com.lot.module.User;
import com.lot.repository.UserRepository;
import com.lot.request.LoginRequest;
import com.lot.response.AuthResponse;
import com.lot.service.CustomUserDetailService;
import com.lot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;

@RestController
@RequestMapping("/lot")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CustomUserDetailService customUserDetailService;

    @PostMapping("/signup")
    public AuthResponse createUser(@RequestBody User user) throws Exception {
        User user1 = userRepository.findByEmail(user.getEmail());

        if(user1!=null){
            throw new Exception("User is already created with this email id : "+user1 );
        }


        User newuser=new User();
        //verify that pass and con pass is matching

        if(Objects.equals(newuser.getPassword(), newuser.getConpassword())) {
            newuser.setUserName(user.getUserName());
            newuser.setName(user.getName());
            newuser.setEmail(user.getEmail());
            newuser.setPassword(passwordEncoder.encode(user.getPassword()));
            newuser.setConpassword(passwordEncoder.encode(user.getConpassword()));
            User createUser = userRepository.save(newuser);
            Authentication authentication = new UsernamePasswordAuthenticationToken(createUser.getEmail(),createUser.getPassword());
            String token= JwtProvider.generateToken(authentication);
            AuthResponse response = new AuthResponse(token,"Register Successfully ");
            return response;
        }
        else {
            throw new Exception("Password and Confirm Password is not matching!! Please Try again");
        }
    }

    @PostMapping("/signin")
    public AuthResponse signin(@RequestBody LoginRequest loginrequest) throws Exception {
        Authentication authentication = authentication(loginrequest.getEmail(), loginrequest.getPassword());
        String token = JwtProvider.generateToken(authentication);

        AuthResponse authResponse = new AuthResponse(token, "Singin successfully");

        return authResponse;
    }

    private Authentication authentication(String email, String password) throws Exception {

        UserDetails userDetails = customUserDetailService.loadUserByUsername(email);

        if (userDetails == null) {
            throw new Exception("Invalid credentials ");
        }
        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Password Doesn't match !!");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}
