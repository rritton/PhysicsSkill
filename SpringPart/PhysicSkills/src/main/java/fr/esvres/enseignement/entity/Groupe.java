package fr.esvres.enseignement.entity;

import java.util.ArrayList;
import java.util.List;

import fr.esvres.enseignement.entity.personne.Apprenant;

public class Groupe {
	
	//Attributes
	String nom;
	private List<Apprenant> eleveListe;
	
	
	//Constructors
	public Groupe(String nom, List<Apprenant> eleveListe) {
		this.nom = nom;
		this.eleveListe = eleveListe;
	}
	
	public Groupe() {
		eleveListe = new ArrayList<Apprenant>();
	}
	
	
	//Getters & Setters
	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public List<Apprenant> getEleveListe() {
		return eleveListe;
	}

	public void setEleveListe(List<Apprenant> eleveListe) {
		this.eleveListe = eleveListe;
	}
	

}
