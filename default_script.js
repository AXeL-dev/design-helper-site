/* Default Script for Design Helper By AXeL
   Failles :
   			- Faille de ouf xD (corrigé !) : si on ouvre un des fichiers javascript du site/ou autre qui contient 'name="parent"' il s'ouvre même si ce n'est pas un fichier de design, solution : utiliser une balise meta ou autre (mais j'en ai pas envie la, fait chier tt ce code à chercher/modifier dedans xD)
   			- 2ème faille de ouf mdr (corrigé !) : si tt les div à l'intérieur de 'tools' ont été fermé/supprimé, l'importation ne marche plus, et c'est normal, il ne reste plus aucune balise pr le clonnage mdr, solution : toolDivClone doit devenir gloable
*/

(function () { // IEF (fonction anonyme) pr ne pas polluer l'espace global

// variables globales
var spanForParsing = document.getElementById('demo_view'),
	scrollDiv = document.getElementById('scroll_div'),
	toolDivClone = scrollDiv.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.cloneNode(true), // sera utiliser dans les clones (balise bodyWrapper => name = 1)
	designDivsFixedNumber = 3, // car au début on a 3 div ('Header', 'Body Wrapper', 'Footer')
	metaSaveContent = 'design_save';

/*-------- demoView --------*/
function createHtmlElement(elementTag, eClassName, eInnerHTML, eWidth, eHeight, eBackground, eBorderPosition, eBorder, eBorderRadius, eMargin, ePadding, eDisplay, eFloat, eFontSize, ePosition, eTop, eLeft, eRight, eBottom, eTextAlign, eColor, eTextDecoration, eFontFamily, eFontWeight) {
	htmlElement = document.createElement(elementTag);
	htmlElement.className = eClassName;
	htmlElement.innerHTML = eInnerHTML;
	/*
	htmlElement.style.width = eWidth;
	htmlElement.style.height = eHeight;
	htmlElement.style.background = eBackground;
	htmlElement.style.border = eBorder;
	htmlElement.style.margin = eMargin;
	htmlElement.style.padding = ePadding;
	*/
	htmlElement.setAttribute('style', 'width: ' + eWidth + '; height: ' + eHeight + '; display: ' + eDisplay + '; float: ' + eFloat + '; background: ' + eBackground + '; border' + eBorderPosition + ': ' + eBorder + '; border-radius: ' + eBorderRadius + '; margin: ' + eMargin + '; padding: ' + ePadding + '; font-size: ' + eFontSize + 'px; position: ' + ePosition + '; top: ' + eTop + '; left: ' + eLeft + '; right: ' + eRight + '; bottom: ' + eBottom + '; text-align: ' + eTextAlign + '; color: ' + eColor + '; text-decoration: ' + eTextDecoration + '; font-family: ' + eFontFamily + '; font-weight: ' + eFontWeight);
	
	return htmlElement;
}

function demoView() {
	var scrollDivChild = scrollDiv.firstChild,
		div_innerHTML, div_width, div_height, div_display, div_float, div_background, div_borderStyle, div_borderPosition, div_borderPixels, div_borderColor, div_borderRadius, div_margin, div_padding, div_fontSize, div_position, div_top, div_left, div_right, div_bottom, div_textAlign, div_color, div_textDecoration, div_fontFamily, div_fontWeight, border;

	/* vidage */
	//alert(spanForParsing.hasChildNodes());
	while (spanForParsing.hasChildNodes()) {
    	spanForParsing.removeChild(spanForParsing.lastChild);
	}
	//spanForParsing.innerHTML = '';

	/* remplisage */
	while (scrollDivChild != null) {
	if (scrollDivChild.tagName == 'DIV') {
		//alert(scrollDivChild.className);
		div_innerHTML = scrollDivChild.firstChild.nextSibling.firstChild.nextSibling.nextSibling;
		div_fontSize = div_innerHTML.nextSibling.nextSibling;
		div_width = scrollDivChild.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
		div_height = div_width.nextSibling.nextSibling.nextSibling.nextSibling;
		div_display = div_height.nextSibling.nextSibling.nextSibling.nextSibling;
		div_float = div_display.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
		div_position = div_float.nextSibling.nextSibling;
		div_background = div_position.nextSibling.nextSibling.nextSibling.nextSibling;
		div_borderStyle = div_background.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
		div_borderPosition = div_borderStyle.nextSibling.nextSibling;
		div_borderPixels = div_borderPosition.nextSibling.nextSibling;
		div_borderColor = div_borderPixels.nextSibling.nextSibling;
		div_borderRadius = div_borderColor.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
		div_margin = div_borderRadius.nextSibling.nextSibling.nextSibling.nextSibling;
		div_padding = div_margin.nextSibling.nextSibling.nextSibling.nextSibling;
		div_top = div_padding.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
		div_left = div_top.nextSibling.nextSibling.nextSibling.nextSibling;
		div_right = div_left.nextSibling.nextSibling.nextSibling.nextSibling;
		div_bottom = div_right.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
		div_textAlign = div_bottom.nextSibling.nextSibling.nextSibling.nextSibling;
		div_color = div_textAlign.nextSibling.nextSibling.nextSibling.nextSibling;
		div_textDecoration = div_color.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
		div_fontFamily = div_textDecoration.nextSibling.nextSibling.nextSibling.nextSibling;
		div_fontWeight = div_fontFamily.nextSibling.nextSibling.nextSibling.nextSibling;
		
		if (div_borderStyle.value != 'none')
			border = div_borderPixels.value + ' ' + div_borderStyle.value + ' ' + div_borderColor.value;
		else
			border = 'none';
		var divToAdd = createHtmlElement('div',
					  		   scrollDivChild.getAttribute('name'),
					  		   div_innerHTML.value,
					 		   div_width.value,
					  		   div_height.value,
					  		   div_background.value,
							   div_borderPosition.value,
					  		   border,
							   div_borderRadius.value,
							   div_margin.value,
							   div_padding.value,
							   div_display.value,
							   div_float.value,
							   div_fontSize.value,
							   div_position.value,
							   div_top.value,
							   div_left.value,
							   div_right.value,
							   div_bottom.value,
							   div_textAlign.value,
							   div_color.value,
							   div_textDecoration.value,
							   div_fontFamily.value,
							   div_fontWeight.value);
		/* ajout / insértion / affichage */
		if (scrollDivChild.className != 'parent') {// si c'est une balise fille (à ajouter dans une balise mère existante)
			var spanForParsingChild = spanForParsing.firstChild;
			while (spanForParsingChild != null) {
				if (spanForParsingChild.tagName == 'DIV') {
					//alert(spanForParsingChild.className + ' - ' + scrollDivChild.className);
					if (spanForParsingChild.className == scrollDivChild.className) { // si on trouve la balise mère dans laquelle on doit ajouter
						//alert(spanForParsingChild.className);
						spanForParsingChild.appendChild(divToAdd); // ajout
					}
				}
				spanForParsingChild = spanForParsingChild.nextSibling;
			}
		}
		else {
			//alert(divToAdd.className);
			spanForParsing.appendChild(divToAdd);
		}
		
		//alert(divToAdd.getAttribute('name'));
		divToAdd.setAttribute('name', scrollDivChild.className); // on grave le nom dessus ce qui permettra de l'importer plustard
	} // fin if
		scrollDivChild = scrollDivChild.nextSibling;
	} // fin while
}

/*-------- initButtonsRandomAndImg ---------*/
function randomHexaNumber() { // fonction qui génère un nombre hexadécimal aléatoire
	var rNumber = Math.floor((Math.random() * 16) + 0); // 15 (maximum hexadécimal) + 1 = 16
	switch (rNumber)
	{
		case 10: rNumber = 'a'; break;
		case 11: rNumber = 'b'; break;
		case 12: rNumber = 'c'; break;
		case 13: rNumber = 'd'; break;
		case 14: rNumber = 'e'; break;
		case 15: rNumber = 'f'; break;
	}
	return rNumber;
}

function initButtonsRandomAndImg() {
	var buttonsRandom = document.getElementsByName('random_color'),
		buttonsRandomLenght = buttonsRandom.length,
		autoShowRandomColor = document.getElementById('random_color_auto');
	
	for (var i = 0; i < buttonsRandomLenght; i++) {
		if (buttonsRandom[i].onclick == null) {
			buttonsRandom[i].onclick = function () {
				//alert(this.previousSibling.previousSibling);
				this.previousSibling.previousSibling.value = '#' + randomHexaNumber() + randomHexaNumber() + randomHexaNumber() + randomHexaNumber() + randomHexaNumber() + randomHexaNumber();
				if (autoShowRandomColor.checked)
					demoView();
			};
			// buttons img
			var buttonImg = buttonsRandom[i].nextSibling.nextSibling;
			if (buttonImg.className == 'd_img_btn') {
				if (buttonImg.onclick == null) {
					//alert(buttonImg.nextSibling.nextSibling.className);
					buttonImg.nextSibling.nextSibling.onchange = function () {
						var backgroundInput = this.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling;
						//alert(backgroundInput.value);
						//if (this.value.indexOf('png') + 3 == this.value.length ||
							//this.value.indexOf('jpg') + 3 == this.value.length ||
							//this.value.indexOf('jpeg') + 4 == this.value.length ||
							//this.value.indexOf('gif') + 3 == this.value.length) {
							backgroundInput.value = 'url("' + this.value.replace(/^.*\\/, "") + '") no-repeat';// center'; //.replace() sert à enlever 'C:\\fakepath\\' du nom de l'image dans webkit
							//alert('si l\'image ne s\'affiche pas, veuillez ajouter son chemin vous même !');
							demoView(); // actualisation/affichage
						//}
						//else
							//alert('non image');
					};
					buttonImg.onclick = function () { this.nextSibling.nextSibling.click(); };
				}
			}
		}
	}
}

/*-------- initButtonGenerer ---------*/
function initButtonGenerer() {
	var buttonGenerer = document.getElementById('button_generer');
	
	buttonGenerer.onclick = function () { demoView(); };
	/* clic sur entrée */
	document.onkeydown = function (event) {
		if (event.keyCode == 13) // touche entrée
			demoView();
	};
	/* style zone affichage */
	//spanForParsing.setAttribute('style', 'font-weight: bold;');
}

/*-------- initButtonEnregistrer --------*/
function enregistrer(fileName, fileTextContent) {
    var tmpA = document.createElement('a');
    tmpA.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileTextContent));
    tmpA.setAttribute('download', fileName);
	document.body.appendChild(tmpA);
	tmpA.click();
	document.body.removeChild(tmpA);
}

