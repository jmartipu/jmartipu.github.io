var defaultText = `
.website-background{ background-color: #FFFFFF;}

.element-text{ color: #FFFFFF;}

.element-border{ border-color: #FFFFFF;}

.element-background{ background-color: #FFFFFF;}

.header{ color: #FFFFFF;}`;

function randomPalette(n){
    var colors = [];
    var hues = [];
    var rgbColor = randomColor();
    var hsl = rgbToHsl(rgbColor[0],rgbColor[1],rgbColor[2]);

    hues[0] = hsl[0] * 360;
    var armonia = 360/n;

    for (var i = 1; i < n; i++) {
       hues[i] = getArmonicHueColor(hues[i-1], armonia);
    }

    for (var j = 0; j < n; j++) {
       colors[j] = hslToRgb(hues[j]/360,hsl[1],hsl[2]);
    }
    return colors;

}

function getArmonicHueColor(hue, armonia) {
    if(hue + armonia > 360){
        return hue + armonia - 360;
    }else{
        return hue + armonia;
    }
}

function randomColor(){
    var r = Math.floor(Math.random()*256);          // Random between 0-255
    var g = Math.floor(Math.random()*256);          // Random between 0-255
    var b = Math.floor(Math.random()*256);          // Random between 0-255
    return [r, g, b];
}
function cleanColor() {
    removeClass("color1");
    removeClass("color2");
    removeClass("color3");
    removeClass("color4");
    removeClass("color5");
    setText("css-rules")
}

function generateRules(){
    colors = randomPalette(5);
    createClass('.website-background',`background-color: rgb(${colors[0][0]},${colors[0][1]},${colors[0][2]});`);
    createClass('.element-text',`color: rgb(${colors[1][0]},${colors[1][1]},${colors[1][2]});`);
    createClass('.element-border',`border-color: rgb(${colors[2][0]},${colors[2][1]},${colors[2][2]});`);
    createClass('.element-background',`background-color: rgb(${colors[3][0]},${colors[3][1]},${colors[3][2]});`);
    createClass('.header',`color: rgb(${colors[4][0]},${colors[4][1]},${colors[4][2]});`);

    text = `
.website-background{ background-color: rgb(${Math.trunc(colors[0][0])},${Math.trunc(colors[0][1])},${Math.trunc(colors[0][2])});}

.element-text{ color: rgb(${Math.trunc(colors[1][0])},${Math.trunc(colors[1][1])},${Math.trunc(colors[1][2])});}
            
.element-border{ border-color: rgb(${Math.trunc(colors[2][0])},${Math.trunc(colors[2][1])},${Math.trunc(colors[2][2])});}
            
.element-background{ background-color: rgb(${Math.trunc(colors[3][0])},${Math.trunc(colors[3][1])},${Math.trunc(colors[3][2])});}
            
.header{ color: rgb(${Math.trunc(colors[4][0])},${Math.trunc(colors[4][1])},${Math.trunc(colors[4][2])});}`;

    setText("css-rules", text)

    addClass("color1", "website-background");
    addClass("color2", "element-text");
    addClass("color3", "element-border");
    addClass("color4", "element-background");
    addClass("color5", "header");

}

function addClass(idName, strClass) {
  var element, arr;
  element = document.getElementById(idName);
  arr = element.className.split(" ");
  if (arr.indexOf(strClass) == -1) {
    element.className += " " + strClass;
  }
}

function setText(idName, text = defaultText) {
  var element, arr;
  element = document.getElementById(idName);
  element.textContent = text;
}

function removeClass(idName) {
  var element;
  element = document.getElementById(idName);
  element.className = "color-view";
}

function createClass(name,rules){
    var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    if(!(style.sheet||{}).insertRule)
        (style.styleSheet || style.sheet).addRule(name, rules);
    else
        style.sheet.insertRule(name+"{"+rules+"}",0);
}
