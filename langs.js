// MyHabboPlus Languages
var prefLang;
var text;
function loadLang() {
	if(prefLang=="en"){
		myhpLang="en"; // English
	}else  if(prefLang=="es"){
		myhpLang="es"; // Spanish
	}else if(prefLang=="pt"){
		myhpLang="pt"; // Portuguese
	}else if(prefLang=="fr"){
		myhpLang="fr"; // Français
	}else{
		myhpLang=navigator.language.match(/[a-z]+/); // Auto detection.
	}
	if(myhpLang=="es") {
		
		text= {
			"Close": "Cerrar",
			"Error": "Error",
			"NoConnect": "Error de conexión.",
			"Loading": "Cargando...",
			"Hour": "Hora",
			"Hours": "Horas",
			"Day": "Día",
			"Days": "Días",
			"Week": "Semana",
			"Weeks": "Semanas",
			"Never": "Nunca",

			"LightboxTitle": "¡Atención!",
			"Preferences": "Preferencias",
			"PreferencesGeneral": "General",
			"PreferencesVersion": "Estás ejecutando la versión",
			"PreferencesUpdate": "Buscar actualizaciones",
			"PreferencesUpdateFreq": "Frecuencia de búsqueda de actualizaciones",
			"PreferencesUpdateChannel": "Canal de actualización",
			"PreferencesUpdateChannelRelease": "Versiones finales (Recomendado)",
			"PreferencesUpdateChannelBeta": "Beta",
			"PreferencesUpdateChannelCustom": "Personalizado (Para expertos)",
			"Language": "Idioma",
			"LanguageAuto": "Detectar automáticamente",
			"PreferencesModules": "Módulos",
			"PreferencesTheme": "Tema alternativo",
			"PreferencesHomeInfo": "Información en Habbo Home",
			"PreferencesHabboSearch": "Buscador de habbos",
			"PreferencesNewArticles": "Alerta de nuevas noticias",
			"PreferencesTweet": "Mostrar Tweets de web fans",

			"HomeInfoDetails": "Detalles de usuario",
			"HomeInfoNoExist": "Este Habbo no existe.",
			"HomeInfoAddFriend": "Añadir como amig@",
			"HomeInfoAddError": "Ha habido un error al enviar la solicitud de amistad.",
			"HomeInfoDate": "En Habbo desde:",
			"HomeInfoStatus": "Estado:",
			"HomeInfoLastVisit": "Último acceso:",
			"HomeInfoFriends": "Amigos",
			"HomeInfoFriendSearch": "Buscar...",
			"HomeInfoBadges": "Placas",

			"HabboSearchPlaceholder": "Buscar Habbo...",

			"NewArticles": "Alertar de nuevas noticias",
			"NewArticlesSearching": "Buscando nuevas noticias...",
			"NewArticlesTitle": "¡Nueva noticia!",
			"NewArticlesDetected": "Nueva noticia encontrada. Haz click aquí.",

			"UpdaterNewTitle": "Nueva actualización",
			"UpdaterNewText": "Nueva actualización encontrada:",
			"UpdaterUpdate": "Actualizar ahora",
			"UpdaterNoTitle": "No hay nuevas actualizaciones",
			"UpdaterNoText": "No ha sido detectada ninguna actualización. Estás ejecutando la última versión de MyHabboPlus.",
			"UpdaterErrorTitle": "Error al buscar actualizaciones",
			"UpdaterErrorText": "No ha sido posible conectar con el canal de actualización."
		};
	}else if(myhpLang=="pt") {
		text= {
			"Close": "Fechar",
	        "Error": "Erro",
	        "NoConnect": "Erro de conexão",
	        "Loading": "Carregando...",
	        "Hour": "Hora",
	        "Hours": "Horas",
	        "Day": "Dia",
	        "Days": "Dias",
	        "Week": "Semana",
	        "Weeks": "Semanas",
	        "Never": "Nunca",

	        "LightboxTitle": "Atenção!",
	        "Preferences": "Preferências",
	        "PreferencesGeneral": "Geral",
	        "PreferencesVersion": "Você está executando a versão",
	        "PreferencesUpdate": "Procurar por atualizações",
	        "PreferencesUpdateFreq": "Atualizações frequentes",
	        "PreferencesUpdateChannel": "Atualização de canais",
	        "PreferencesUpdateChannelRelease": "Versões finais (recomendado)",
	        "PreferencesUpdateChannelBeta": "Beta",
	        "PreferencesUpdateChannelCustom": "Personalizado (para especialistas)",
	        "Language": "Idioma",
	        "LanguageAuto": "Detecção automática",
	        "PreferencesModules": "Módulos",
	        "PreferencesTheme": "Tema alternativo",
	        "PreferencesHomeInfo": "Informação do Habbo",
	        "PreferencesHabboSearch": "Pesquise por usuário Habbo",
	        "PreferencesNewArticles": "Alerta para novos artigos",
	        "PreferencesTweet": "Mostrar tweets de fã sites",

	        "HomeInfoDetails": "Detalhes do usuário",
	        "HomeInfoNoExist": "Este Habbo não existe.",
	        "HomeInfoAddFriend": "Adicionar como amigo",
	        "HomeInfoAddError": "Houve um erro ao solicitar a amizade.",
	        "HomeInfoDate": "Sou usuário Habbo desde:",
	        "HomeInfoStatus": "Status:",
	        "HomeInfoLastVisit": "Último login:",
	        "HomeInfoFriends": "Friends",
	        "HomeInfoFriendSearch": "Pesquisar...",
	        "HomeInfoBadges": "Emblemas",

	        "HabboSearchPlaceholder": "Pesquisar usuário Habbo...",

	        "NewArticles": "Alerta para novos artigos",
	        "NewArticlesSearching": "Pesquisando novos artigos...",
	        "NewArticlesTitle": "Nova notícia!",
	        "NewArticlesDetected": "Nova notícia encontrada. Clique aqui.",

	        "UpdaterNewTitle": "Nova atualização",
	        "UpdaterNewText": "Nova atualização encontrada:",
	        "UpdaterUpdate": "Atualize agora",
	        "UpdaterNoTitle": "Não há novas atualização",
	        "UpdaterNoText": "Nenhuma atualização encontrada, você está usando a versão mais recente do MyHabboPlus.",
	        "UpdaterErrorTitle": "Houve um erro ao tentar buscar novas atualizações",
	        "UpdaterErrorText": "Não foi possível conectar com o canal de atualizações."
      	}
	}else{
		// French
		
	}else if(myhpLang=="fr") {
		text= {
			text= {
                        "Close": "Fermer",
                        "Error": "Erreur",
                        "NoConnect": "Connexion erreur",
                        "Loading": "Chargement...",
                        "Hour": "Heure",
                        "Hours": "Heures",
                        "Day": "Jour",
                        "Days": "Jours",
                        "Week": "Semaine",
                        "Weeks": "Semaine",
                        "Never": "Jamais",
 
                        "LightboxTitle": "Attention!",
                        "Preferences": "Préférence",
                        "PreferencesGeneral": "Général",
                        "PreferencesVersion": "Vous êtes entrain d'utiliser cette version",
                        "PreferencesUpdate": "Recherche de mises à jour",
                        "PreferencesUpdateFreq": "Fréquence de mises à jour",
                        "PreferencesUpdateChannel": "Mises à jour de la chaîne",
                        "PreferencesUpdateChannelRelease": "Dernières mises à jour de la chaîne",
                        "PreferencesUpdateChannelBeta": "Beta",
                        "PreferencesUpdateChannelCustom": "Personnalisé (pour les experts)",
                        "Language": "Langage",
                        "LanguageAuto": "Auto-détection",
                        "PreferencesModules": "Modules",
                        "PreferencesTheme": "Thème alternatif",
                        "PreferencesHomeInfo": "Habbo Home Infos",
                        "PreferencesHabboSearch": "Rechercher un habbo",
                        "PreferencesNewArticles": "Alertes de nouveaux articles",
                        "PreferencesTweet": "Voir les tweets des fansites",
 
                        "HomeInfoDetails": "Informations sur l'utilisateur",
                        "HomeInfoNoExist": "Ce Habbo n'existe pas.",
                        "HomeInfoAddFriend": "Ajouter en ami",
                        "HomeInfoAddError": "Une erreur est survenue lors de la demande d'ajout en amis",
                        "HomeInfoDate": "Habbo crée le:",
                        "HomeInfoStatus": "Mission:",
                        "HomeInfoLastVisit": "Dernière connexion:",
                        "HomeInfoFriends": "Amis",
                        "HomeInfoFriendSearch": "Recherche...",
                        "HomeInfoBadges": "Badges",
 
                        "HabboSearchPlaceholder": "Recherche de Habbos…",
 
                        "NewArticles": "Alertes de nouveaux articles",
                        "NewArticlesSearching": "Recherche d'articles en cours...",
                        "NewArticlesTitle": "Nouvel article!",
                        "NewArticlesDetected": "Nouvel article trouvé. Cliquez ici.",
 
                        "UpdaterNewTitle": "Nouvelle mise à jour",
                        "UpdaterNewText": "Nouvelle mise à jour trouvée:",
                        "UpdaterUpdate": "Mettre à jour maintenant",
                        "UpdaterNoTitle": "Aucune nouvelle mise à jour disponible",
                        "UpdaterNoText": "Aucune mise à jour à effectuer. Vous utilisez la dernière version.",
                        "UpdaterErrorTitle": "Erreur de recherche de nouvelles mises à jour",
                        "UpdaterErrorText": "Aucune connexion possible au serveur de mise à jour"
      	}
	}else{
		// English

		text= {
			"Close": "Close",
			"Error": "Error",
			"NoConnect": "Connection error.",
			"Loading": "Loading...",
			"Hour": "Hour",
			"Hours": "Hours",
			"Day": "Day",
			"Days": "Days",
			"Week": "Week",
			"Weeks": "Weeks",
			"Never": "Never",

			"LightboxTitle": "Attention!",
			"Preferences": "Preferences",
			"PreferencesGeneral": "General",
			"PreferencesVersion": "You are running the version",
			"PreferencesUpdate": "Search for updates",
			"PreferencesUpdateFreq": "Frequency for updates",
			"PreferencesUpdateChannel": "Channel update",
			"PreferencesUpdateChannelRelease": "Final releases (Recommended)",
			"PreferencesUpdateChannelBeta": "Beta",
			"PreferencesUpdateChannelCustom": "Custom (For experts)",
			"Language": "Language",
			"LanguageAuto": "Auto detection",
			"PreferencesModules": "Modules",
			"PreferencesTheme": "Alternative theme",
			"PreferencesHomeInfo": "Habbo Home Info",
			"PreferencesHabboSearch": "Habbo Search",
			"PreferencesNewArticles": "Alert for new articles",
			"PreferencesTweet": "Show Tweets by fansites",

			"HomeInfoDetails": "User details",
			"HomeInfoNoExist": "This Habbo doesn't exist.",
			"HomeInfoAddFriend": "Add as friend",
			"HomeInfoAddError": "There was an error sending the friend request.",
			"HomeInfoDate": "In Habbo since:",
			"HomeInfoStatus": "Status:",
			"HomeInfoLastVisit": "Last log in:",
			"HomeInfoFriends": "Friends",
			"HomeInfoFriendSearch": "Search...",
			"HomeInfoBadges": "Badges",

			"HabboSearchPlaceholder": "Search Habbo...",

			"NewArticles": "Alert for new articles",
			"NewArticlesSearching": "Searching new articles...",
			"NewArticlesTitle": "New article!",
			"NewArticlesDetected": "New article found. Click here.",

			"UpdaterNewTitle": "New update",
			"UpdaterNewText": "New update found:",
			"UpdaterUpdate": "Update now",
			"UpdaterNoTitle": "There are no new updates",
			"UpdaterNoText": "No update has been detected. You are running the latest version of MyHabboPlus.",
			"UpdaterErrorTitle": "Error searching updates",
			"UpdaterErrorText": "It has not been possible to connect with the update channel."
		};
	}
}
loadLang();
