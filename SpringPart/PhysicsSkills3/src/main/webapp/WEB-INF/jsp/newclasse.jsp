<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="f"%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Lulul's pages - Ajouter une classe</title>
</head>
<body>
	<div>
		Bonjour ${loggedPlayer.prenom} <a href="deconnection" > Se
			déconnecter</a>
	</div>

	<div >
		<f:form name="classe" method="POST" action="ajoutclasse"
			modelAttribute="newClasse">
			<label for="nom">Nom :</label>
			<f:input name="nom" path="nom" size="20" />
			<br>
			<br>
			<input type="submit" value="Créer" />
			<input type="reset" value="Annuler" />
		</f:form>
	</div>

</body>
</html>