package olechochek.barbershop.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {
    @GetMapping(value = "/")
    @ResponseBody
    public String home(Model model){
        return "ok";
    }
}