function initButtonEnregistrer() {
	var buttonEnregistrer = document.getElementById('button_enregistrer');
	
	buttonEnregistrer.onclick = function () {
		var htmlCode = '<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<meta charset="utf-8" />\n\t\t<meta name="design_helper" content="' + metaSaveContent + '" />\n\t\t<title>Design</title>\n\t</head>\n\n\t<body>\n\t\t' + document.getElementById('demo_view').innerHTML.trim() + '\n\t</body>\n</html>';
		enregistrer('design.html', htmlCode);
	};
}

/*-------- initDisplayCombos --------*/
function initAllComboBoxs() {
	/* on initialise les comboBox 'Display' au début */
	initDisplayComboboxs();
	/* puis les autres */
	var comboBoxs = document.getElementsByTagName('select'),
		comboBoxsLength = comboBoxs.length;
	
	for (var i = 0; i < comboBoxsLength; i++) {
		if (comboBoxs[i].onchange == null) {
			comboBoxs[i].onchange = function () {
				/* on enlève les attributs de séléection */
				for (var j = 0; j < this.options.length; j++)
					this.options[j].removeAttribute('selected');
				/* on séléctionne l'option actuelle */
				this.options[this.selectedIndex].setAttribute('selected', 'selected');
			};
		}
	}
}

