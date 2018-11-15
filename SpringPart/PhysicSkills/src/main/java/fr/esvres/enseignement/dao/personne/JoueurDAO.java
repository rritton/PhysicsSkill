package fr.esvres.enseignement.dao.personne;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.esvres.enseignement.entity.personne.Joueur;

public interface JoueurDAO extends JpaRepository<Joueur, Integer> {
	
	Joueur findByNOmAndPrenom(String nom, String prenom);

}
