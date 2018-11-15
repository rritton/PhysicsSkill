package fr.esvres.enseignement.entity.personne;

import java.util.ArrayList;
import java.util.List;

import fr.esvres.enseignement.entity.Lvl;
import fr.esvres.enseignement.entity.Skill;
import fr.esvres.enseignement.entity.evaluation.Evaluation;

public class Apprenant extends Joueur {
	
	//Attributes
	private List<Evaluation> evaluationListe;
	private int xp;
	private Lvl lvl;
	private int moyenne;
		//compétences de sciences physique
	private List<Skill> sciencePhysiqueSkills;
	

	//Constructors
	public Apprenant(String nom, String prenom, String motDepasse, List<Evaluation> evaluationListe, int xp, Lvl lvl,
			int moyenne, List<Skill> sciencePhysiqueSkills) {
		super(nom, prenom, motDepasse);
		this.evaluationListe = evaluationListe;
		this.xp = xp;
		this.lvl = lvl;
		this.moyenne = moyenne;
		this.sciencePhysiqueSkills = sciencePhysiqueSkills;
	}

	public Apprenant() {
		evaluationListe = new ArrayList<Evaluation>();
		sciencePhysiqueSkills = new ArrayList<Skill>();
	}
	
	
	//Methods
	
	public void ajouterEvaluation(Evaluation evaluation) {
		evaluationListe.add(evaluation);
	}
	
	@Override
	public String toString() {
		return "Apprenant [evaluationListe=" + evaluationListe + ", xp=" + xp + ", lvl=" + lvl + ", moyenne=" + moyenne
				+ ", sciencePhysiqueSkills=" + sciencePhysiqueSkills + "]";
	}
	
	
	
	//Getters & setters
	public List<Evaluation> getEvaluationListe() {
		return evaluationListe;
	}

	public void setEvaluationListe(List<Evaluation> evaluationListe) {
		this.evaluationListe = evaluationListe;
	}

	public int getXp() {
		return xp;
	}

	public void setXp(int xp) {
		this.xp = xp;
	}

	public Lvl getLvl() {
		return lvl;
	}

	public void setLvl(Lvl lvl) {
		this.lvl = lvl;
	}

	public int getMoyenne() {
		return moyenne;
	}

	public void setMoyenne(int moyenne) {
		this.moyenne = moyenne;
	}

	public List<Skill> getSciencePhysiqueSkills() {
		return sciencePhysiqueSkills;
	}

	public void setSciencePhysiqueSkills(List<Skill> sciencePhysiqueSkills) {
		this.sciencePhysiqueSkills = sciencePhysiqueSkills;
	}
	

}