function initDisplayComboboxs() {
	var displayCombos = document.getElementsByName('d_display'),
		displayCombosLength = displayCombos.length;

	for (var i = 0; i < displayCombosLength; i++) {
		if (displayCombos[i].onchange == null) {
			displayCombos[i].onchange = function () {
				var floatCombo = this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
				//alert(this.options[this.selectedIndex].innerHTML);
				if (this.options[this.selectedIndex].innerHTML == 'inline-block') {
					//alert(this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling);
					floatCombo.selectedIndex = 1; /* float: left; */
				}
				else
					floatCombo.selectedIndex = 0; /* float: none; */
				/* on enlève les attributs de séléction */
				for (var j = 0; j < this.options.length; j++)
					this.options[j].removeAttribute('selected');
				/* on séléctionne l'option actuelle */
				this.options[this.selectedIndex].setAttribute('selected', 'selected');
				floatCombo.options[floatCombo.selectedIndex].setAttribute('selected', 'selected');
			};
		}
	}
}

/*-------- initButtonPlus --------*/
/*
function removeIdOrFor(insideHtmlElement) {
	while (insideHtmlElement != null) {
		if (insideHtmlElement.id != '')
			insideHtmlElement.id = '';
		else if (insideHtmlElement.htmlFor != '')
			insideHtmlElement.htmlFor = '';

		insideHtmlElement = insideHtmlElement.nextSibling;
	}
}
*/

