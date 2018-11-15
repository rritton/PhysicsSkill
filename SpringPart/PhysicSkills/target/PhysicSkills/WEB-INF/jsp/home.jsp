<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="f"%>

<%@ page session="false"%>
<c:set var="contextPath" value="${pageContext.request.contextPath}" />

<!DOCTYPE html>

<html>
<head>
<title>Lulul's pages - Accueil</title>
<link type="text/css" rel="stylesheet"
	href="${contextPath}/resources/css/projet.css" />
	<link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
</head>

<body>

	<h1 class="auth">Authentification</h1>
	<c:if test="${loggedPlayer.id == 0}">
		<div id="con">
			<f:form method="POST" action="loginAction"
				modelAttribute="loggedPlayer">
				<label>Nom :</label>
				<f:input path="nom" size="20" />
				<br>
				<label>Prénom :</label>
				<f:input path="prenom" size="20" />
				<br>
				<label>Mot de passe :</label>
				<f:password path="password" size="20" />
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
				href="disconnect?idLoggedUser=${loggedPlayer.id}" style="">Se
				déconnecter</a>
		</div>
	</c:if>

	<div class="auth">
		<c:out value="${message}" />
	</div>
</body>
</html>
