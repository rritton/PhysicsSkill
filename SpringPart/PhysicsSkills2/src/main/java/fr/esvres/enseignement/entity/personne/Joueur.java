package fr.esvres.enseignement.entity.personne;

//A "joueur" is an user
public class Joueur {
	
	//Attributes
	private int id;
	private String nom;
	private String prenom;
	private String motDepasse;
	
	
	//Constructors
	public Joueur(String nom, String prenom, String motDepasse) {
		this.nom = nom;
		this.prenom = prenom;
		this.motDepasse = motDepasse;
	}

	public Joueur() {
	}
	
	//Methods
	//Just for log
	@Override
	public String toString() {
		return "Le joueur "+ id +" s'appelle "+prenom+ " " +nom ;
	}
	

	
	//Getters & setters
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

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getMotDepasse() {
		return motDepasse;
	}

	public void setMotDepasse(String motDepasse) {
		this.motDepasse = motDepasse;
	}
	

}
