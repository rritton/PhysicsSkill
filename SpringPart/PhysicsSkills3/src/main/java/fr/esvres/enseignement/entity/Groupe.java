package fr.esvres.enseignement.entity;

import java.util.ArrayList;
import java.util.List;

import fr.esvres.enseignement.entity.evaluation.Evaluation;
import fr.esvres.enseignement.entity.personne.Apprenant;

public class Groupe {
	
	//Attributes
	private int id;
	private String nom;
	private int nombre;
	private List<Apprenant> eleveListe;
	private List<Evaluation> evaluationListe;
	private List<Lvl> lvlListe;
	

	//Constructors
	public Groupe(String nom, List<Apprenant> eleveListe, List<Evaluation> evaluationListe, List<Lvl> lvlListe) {
		this.nom = nom;
		this.eleveListe = eleveListe;
		this.nombre = eleveListe.size();
		this.evaluationListe = evaluationListe;
		this.lvlListe = lvlListe;
	}
	
	public Groupe() {
		eleveListe = new ArrayList<Apprenant>();
		evaluationListe = new ArrayList<Evaluation>();
		lvlListe = new ArrayList<Lvl>();
	}
	

	//Methods
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public void ajouterEleve(Apprenant apprenant) {
		eleveListe.add(apprenant);
		nombre ++;
	}
	
	public void ajouterEvaluation(Evaluation evaluation) {
		evaluationListe.add(evaluation);
	}
	
	
	//Getters & Setters
	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}
	
	public int getNombre() {
		return nombre;
	}

	public void setNombre(int nombre) {
		this.nombre = nombre;
	}

	public List<Apprenant> getEleveListe() {
		return eleveListe;
	}

	public void setEleveListe(List<Apprenant> eleveListe) {
		setNombre(eleveListe.size());
		this.eleveListe = eleveListe;
	}
	
	public List<Evaluation> getEvaluationListe() {
		return evaluationListe;
	}

	public void setEvaluationListe(List<Evaluation> evaluationListe) {
		this.evaluationListe = evaluationListe;
	}

	public List<Lvl> getLvlListe() {
		return lvlListe;
	}

	public void setLvlListe(List<Lvl> lvlListe) {
		this.lvlListe = lvlListe;
	}
	

}
