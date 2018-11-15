package fr.esvres.enseignement.service.personne;

import fr.esvres.enseignement.entity.personne.Joueur;

public interface GestionJoueur {
	
	boolean mdpValid(Joueur joueur, String mdp);
	Joueur recupererJoueurParNomPrenom(String nom, String prenom);

}
