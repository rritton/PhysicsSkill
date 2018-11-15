package fr.esvres.enseignement.util;

import org.apache.log4j.Logger;
import org.mindrot.jbcrypt.BCrypt;

//Class d'encryptage des mots de pass
public class Encrypt {
	private static final Logger logger = Logger.getLogger(Encrypt.class);
	
	public static String hashageMdP(String motDePasse) {
		logger.info("In hashageMdP (" + motDePasse +")");
		String hashed = BCrypt.hashpw(motDePasse, BCrypt.gensalt());		//fonction de hashage
		logger.info("Out of hashageMdP (" + motDePasse +"), returns : " +hashed);
		return hashed;
	}
	
	public static boolean verificationMdP(String motDePasse, String hashed) {
		logger.info("In verificationMdP (" + motDePasse +", "+hashed +")");
		if (BCrypt.checkpw(motDePasse,hashed)) {
			logger.debug("C'est le bon mot de passe");
			return true;
		}
		else {
			logger.debug("Ce n'est pas le bon mot de passe");
			return false;
		}
	}
}
