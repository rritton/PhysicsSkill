package fr.esvres.enseignement.controller.personne;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import fr.esvres.enseignement.entity.personne.Joueur;
//import fr.esvres.enseignement.service.personne.GestionJoueur;

@Controller
public class JoueurController {
	private static final Logger logger = Logger.getLogger(JoueurController.class);
	
//	@Autowired
//	private GestionJoueur gestionJoueur;
	
	
	@RequestMapping(path="/", method=RequestMethod.GET)
	public String home(Model model) {
		logger.info("In home");
		model.addAttribute("loggedPlayer", new Joueur());
		return "home";
	}
	

}