function initButtonPlus() {
	var buttonPlus = document.getElementById('button_plus'),
		//designDivBodyWrapper = document.getElementById('design_body_wrapper').parentNode,
		//designDivBodyWrapper = scrollDiv.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
		buttonDefault = document.getElementById('button_default'),
		spanTools = document.getElementById('tools');

	buttonPlus.onclick = function () {
		/* création/affichage des options (dans une balise div) */
		var plusOptions = document.createElement('div'),
			divContainer1 = document.createElement('div'),
			divContainer2 = document.createElement('div'),
			divContainer3 = document.createElement('div'),
			label1 = document.createElement('label'),
			label2 = document.createElement('label'),
			label3 = document.createElement('label'),
			comboBox1 = document.createElement('select'),
			comboBox2 = document.createElement('select'),
			textBox1 = document.createElement('input'),
			buttonAjouter = document.createElement('input'),
			buttonFermer = document.createElement('input'),
			scrollDivChild = scrollDiv.firstChild,
			designDivs = [], // tableau vide
			designDivsLength = 0;
		
		// on remplie le tableau
		while (scrollDivChild != null) {
			if (scrollDivChild.tagName == 'DIV') {
				designDivs[designDivsLength] = scrollDivChild;
				designDivsLength++;
			}
			scrollDivChild = scrollDivChild.nextSibling;
		}
		/* ajustement */
			/* label 1 & comboBox 1 */
			label1.innerHTML = 'clooner depuis';
			label1.setAttribute('style', 'display: inline-block; width: 130px; text-align: right; padding-right: 10px;');
			/* remplissage comboBox 1 & 2 */
			comboBox1.options[comboBox1.options.length] = new Option('(aucun)', 'none');
			comboBox2.options[comboBox2.options.length] = new Option('la page (à la fin)', 'demo_view');
			for (var i = 0; i < designDivsLength; i++) {
				comboBox1.options[comboBox1.options.length] = new Option(designDivs[i].firstChild.nextSibling.firstChild.nextSibling.nextSibling.value, designDivs[i].getAttribute('name'));
				if (designDivs[i].className == 'parent') // si balise mère (on peut y mettre une balise fille) ajout ds la combo 2 alors
					comboBox2.options[comboBox2.options.length] = new Option(designDivs[i].firstChild.nextSibling.firstChild.nextSibling.nextSibling.value, designDivs[i].getAttribute('name'));
			}
			/* Fin remplissage */
			comboBox1.setAttribute('style', 'color: #121212; width: 120px; font-weight: bold;');
			comboBox1.onchange = function () {
				if (comboBox1.value == 'none')
					textBox1.value = 'New';
				else
					textBox1.value = comboBox1.options[comboBox1.selectedIndex].innerHTML;
			};
			divContainer1.appendChild(label1);
			divContainer1.appendChild(comboBox1);
			divContainer1.setAttribute('style', 'margin: 20px 0px;');
			/* label 2 & comboBox 2 */
			label2.innerHTML = 'insérér dans';
			label2.setAttribute('style', 'display: inline-block; width: 130px; text-align: right; padding-right: 10px;');
			comboBox2.setAttribute('style', 'color: #121212; width: 120px; font-weight: bold;');
			divContainer2.appendChild(label2);
			divContainer2.appendChild(comboBox2);
			divContainer2.setAttribute('style', 'margin: 20px 0px;');
			/* label 3 & textBox 1 */
			label3.innerHTML = 'nommer';
			label3.setAttribute('style', 'display: inline-block; width: 130px; text-align: right; padding-right: 10px;');
			textBox1.setAttribute('style', 'color: #555555; width: 120px; font-weight: bold;');
			textBox1.type = 'text';
			textBox1.value = 'New';
			divContainer3.appendChild(label3);
			divContainer3.appendChild(textBox1);
			divContainer3.setAttribute('style', 'margin: 20px 0px;');
			/* button Ajouter & button Fermer */
			buttonAjouter.type = 'button';
			buttonAjouter.value = 'Ajouter';
			buttonAjouter.setAttribute('style', 'margin: 5px; padding: 5px 20px;');
			buttonFermer.type = 'button';
			buttonFermer.value = 'Fermer';
			buttonFermer.setAttribute('style', 'margin: 5px; padding: 5px 20px;');
		/* Even. click boutton Annuler */
		buttonFermer.onclick = function () { document.body.removeChild(plusOptions); spanTools.className = ''; /* pr activer les éven. */ };
		/* Even. click du boutton Ajouter */
		buttonAjouter.onclick = function () {
			/* clonage */
			var newDesignDiv,
				//nextElement,
				div_innerHTML;
			//alert(designDivs[comboBox1.value].firstChild.nextSibling.firstChild.value);
			if (comboBox1.value == 'none') {
				newDesignDiv = toolDivClone.cloneNode(true); /* juste ça pr le clonnage */
				/* quelques modifications d'apparence */
				var div_width = newDesignDiv.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling,
					div_height = div_width.nextSibling.nextSibling.nextSibling.nextSibling,
					div_display = div_height.nextSibling.nextSibling.nextSibling.nextSibling,
					div_float = div_display.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					div_position = div_float.nextSibling.nextSibling,
					div_background = div_position.nextSibling.nextSibling.nextSibling.nextSibling,
					div_borderStyle = div_background.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					div_borderPosition = div_borderStyle.nextSibling.nextSibling,
					div_borderPixels = div_borderPosition.nextSibling.nextSibling,
					div_borderColor = div_borderPixels.nextSibling.nextSibling,
					div_borderRadius = div_borderColor.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					div_margin = div_borderRadius.nextSibling.nextSibling.nextSibling.nextSibling,
					div_padding = div_margin.nextSibling.nextSibling.nextSibling.nextSibling,
					div_top = div_padding.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					div_left = div_top.nextSibling.nextSibling.nextSibling.nextSibling,
					div_right = div_left.nextSibling.nextSibling.nextSibling.nextSibling,
					div_bottom = div_right.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					div_textAlign = div_bottom.nextSibling.nextSibling.nextSibling.nextSibling,
					div_color = div_textAlign.nextSibling.nextSibling.nextSibling.nextSibling,
					div_textDecoration = div_color.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					div_fontFamily = div_textDecoration.nextSibling.nextSibling.nextSibling.nextSibling,
					div_fontWeight = div_fontFamily.nextSibling.nextSibling.nextSibling.nextSibling;
				div_width.value = '100px';
				div_height.value = '100px';
				div_display.selectedIndex = 1;
				div_display.options[1].setAttribute('selected', 'selected');
				div_float.selectedIndex = 1;
				div_float.options[1].setAttribute('selected', 'selected');
				div_background.value = '#' + randomHexaNumber() + randomHexaNumber() + randomHexaNumber() + randomHexaNumber() + randomHexaNumber() + randomHexaNumber();
				div_borderStyle.selectedIndex = 0;
				div_borderStyle.options[0].setAttribute('selected', 'selected');
				div_borderRadius.value = '0px';
				div_margin.value = '0px';
				div_padding.value = '0px';
				div_top.value = '0px';
				div_left.value = '0px';
				div_right.value = '0px';
				div_bottom.value = '0px';
				div_textAlign.selectedIndex = 0;
				//div_textAlign.options[0].setAttribute('selected', 'selected'); // pas la peine car c'est le premier élement (tj 1er par défaut)
				div_color.value = 'black';
				div_position.selectedIndex = 0; // premier élement aussi
				div_textDecoration.selectedIndex = 0;
				div_fontFamily.selectedIndex = 0;
				div_fontWeight.selectedIndex = 0;
				//alert(newDesignDiv.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.className);
				newDesignDiv.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.value = 30; /* fontSize */
			}
			else {
				//newDesignDiv = designDivs[comboBox1.value].cloneNode(true);
				for (var i = 0; i < designDivsLength; i++) {
					if (designDivs[i].getAttribute('name') == comboBox1.value) {
						newDesignDiv = designDivs[i].cloneNode(true);
						break;
					}
				}
			}
			
			/* on retire les id/for des balises */
			//nextElement = newDesignDiv.firstChild.nextSibling;
			//removeIdOrFor(nextElement);
			//nextElement = newDesignDiv.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
			//removeIdOrFor(nextElement); /* 2ème passage (sur les balises à l'intérieur de la balise nextElement) */
			/* affichage des options/pieces de design si cachés */
			var div_designPieces = newDesignDiv.firstChild.nextSibling.nextSibling.nextSibling;
			if (div_designPieces.style.display == 'none')
				div_designPieces.style.display = 'inline-block';
			/* modification du innerHTML */
			div_innerHTML = newDesignDiv.firstChild.nextSibling.firstChild.nextSibling.nextSibling;
			div_innerHTML.value = textBox1.value;
			/* création du boutton de suppression */
			var oldButtonSupprimer = div_innerHTML.nextSibling.nextSibling.nextSibling;
			//alert(oldButtonSupprimer);
			if (oldButtonSupprimer == null) { // si boutton supprimer inexistant (=> 'Header' | 'Body Wrapper' | 'Footer')
				var buttonSupprimer = document.createElement('input');
				buttonSupprimer.type = 'button';
				buttonSupprimer.className = 'dark_buttons';
				buttonSupprimer.value = 'x';
				buttonSupprimer.setAttribute('style', 'float: right; height: 25px;');
				buttonSupprimer.onclick = function () { scrollDiv.removeChild(this.parentNode.parentNode); demoView(); };
				div_innerHTML.parentNode.appendChild(buttonSupprimer);
			}
			else // s'il existe (cloné) on lui donne un éven click (car le clonnage ne copie pas les évennements)
				oldButtonSupprimer.onclick = function () { scrollDiv.removeChild(this.parentNode.parentNode); demoView(); };
			/* ajout à la scrollDiv */
			newDesignDiv.setAttribute('name', designDivsFixedNumber); // on change le nom (qui sera utilisé pr le className ds la demoView()) pr éviter les erreurs lors de la demoView()
			scrollDiv.appendChild(newDesignDiv);
			/* on glisse la scrollbar en bas */
			scrollDiv.scrollTop = scrollDiv.scrollHeight;
			/* rénitialisation des bouttons de couleurs aléatoires + combobox display + fontSizeInput + hideShowInput etc (juste les nv) */
			initButtonsRandomAndImg();
			initSpecialCharsSelects(); // à mettre avant initAllComboBoxs(); pour éviter de ruiner les éven. des selects/comboBoxs
			initAllComboBoxs();
			initFontSizeInputs();
			initHideShow();
			initButtonQuestion();
			/* affichage + actualisation des comboBox 1 & 2 */
			if (comboBox2.value != 'demo_view') { // on précise l'emplacement d'insértion demandé avant tout
				newDesignDiv.className = comboBox2.value; // balise non mère (fille)
				//alert(newDesignDiv.className + ' - ' + newDesignDiv.getAttribute('name'));
			}
			else {
				newDesignDiv.className = 'parent';
				comboBox2.options[comboBox2.options.length] = new Option(div_innerHTML.value, designDivsFixedNumber);
			}
			/* ce qui permettra d'insérer une balise à l'intérieur d'une balise mère à l'aide du nom de class (s'il est != de 'demo_view', si nn l'insértion sera à la fin) */
			comboBox1.options[comboBox1.options.length] = new Option(div_innerHTML.value, designDivsFixedNumber);
			demoView(); /* affichage dans la demo_view */
			/* actualisation des designDivs et leur nombre qu'on a en mémoire (car la boîte d'ajout n'est pas encore fermé) */
			designDivs[designDivsLength] = newDesignDiv;
			designDivsLength++;
			designDivsFixedNumber++; // on incrémente le nbr fixe (qui permet d'éviter que 2 div aient le meme nom de class) içi après l'avoir affecté au comboBoxs
			/* désactivation du boutton 'Valeurs par défaut' car il peut causer des blèmes */
			if (buttonDefault.disabled == false)
				buttonDefault.disabled = true;
		}; // fin fonction boutton Ajouter
		/* imbrication / insértion */
		plusOptions.appendChild(divContainer1);
		plusOptions.appendChild(divContainer2);
		plusOptions.appendChild(divContainer3);
		plusOptions.appendChild(buttonAjouter);
		plusOptions.appendChild(buttonFermer);
		plusOptions.setAttribute('style', 'width: 300px; height: 220px; background: #14171a; position: fixed; top: calc(50% - 110px); left: 120px; border: 1px dotted #f4f3f3; border-radius: 5px; text-align: center;');
		/* ajout pour affichage de la boite d'options */
		document.body.appendChild(plusOptions);
		/* désactivation des éven. (du span #tools) */
		spanTools.className = 'disable_all';
	}; // fin fonction boutton plus
}

