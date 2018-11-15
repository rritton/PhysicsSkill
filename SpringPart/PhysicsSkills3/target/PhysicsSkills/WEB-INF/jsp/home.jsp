<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="f"%>

<%@ page session="false"%>
<c:set var="contextPath" value="${pageContext.request.contextPath}" />

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<title>Lulul's pages - Accueil</title>
<link type="text/css" rel="stylesheet"	href="${contextPath}/resources/css/projet.css" />

</head>

<body>

	<h1 class="auth">Authentification</h1>
	<c:if test="${loggedPlayer.id == 0}">
		<div id="con">
			<f:form name="authentification" method="POST" action="connection"
				modelAttribute="loggedPlayer">
				<label for="nom">Nom :</label>
				<f:input name="nom" path="nom" size="20" />
				<br>
				<label for="prenom">Prénom :</label>
				<f:input name="prenom" path="prenom" size="20" />
				<br>
				<label for="motDepasse">Mot de passe :</label>
				<f:password name="motDepasse" path="motDepasse" size="20" />
				<br>
				<br>
				<input type="submit" value="Connexion" />
				<input type="reset" value="Annuler" />
			</f:form>
		</div>
	</c:if>

	<c:if test="${loggedPlayer.id != 0}">
		<div>
			Bonjour ${loggedPlayer.prenom} <a
				href="deconnection" style="">
				Se déconnecter</a>
		</div>
	</c:if>

	<div class="auth" style="color:red">
		<c:out value="${message}" />
	</div>
</body>
</html>
