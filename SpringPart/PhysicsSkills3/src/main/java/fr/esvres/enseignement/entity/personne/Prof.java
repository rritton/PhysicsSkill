package fr.esvres.enseignement.entity.personne;

import java.util.ArrayList;
import java.util.List;

import fr.esvres.enseignement.entity.Groupe;

public class Prof extends Joueur {
	
	//Attributes
	private List<Groupe> classeList;

	
	//Constructors
	public Prof(String nom, String prenom, String motDepasse, List<Groupe> classeList) {
		super(nom, prenom, motDepasse);
		this.classeList = classeList;
	}

	public Prof() {
		classeList = new ArrayList<Groupe>();
	}
	
	
	//Methods
	public void ajoutCLasse(Groupe groupe) {
		classeList.add(groupe);
	}
	
	@Override
	public String toString() {
		String classesNoms = "";
		for(Groupe classe : classeList) {
			classesNoms += " la "+classe.getNom()+",";
		}
		return "Le prof "+getPrenom()+" "+getNom()+" a "+classeList.size()+" classes ;"+classesNoms.subSequence(0, classesNoms.length()-1);
	}
	
	
	//Getters & setters
	public List<Groupe> getClasseList() {
		return classeList;
	}

	public void setClasseList(List<Groupe> classeList) {
		this.classeList = classeList;
	}
	

}
