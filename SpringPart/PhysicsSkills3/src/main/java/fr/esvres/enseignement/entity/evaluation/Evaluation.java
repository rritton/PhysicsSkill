package fr.esvres.enseignement.entity.evaluation;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

public class Evaluation {
	
	//Attributes
	private int id;
	private String nom;
	@DateTimeFormat(pattern="dd-MM-yyyy") 
	private Date date;
	private List<Exercice> exercicesListe;
	
	
	//Constructors
	public Evaluation(String nom, Date date, List<Exercice> exercicesListe) {
		this.nom = nom;
		this.date = date;
		this.exercicesListe = exercicesListe;
	}

	public Evaluation() {
		this.exercicesListe = new ArrayList<Exercice>();
	}

	
	//Getters & Setters
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public List<Exercice> getExercicesListe() {
		return exercicesListe;
	}

	public void setExercicesListe(List<Exercice> exercicesListe) {
		this.exercicesListe = exercicesListe;
	}
	
}