/*--------- initFontSize --------*/
function initFontSizeInputs() {
	var fontSizeInputs = document.getElementsByName('font_size_input'),
		fontSizeInputsLen = fontSizeInputs.length;

	for (var i = 0; i < fontSizeInputsLen; i++) {
		if (fontSizeInputs[i].onchange == null) {
			fontSizeInputs[i].onchange = function () { demoView(); /* on actualise la zone d'affichage */ };
		}
	}
}

/*-------- initHideShow --------*/
function initHideShow() {
	var hideShowInputs = document.getElementsByName('hide_show'),
		hideShowInputsLen = hideShowInputs.length;

	for (var i = 0; i < hideShowInputsLen; i++) {
		if (hideShowInputs[i].onclick == null) {
			hideShowInputs[i].onclick = function () {
				var currentInputStyle = this.parentNode.nextSibling.nextSibling.style;
				if (currentInputStyle.display != 'none')
					currentInputStyle.display = 'none';
				else {
					currentInputStyle.display = 'inline-block'; // car c'est une balise span
					/* on glisse la scrollbar à la position actuelle */
					//alert(this.offsetTop);
					scrollDiv.scrollTop = this.offsetTop - 10; /* -10 pour éviter d'être au dessous du boutton hide_show */
				}
			};
		}
	}
}

/*-------- initSpecialChars --------*/
function initSpecialCharsSelects() {
	var specialCharsSelects = document.getElementsByName('d_special_chars'),
		specialCharsSelectsLen = specialCharsSelects.length;

	for (var i = 0; i < specialCharsSelectsLen; i++) {
		//alert(specialCharsSelects[i].onchange);
		if (specialCharsSelects[i].onchange == null) {
			specialCharsSelects[i].onchange = function () {
				if (this.value != '')
					this.previousSibling.value += this.value;
			};
		}
	}
}

/*-------- initButtonImporter --------*/
function getFirstNodeText(yourDiv) {
	for (var i = 0; i < yourDiv.childNodes.length; i++) {
    	var curNode = yourDiv.childNodes[i];
    	if (curNode.nodeName === "#text")
        	return curNode.nodeValue;
	}

	return ''; // si nn on retourne une chaine vide (aucun texte trouvé)
}

