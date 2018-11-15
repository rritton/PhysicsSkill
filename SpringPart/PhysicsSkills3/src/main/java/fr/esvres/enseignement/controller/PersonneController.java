package fr.esvres.enseignement.controller;

import java.util.Calendar;
import java.util.Date;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import fr.esvres.enseignement.entity.Groupe;
import fr.esvres.enseignement.entity.evaluation.Evaluation;
import fr.esvres.enseignement.entity.personne.Apprenant;
import fr.esvres.enseignement.entity.personne.Joueur;
import fr.esvres.enseignement.entity.personne.Prof;

@Controller
public class PersonneController {
	private static final Logger logger = Logger.getLogger(PersonneController.class);
	
//	@Autowired
//	private GestionJoueur gestionJoueur;
	
	
	
	

	//Accueil
	@RequestMapping(path="/", method=RequestMethod.GET)
	public String home(Model model) {
		logger.info("In home");
		model.addAttribute("loggedPlayer", new Joueur());
		return "home";
	}

	// Autentification
	@RequestMapping(value = "/connection")
	public String loginAction(Joueur loggedUser, Model model) {
		logger.info("In loginAction -- utilisateur : " + loggedUser.toString());
//		loggedUser = gestionJoueur.recupererJoueurParNomPrenom(loggedUser.getNom(), loggedUser.getPrenom() );
		if (loggedUser == null) {
			model.addAttribute("message", "L'ensemble nom, prénom et mot de passe est incorect");
			model.addAttribute("loggedPlayer", new Joueur());
			return "home"; // Echec retour vers la page d'autentification
		} 
//			else 
		
		//action pour l'instant ...
		if(loggedUser.getNom().equals("lulu")) {		//remplacer par un vrai test sur la classe Prof
			
			//zone de tests
			Apprenant eleve = new Apprenant();
			eleve.setNom("Morice");
			Groupe classe = new Groupe();
			classe.setNom("512");
			classe.ajouterEleve(eleve);
			Evaluation evaluation = new Evaluation();
			evaluation.setDate(Calendar.getInstance().getTime());
			classe.ajouterEvaluation(evaluation);
			Prof prof = new Prof();
			prof.setNom("Daudé");
			prof.setPrenom("Bart");
			prof.ajoutCLasse(classe);
			model.addAttribute("loggedPlayer", prof);
			
			logger.info("connection réussit");
//			model.addAttribute("loggedPlayer", loggedUser);
			return "profhome";
		}
//		else if () {	//test est ce que c'est un �l�ve
//			//action ...
//		return "apprenanthome"; // Réussite envoi vers la page d'accueil des �l�ves
//		}
		else {
			logger.info("connection raté");
			model.addAttribute("message", "L'ensemble nom, prénom et mot de passe est incorect");
			model.addAttribute("loggedPlayer", new Joueur());
			return "home"; // Echec retour vers la page d'autentification
		}
	}
	
	// Déconection
	@RequestMapping(value = "/deconnection", method = RequestMethod.GET)
	public String disconnect(Model model) {
		logger.info("IN deconnectiont : ");
		model.addAttribute("message", "Vous avez bien été déconnecté ! A bientôt ! ");
		model.addAttribute("loggedPlayer", new Joueur());
		return "home"; // Retour à la page d'autenfication
	}

}