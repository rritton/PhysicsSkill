package fr.esvres.enseignement.service.personne;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.esvres.enseignement.dao.personne.JoueurDAO;
import fr.esvres.enseignement.entity.personne.Joueur;
import fr.esvres.enseignement.util.Encrypt;

@Service
public class GestionJoueurImpl implements GestionJoueur {
	private static final Logger logger = Logger.getLogger(GestionJoueurImpl.class);
	
	@Autowired
	private JoueurDAO joueurDAO;

	public boolean mdpValid(Joueur joueur, String mdp) {
		logger.info("In mdpValid");
		return Encrypt.verificationMdP(mdp, joueur.getMotDepasse());
	}

	public Joueur recupererJoueurParNomPrenom(String nom, String prenom) {
		logger.info("In recupererJoueurParNomPrenom");
		return joueurDAO.findByNOmAndPrenom(nom, prenom);
	}

}
