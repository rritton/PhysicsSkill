package fr.esvres.enseignement.controller;

import java.util.Calendar;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import fr.esvres.enseignement.entity.Groupe;
import fr.esvres.enseignement.entity.evaluation.Evaluation;
import fr.esvres.enseignement.entity.personne.Apprenant;
import fr.esvres.enseignement.entity.personne.Prof;

@Controller
public class ProfController {
	private static final Logger logger = Logger.getLogger(ProfController.class);

	// @Autowired
	// private GestionJoueur gestionJoueur;

	// Page du formulaire d'Ajout d'une évaluation
	@RequestMapping(path = "/neweval", method = RequestMethod.GET)
	public String formAjoutEval(Model model) {
		logger.info("In neweval");

		// zone de tests
		Apprenant eleve = new Apprenant();
		eleve.setNom("Morice");
		Groupe classe = new Groupe();
		classe.setNom("512");
		classe.ajouterEleve(eleve);
		Evaluation evaluation = new Evaluation();
		evaluation.setDate(Calendar.getInstance().getTime());
		classe.ajouterEvaluation(evaluation);
		Prof prof = new Prof();
		prof.setNom("Daud�");
		prof.setPrenom("Bart");
		prof.ajoutCLasse(classe);
		model.addAttribute("loggedPlayer", prof);

		model.addAttribute("newEval", new Evaluation());

		return "newevaluation";
	}

	// Ajout d'une evaluation : traitement
	@RequestMapping(path = "/ajouteval", method = RequestMethod.POST)
	public String ajoutEvaluation(Evaluation newEval, Model model) {
		logger.info("In ajouteval");

		// zone de tests
		Apprenant eleve = new Apprenant();
		eleve.setNom("Morice");
		Groupe classe = new Groupe();
		classe.setNom("512");
		classe.ajouterEleve(eleve);
		Evaluation evaluation = new Evaluation();
		evaluation.setDate(Calendar.getInstance().getTime());
		classe.ajouterEvaluation(evaluation);
		classe.ajouterEvaluation(newEval);
		Prof prof = new Prof();
		prof.setNom("Daudé");
		prof.setPrenom("Bart");
		prof.ajoutCLasse(classe);
		model.addAttribute("loggedPlayer", prof);

		return "profhome";
	}

	// Ajout d'une classe : formulaire
	@RequestMapping(path = "/newclasse", method = RequestMethod.GET)
	public String formAjoutClasse(Model model) {
		logger.info("In newclasse");

		// zone de tests
		Apprenant eleve = new Apprenant();
		eleve.setNom("Morice");
		Groupe classe = new Groupe();
		classe.setNom("512");
		classe.ajouterEleve(eleve);
		Evaluation evaluation = new Evaluation();
		evaluation.setDate(Calendar.getInstance().getTime());
		classe.ajouterEvaluation(evaluation);
		Prof prof = new Prof();
		prof.setNom("Daud�");
		prof.setPrenom("Bart");
		prof.ajoutCLasse(classe);
		model.addAttribute("loggedPlayer", prof);

		model.addAttribute("newClasse", new Groupe());

		return "newevaluation";
	}

}