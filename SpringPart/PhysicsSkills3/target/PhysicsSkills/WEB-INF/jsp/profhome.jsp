<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Lulul's pages - Espace enseignant</title>
</head>
<body>
	<c:if test="${loggedPlayer.id != 0}">
		<div>
			Bonjour ${loggedPlayer.prenom} <a
				href="deconnection" style="">
				Se déconnecter</a>
		</div>
	</c:if>
	
	<c:if test="${loggedPlayer.classeList.size() > 0 }">
	<table>
	<tr><th>Classe</th><th>Dernière éval</th></tr>
	<c:forEach items="${ loggedPlayer.classeList }" var="groupe" > 
	<tr><td>${ groupe.nom }</td><td>${ groupe.evaluationListe.get(groupe.evaluationListe.size()-1).date }</td>
	<td><a href="neweval?id=${ groupe.id }"><button >Ajouter éval</button></a></td></tr>
	</c:forEach>
	</table>
	</c:if>

	<div><a href="newclasses?id=${ loggedPlayer.id }"><button>Ajouter une classe</button></a></div>

</body>
</html>