package fr.esvres.enseignement.entity.personne;

//A "joueur" is an user
public class Joueur {
	
	//Attributes
	private int id;
	private String nom;
	private String prenom;
	private String role;
	
	
	//Constructors
	public Joueur(String nom, String prenom, String role) {
		this.nom = nom;
		this.prenom = prenom;
		this.role = role;
	}

	public Joueur() {
		this.role = "eleve";
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

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	

}