function rgb2hex(rgb) {
	//alert(rgb);
    if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb; // si rgb déjà hexadecimal on le retourne

    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function addToolDiv(divToImport) {
	//alealert(divToImport.className);
	var newToolDiv = toolDivClone.cloneNode(true), // reclonnage (car une fois quand insert le clone il devient un élement de la page)
		div_innerHTML = newToolDiv.firstChild.nextSibling.firstChild.nextSibling.nextSibling,
		div_fontSize = div_innerHTML.nextSibling.nextSibling,
		div_designPieces = newToolDiv.firstChild.nextSibling.nextSibling.nextSibling,
		div_width = div_designPieces.firstChild.nextSibling.nextSibling.nextSibling,
		div_height = div_width.nextSibling.nextSibling.nextSibling.nextSibling,
		div_display = div_height.nextSibling.nextSibling.nextSibling.nextSibling,
		div_float = div_display.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
		div_position = div_float.nextSibling.nextSibling,
		div_background = div_position.nextSibling.nextSibling.nextSibling.nextSibling,
		div_borderStyle = div_background.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
		div_borderPosition = div_borderStyle.nextSibling.nextSibling,
		div_borderPixels = div_borderPosition.nextSibling.nextSibling,
		div_borderColor = div_borderPixels.nextSibling.nextSibling,
		div_borderRadius = div_borderColor.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
		div_margin = div_borderRadius.nextSibling.nextSibling.nextSibling.nextSibling,
		div_padding = div_margin.nextSibling.nextSibling.nextSibling.nextSibling,
		div_top = div_padding.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
		div_left = div_top.nextSibling.nextSibling.nextSibling.nextSibling,
		div_right = div_left.nextSibling.nextSibling.nextSibling.nextSibling,
		div_bottom = div_right.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
		div_textAlign = div_bottom.nextSibling.nextSibling.nextSibling.nextSibling,
		div_color = div_textAlign.nextSibling.nextSibling.nextSibling.nextSibling,
		div_textDecoration = div_color.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
		div_fontFamily = div_textDecoration.nextSibling.nextSibling.nextSibling.nextSibling,
		div_fontWeight = div_fontFamily.nextSibling.nextSibling.nextSibling.nextSibling;
	// on récupère le nom de class qui est stocké ds l'attr. name (pour que l'affichage sur la demo_view marche)
	//alert(divToImport.getAttribute('name'));
	newToolDiv.className = divToImport.getAttribute('name');
	newToolDiv.setAttribute('name', divToImport.className); // maintenant on remplace le nom pr éviter les erreurs de la demoView()
	var currentClassNumber = parseInt(divToImport.className);
	//alert(currentClassNumber + '|' + designDivsFixedNumber);
	if (currentClassNumber >= designDivsFixedNumber)
		designDivsFixedNumber = currentClassNumber + 1; // pr eviter d'avoir un conflit de class entre les anciennes div et les nouvelles
	// importation des options
	//alert(getFirstNodeText(divToImport));
	div_innerHTML.value = getFirstNodeText(divToImport);
	//alert(divToImport.style.fontSize.slice(0, -2));
	/* font-size */
	div_fontSize.value = divToImport.style.fontSize != '' ? divToImport.style.fontSize.slice(0, -2) : '30'; // slice pr enlever 'px'
	/* width */
	div_width.value = divToImport.style.width != '' ? divToImport.style.width : 'auto';
	/* height */
	div_height.value = divToImport.style.height != '' ? divToImport.style.height : 'auto';
	/* display */
	div_display.value = divToImport.style.display;
	if (div_display.selectedIndex > 0) // car le premier élement n'en a pas besoin
		div_display.options[div_display.selectedIndex].setAttribute('selected', 'selected');
	/* float */
	//alert(divToImport.style.cssFloat);
	div_float.value = divToImport.style.cssFloat;
	if (div_float.selectedIndex > 0) // car le premier élement n'en a pas besoin
		div_float.options[div_float.selectedIndex].setAttribute('selected', 'selected');
	/* position */
	div_position.value = divToImport.style.position != '' ? divToImport.style.position : 'relative';
	if (div_position.selectedIndex > 0)
		div_position.options[div_position.selectedIndex].setAttribute('selected', 'selected');
	/* background */
	// si couleur valide + (si rgb => conversion hexa, si nn ss conversion) si nn si couleur invalide couleur par défaut '#333333'
	div_background.value = divToImport.style.background != '' ? (divToImport.style.background.indexOf('rgb') != -1 ? rgb2hex(divToImport.style.background.substring(divToImport.style.background.indexOf('rgb'))) : divToImport.style.background ) : 'initial';
	/* border */
	var border,
		borderLen;
	//alert(divToImport.style.border + ' | ' + divToImport.style.borderBottom);
	if ((border = divToImport.style.border.split(' ')).length == 5)
		div_borderPosition.value = '';
	else if ((border = divToImport.style.borderTop.split(' ')).length == 5)
		div_borderPosition.value = '-top';
	else if ((border = divToImport.style.borderLeft.split(' ')).length == 5)
		div_borderPosition.value = '-left';
	else if ((border = divToImport.style.borderRight.split(' ')).length == 5)
		div_borderPosition.value = '-right';
	else if ((border = divToImport.style.borderBottom.split(' ')).length == 5)
		div_borderPosition.value = '-bottom';
	if (div_borderPosition.selectedIndex > 0)
		div_borderPosition.options[div_borderPosition.selectedIndex].setAttribute('selected', 'selected');
	borderLen = border.length;
	//alert(border + ' | ' + borderLen);
	div_borderStyle.value = borderLen == 5 ?  border[1] : 'none';
	if (div_borderStyle.selectedIndex > 0)
		div_borderStyle.options[div_borderStyle.selectedIndex].setAttribute('selected', 'selected');
	div_borderPixels.value = borderLen == 5 ?  border[0] : '3px';
	div_borderColor.value = borderLen == 5 ? (border[2].indexOf('rgb') != -1 ? rgb2hex(border[2] + ' ' + border[3] + ' ' + border[4]) : border[2] ) : '#333333';
	/* border-radius */
	div_borderRadius.value = divToImport.style.borderRadius;
	/* margin */
	div_margin.value = divToImport.style.margin;
	/* padding */
	div_padding.value = divToImport.style.padding;
	/* top */
	div_top.value = divToImport.style.top != '' ? divToImport.style.top : 'auto';
	/* left */
	div_left.value = divToImport.style.left != '' ? divToImport.style.left : 'auto';
	/* right */
	div_right.value = divToImport.style.right != '' ? divToImport.style.right : 'auto';
	/* bottom */
	div_bottom.value = divToImport.style.bottom != '' ? divToImport.style.bottom : 'auto';
	/* text-align */
	div_textAlign.value = divToImport.style.textAlign != '' ? divToImport.style.textAlign : 'center';
	if (div_textAlign.selectedIndex > 0)
		div_textAlign.options[div_textAlign.selectedIndex].setAttribute('selected', 'selected');
	/* color */
	//alert(divToImport.style.color);
	div_color.value = divToImport.style.color != '' ? (divToImport.style.color.indexOf('rgb') != -1 ? rgb2hex(divToImport.style.color) : divToImport.style.color) : 'black';
	/* text-decoration */
	div_textDecoration.value = divToImport.style.textDecoration != '' ? divToImport.style.textDecoration : 'none';
	if (div_textDecoration.selectedIndex > 0)
		div_textDecoration.options[div_textDecoration.selectedIndex].setAttribute('selected', 'selected');
	/* font-family */
	div_fontFamily.value = divToImport.style.fontFamily != '' ? divToImport.style.fontFamily : 'sans-serif';
	if (div_fontFamily.selectedIndex > 0)
		div_fontFamily.options[div_fontFamily.selectedIndex].setAttribute('selected', 'selected');
	/* font-weight */
	div_fontWeight.value = divToImport.style.fontWeight != '' ? divToImport.style.fontWeight : 'bold';
	if (div_fontWeight.selectedIndex > 0)
		div_fontWeight.options[div_fontWeight.selectedIndex].setAttribute('selected', 'selected');
	// création du boutton de suppression
	var oldButtonSupprimer = div_innerHTML.nextSibling.nextSibling.nextSibling;
	//alert(oldButtonSupprimer);
	if (oldButtonSupprimer == null) { // si boutton supprimer inexistant (=> 'Header' | 'Body Wrapper' | 'Footer')
		var buttonSupprimer = document.createElement('input');
		buttonSupprimer.type = 'button';
		buttonSupprimer.className = 'dark_buttons';
		buttonSupprimer.value = 'x';
		buttonSupprimer.setAttribute('style', 'float: right; height: 25px;');
		buttonSupprimer.onclick = function () { scrollDiv.removeChild(this.parentNode.parentNode); demoView(); };
		div_innerHTML.parentNode.appendChild(buttonSupprimer);
	}
	else // s'il existe (cloné) on lui donne un éven click (car le clonnage ne copie pas les évennements)
		oldButtonSupprimer.onclick = function () { scrollDiv.removeChild(this.parentNode.parentNode); demoView(); };
	// on réduit les options
	div_designPieces.style.display = 'none';
	// ajout à la scrollDiv
	scrollDiv.appendChild(newToolDiv);
}

function getAsText(readFile) {
    var reader = new FileReader();
    reader.readAsText(readFile, 'UTF-8');
    reader.onload = loaded;
}

function loaded(evt) {
    //alert("File Loaded Successfully");
    var fileString = evt.target.result;
	//alert(fileString);
	// vérification du fichier (s'il ne contient pas un design connu pas la peine de faire qlq chose)
	if (fileString.indexOf('<meta name="design_helper" content="' + metaSaveContent + '" />') == -1) {
		alert('fichier non reconnu !');
		return;
	}

	// on nettoie le clone des attributs de séléction (du coup on a besoin de tt ça, mdr !)
	var div_designPieces = toolDivClone.firstChild.nextSibling.nextSibling.nextSibling,
		div_width = div_designPieces.firstChild.nextSibling.nextSibling.nextSibling,
		div_height = div_width.nextSibling.nextSibling.nextSibling.nextSibling,
		div_display = div_height.nextSibling.nextSibling.nextSibling.nextSibling,
		div_float = div_display.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
		div_position = div_float.nextSibling.nextSibling,
		div_background = div_position.nextSibling.nextSibling.nextSibling.nextSibling,
		div_borderStyle = div_background.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
		div_borderPosition = div_borderStyle.nextSibling.nextSibling,
		div_borderPixels = div_borderPosition.nextSibling.nextSibling,
		div_borderColor = div_borderPixels.nextSibling.nextSibling,
		div_borderRadius = div_borderColor.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
		div_margin = div_borderRadius.nextSibling.nextSibling.nextSibling.nextSibling,
		div_padding = div_margin.nextSibling.nextSibling.nextSibling.nextSibling,
		div_top = div_padding.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
		div_left = div_top.nextSibling.nextSibling.nextSibling.nextSibling,
		div_right = div_left.nextSibling.nextSibling.nextSibling.nextSibling,
		div_bottom = div_right.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
		div_textAlign = div_bottom.nextSibling.nextSibling.nextSibling.nextSibling,
		div_color = div_textAlign.nextSibling.nextSibling.nextSibling.nextSibling,
		div_textDecoration = div_color.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
		div_fontFamily = div_textDecoration.nextSibling.nextSibling.nextSibling.nextSibling,
		div_fontWeight = div_fontFamily.nextSibling.nextSibling.nextSibling.nextSibling,
	// début du nettoyage
		tab = [div_display, div_float, div_position, div_borderStyle, div_borderPosition, div_textAlign, div_textDecoration, div_fontFamily, div_fontWeight];
	for (var e = 0; e < tab.length; e++) {
		for (var j = 0; j < tab[e].options.length; j++)
			tab[e].options[j].removeAttribute('selected');
	}
	// fin du nettoyage, maintenant on vide la scrollDiv
	while (scrollDiv.firstChild.nextSibling != null) {
		scrollDiv.removeChild(scrollDiv.firstChild.nextSibling);
		//scrollDivNext = scrollDivNext.nextSibling; // quand on efface un élement les autres montent (pas besoin de .nextSibling à chaque fois)
	}
	//alert(fileString.substring(fileString.indexOf('span') - 1, fileString.lastIndexOf('span') + 5));
	spanForParsing.style.display = 'none'; // on la cache le temp qu'on importe tout les divs
	spanForParsing.innerHTML = fileString.substring(fileString.indexOf('div') - 1, fileString.lastIndexOf('div') + 4); // insértion des divs dans la demo_view (pr pouvoir utiliser l'arborésence du spanForParsing)
	var divToImportA1 = spanForParsing.firstChild, // niveau 1 de l'arborésence
		divToImportA2;

	designDivsFixedNumber = 0; // pr fixer le nombre de div qu'on a (afin d'eviter les conflits entre nom de class)

	while (divToImportA1 != null) { // tj dans le niveau 1 de l'arborésence
		//alert(divToImportA1.className);
		if (divToImportA1.tagName == 'DIV') {
			addToolDiv(divToImportA1);
			divToImportA2 = divToImportA1.firstChild; // passage au niveau 2 de l'arborésence (on cherche à l'intérieur de la div actuelle)
			while (divToImportA2 != null) { // içi c'est le niveau 2 de l'arborésence
				//alert(divToImportA2);
				if (divToImportA2.tagName == 'DIV')
					addToolDiv(divToImportA2);
				// passage à l'élément suivant du niveau 2 de l'arborésence
				divToImportA2 = divToImportA2.nextSibling;
			}
		}
		// passage à l'élément suivant du niveau 1 de l'arborésence
		divToImportA1 = divToImportA1.nextSibling;
	}
	
	// rénitialisation des bouttons de couleurs aléatoires + combobox display + fontSizeInput + hideShowInput etc (juste les nv)
	initButtonsRandomAndImg();
	initSpecialCharsSelects(); // à mettre avant initAllComboBoxs(); pour éviter de ruiner les éven. des selects/comboBoxs
	initAllComboBoxs();
	initFontSizeInputs();
	initHideShow();
	initButtonQuestion();
	// on glisse la scrollbar en bas
	scrollDiv.scrollTop = scrollDiv.scrollHeight;
	// actualisation de la demo_view (elle effectuera le vidage)
	demoView();
	spanForParsing.style.display = 'inline-block'; // 'inline-block' car c'est une balise span
	// désactivation du boutton 'Valeurs par défaut' car il peut causer des blèmes
	var buttonDefault = document.getElementById('button_default');
	if (buttonDefault.disabled == false)
		buttonDefault.disabled = true;
}

function initButtonImporter() {
	var buttonImporter = document.getElementById('button_importer'),
		importerFichierInput = document.getElementById('importer_fichier');
	
	importerFichierInput.onchange = function () {
		var fichier = importerFichierInput.files[0];
    	if (fichier) {
        	//alert("Name: " + fichier.name + "\n" + "Last Modified Date :" + fichier.lastModifiedDate);
			getAsText(fichier);
		}
	};

	buttonImporter.onclick = function () { importerFichierInput.click(); };
}

/*-------- initButtonQuestion --------*/
function slowDisplay(divToDisplay, opacityDegree, delay) {
	//alert(opacityDegree);
	divToDisplay.style.opacity = opacityDegree;
	
	if (opacityDegree < 1) {
		opacityDegree += 0.1;
		setTimeout(function () { slowDisplay(divToDisplay, opacityDegree, delay); }, delay);
	}
}

function initButtonQuestion() {
	var questionButtons = document.getElementsByName('question_btn'),
		questionButtonsLen = questionButtons.length;

	for (var i = 0; i < questionButtonsLen; i++) {
		if (questionButtons[i].onclick == null) {
			questionButtons[i].onclick = function () {
				//alert(this.parentNode.parentNode.getAttribute('name'));
				var spanForParsingChild = spanForParsing.firstChild,
					thisName = this.parentNode.parentNode.getAttribute('name');
				// recherche du nom dans la demo_view
				while (spanForParsingChild != null) {
					if (spanForParsingChild.tagName == 'DIV' && spanForParsingChild.className == thisName) {
						slowDisplay(spanForParsingChild, 0.1, 60);
						return;
					}
					var childsA2 = spanForParsingChild.firstChild;
					while (childsA2 != null) { // arborésence niveau 2
						if (childsA2.tagName == 'DIV' && childsA2.className == thisName) {
							slowDisplay(childsA2, 0.1, 60);
							return;
						}
						childsA2 = childsA2.nextSibling;
					}
					spanForParsingChild = spanForParsingChild.nextSibling;
				}
			};
		}
	}
}

/*-------- exécution au chargement de la page ---------*/
initHideShow();
initButtonQuestion();
initSpecialCharsSelects();
initAllComboBoxs();
initButtonsRandomAndImg();
initButtonPlus();
initFontSizeInputs();
initButtonGenerer();
initButtonEnregistrer();
initButtonImporter();
demoView();

})(); // fin IEF
