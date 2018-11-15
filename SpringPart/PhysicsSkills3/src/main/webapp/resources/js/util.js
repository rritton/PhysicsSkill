function alreadyConnetHome(){
	var utilisateur; 
	if(!localStorage.getItem('utilisateur')){
		utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
		document.authentification.nom.value = utilisateur.nom;
		document.authentification.prenom.value = utilisateur.prenom;
		document.authentification.motDepasse.value = utilisateur.motDepasse;
		
		localStorage.clear();
		
		document.authentification.sumit();		
	}
	if(!sessionStorage.getItem('utilisateur')){
		utilisateur = JSON.parse(sessionStorage.getItem('utilisateur'));
		document.authentification.nom.value = utilisateur.nom;
		document.authentification.prenom.value = utilisateur.prenom;
		document.authentification.motDepasse.value = utilisateur.motDepasse;
		
		sessionStorage.clear();
		
		document.authentification.sumit();		
	}
}

function alreadySave(){
	if(!localStorage.getItem('utilisateur')){
	
	}
	else if(!sessionStorage.getItem('utilisateur')){
		
	}
}