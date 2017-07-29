var count;
var points = 0;

var img_comp = [];
var img_compid = [];
var arr = ["Hopper-Cool.png", "leafers-sapling.png", "leafers-seed.png", "mr-pink.png", "old-spice-man.png", "spunky-sam.png", "leafers-ultimate.png", "robot_male_3.png", "robot_female_3.png", "xyz.png", "pikachu.png", "jerry.png", "leaf-orange.png"];

var img_id = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12", "img13", "img14", "img15", "img16", "img17", "img18", "img19", "img20", "img21", "img22", "img23", "img24", "img25", "img26", "img27", "img28", "img29", "img30"];
var neg_score;
var c;



function shuffle(o) { // v1.0
    var j, x, i;
    for (i = o.length - 1; i >= 0; i--) {
        j = Math.floor(Math.random() * i);
        x = o[i];
        o[i] = o[j];
        o[j] = x;
    };
    return o;
}
function count_game(p,hu) {
    document.getElementById('counter').innerHTML = "You got "+p+ " points with a total score of "+ hu + ".";
}
function myf(image_id, indexo, gameLevel) {
    var image = document.getElementById(image_id);
    var x;

    image.src = "images/"+arr[indexo];
    img_comp.push(indexo);
    img_compid.push(image_id);
    count++;

    if (count % 2 == 0) {
        if ((img_comp[0] != img_comp[1]) || (img_compid[0] == img_compid[1])) {
            neg_score++;
            setTimeout(function () {

                var h = document.getElementById(img_compid[0]);
                h.src = "images/images.jpg";
                var t = document.getElementById(img_compid[1]);
                t.src = "images/images.jpg";

                img_comp = [];
                img_compid = [];
            }, 480);
        }
        else {
            //pos_score++;
            var h = document.getElementById(img_compid[0]);
            var t = document.getElementById(img_compid[1]);
            t.onclick = null;
            h.onclick = null;
            img_comp = [];
            img_compid = [];
            c++;
        }
    }
    if (gameLevel == 1) {
        if (c == 6) {
            var p;
            p = 6 - (neg_score / 4);
            points = points + 6 - (neg_score / 4);
            count_game(p,points);
            document.getElementById("animation").innerHTML = "";
            var elem;
            elem = document.createElement("img");
            elem.setAttribute("src", "images/941.gif");
            elem.setAttribute("height", "130px");
            elem.setAttribute("width", "120px");
            elem.setAttribute("alt", "Flower");
            elem.setAttribute("id", "level_image");

            // elem.setAttribute("onclick", "myf('" + img_id[l] + "'," + indexEasy[l] + "," + level + ")");
            document.getElementById("animation").appendChild(elem);
            var element;
            element = document.createElement("span");
            element.setAttribute("id", "head");
            element.setAttribute("style", "font-size:27px;");
            document.getElementById("animation").appendChild(element);
            document.getElementById("head").innerHTML = "Level 1 Completed.";

        }
    }
    if (gameLevel == 2) {
        if (c == 10) {
            var p;
            p = 10 - (neg_score / 4);
            points = points + 10 - (neg_score / 4);
            count_game(p,points);
            document.getElementById("animation").innerHTML = "";
            var elem;
            elem = document.createElement("img");
            elem.setAttribute("src", "images/941.gif");
            elem.setAttribute("height", "130px");
            elem.setAttribute("width", "120px");
            elem.setAttribute("alt", "Flower");
            elem.setAttribute("id", "level_image");

            // elem.setAttribute("onclick", "myf('" + img_id[l] + "'," + indexEasy[l] + "," + level + ")");
            document.getElementById("animation").appendChild(elem);
            var element;
            element = document.createElement("span");
            element.setAttribute("id", "head");
            element.setAttribute("style", "font-size:27px;");
            document.getElementById("animation").appendChild(element);
            document.getElementById("head").innerHTML = "Level 2 Completed.";

        }
    }
    if (gameLevel == 3) {
        if (c == 15) {
            var p;
            p = 15 - (neg_score / 4);
            points = points + 15 - (neg_score / 4);
            count_game(p,points);
            document.getElementById("animation").innerHTML = "";
            var elem;
            elem = document.createElement("img");
            elem.setAttribute("src", "images/941.gif");
            elem.setAttribute("height", "130px");
            elem.setAttribute("width", "120px");
            elem.setAttribute("alt", "Flower");
            elem.setAttribute("id", "level_image");

            // elem.setAttribute("onclick", "myf('" + img_id[l] + "'," + indexEasy[l] + "," + level + ")");
            document.getElementById("animation").appendChild(elem);
            var element;
            element = document.createElement("span");
            element.setAttribute("id", "head");
            element.setAttribute("style", "font-size:27px;");
            document.getElementById("animation").appendChild(element);
            document.getElementById("head").innerHTML = "Level 3 Completed.";

        }
    }
    if (gameLevel == 4) {
        if (c == 18) {
            var p;
            p = 18 - (neg_score / 4);
            points = points + 18 - (neg_score / 4);
            count_game(p,points);
            document.getElementById("animation").innerHTML = "";
            var elem;
            elem = document.createElement("img");
            elem.setAttribute("src", "images/941.gif");
            elem.setAttribute("height", "130px");
            elem.setAttribute("width", "120px");
            elem.setAttribute("alt", "Flower");
            elem.setAttribute("id", "level_image");

            // elem.setAttribute("onclick", "myf('" + img_id[l] + "'," + indexEasy[l] + "," + level + ")");
            document.getElementById("animation").appendChild(elem);
            var element;
            element = document.createElement("span");
            element.setAttribute("id", "head");
            element.setAttribute("style", "font-size:27px;");
            document.getElementById("animation").appendChild(element);
            document.getElementById("head").innerHTML = "Level 4 Completed.";

        }
    }

}
function rest(level) {
    document.getElementById('counter').innerHTML = "";
    count = 0;
    img_comp = [];
    img_compid = [];
    console.log("ritvik");
    arr = ["Hopper-Cool.png", "leafers-sapling.png", "leafers-seed.png", "mr-pink.png", "old-spice-man.png", "spunky-sam.png", "pikachu.png", "xyz.png", "jerry.png", "leafers-ultimate.png", "robot_male_3.png", "robot_female_3.png", "leaf-orange.png", "mr-pants.png", "marcimus.png", "OhNoes.png", "mr-water.jpg", "daas.jpg"];

    img_id = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12", "img13", "img14", "img15", "img16", "img17", "img18", "img19", "img20", "img21", "img22", "img23", "img24", "img25", "img26", "img27", "img28", "img29", "img30", "img31", "img32", "img33", "img34", "img35", "img36"]

    var indexEasy = [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5];
    var indexModerate = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var indexDifficult = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    var indexDifficultmore = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

    indexEasy = shuffle(indexEasy);
    indexModerate = shuffle(indexModerate);
    indexDifficult = shuffle(indexDifficult);
    indexDifficultmore = shuffle(indexDifficultmore);
    var l, k;
    document.getElementById("wrapper").innerHTML = "";
    if (level == 1) {
        document.getElementById("animation").innerHTML = "";

        for (k = 0; k < 3; k++) {
            var divTag = document.createElement("div");
            divTag.id = "div-" + k;
            divTag.className = "div-" + k;
            document.getElementById("wrapper").appendChild(divTag);
            var par = document.getElementById('wrapper');
            par.insertBefore(divTag, par.firstChild);
            //document.getElementById("div-"+k).innerHTML="";

            for (l = 0; l < 4; l++) {
                //			document.getElementById("header-"+(l+5*k)).innerHTML="";

                var divTag = document.createElement("div");

                divTag.id = "header-" + (l + 4 * k);
                document.getElementById("div-" + k).appendChild(divTag);

            }
        }
        document.getElementById("textId").innerHTML = 6;


        for (l = 0; l < 12; l++) {
            document.getElementById("header-" + l).innerHTML = "";
            var elem;
            elem = document.createElement("img");
            elem.setAttribute("src", "images/images.jpg");
            elem.setAttribute("height", "100px");
            elem.setAttribute("width", "120px");
            elem.setAttribute("alt", "Flower");
            elem.setAttribute("id", img_id[l]);
            elem.setAttribute("onclick", "myf('" + img_id[l] + "'," + indexEasy[l] + "," + level + ")");
            document.getElementById("header-" + l).appendChild(elem);

        }
    }
    if (level == 2) {
        document.getElementById("animation").innerHTML = "";

        for (k = 0; k < 4; k++) {
            var divTag = document.createElement("div");
            divTag.id = "div-" + k;
            divTag.className = "div-" + k;
            document.getElementById("wrapper").appendChild(divTag);
            var par = document.getElementById('wrapper');
            par.insertBefore(divTag, par.firstChild);
            //document.getElementById("div-"+k).innerHTML="";

            for (l = 0; l < 5; l++) {
                //			document.getElementById("header-"+(l+5*k)).innerHTML="";

                var divTag = document.createElement("div");

                divTag.id = "header-" + (l + 5 * k);
                document.getElementById("div-" + k).appendChild(divTag);

            }
        }
        document.getElementById("textId").innerHTML = 10;


        for (l = 0; l < 20; l++) {
            document.getElementById("header-" + l).innerHTML = "";
            var elem;
            elem = document.createElement("img");
            elem.setAttribute("src", "images/images.jpg");
            elem.setAttribute("height", "100px");
            elem.setAttribute("width", "120px");
            elem.setAttribute("alt", "Flower");
            elem.setAttribute("id", img_id[l]);
            elem.setAttribute("onclick", "myf('" + img_id[l] + "'," + indexModerate[l] + "," + level + ")");
            document.getElementById("header-" + l).appendChild(elem);

        }
    }
    if (level == 3) {
        document.getElementById("animation").innerHTML = "";

        for (k = 0; k < 5; k++) {
            var divTag = document.createElement("div");
            divTag.id = "div-" + k;
            divTag.className = "div-" + k;
            document.getElementById("wrapper").appendChild(divTag);
            var par = document.getElementById('wrapper');
            par.insertBefore(divTag, par.firstChild);
            //document.getElementById("div-"+k).innerHTML="";

            for (l = 0; l < 6; l++) {
                //			document.getElementById("header-"+(l+5*k)).innerHTML="";

                var divTag = document.createElement("div");

                divTag.id = "header-" + (l + 6 * k);
                document.getElementById("div-" + k).appendChild(divTag);

            }
        }
        document.getElementById("textId").innerHTML = 15;


        for (l = 0; l < 30; l++) {
            document.getElementById("header-" + l).innerHTML = "";
            var elem;
            elem = document.createElement("img");
            elem.setAttribute("src", "images/images.jpg");
            elem.setAttribute("height", "100px");
            elem.setAttribute("width", "120px");
            elem.setAttribute("alt", "Flower");
            elem.setAttribute("id", img_id[l]);
            elem.setAttribute("onclick", "myf('" + img_id[l] + "'," + indexDifficult[l] + "," + level + ")");
            document.getElementById("header-" + l).appendChild(elem);

        }
    }
    if (level == 4) {
        document.getElementById("animation").innerHTML = "";

        for (k = 0; k < 6; k++) {
            var divTag = document.createElement("div");
            divTag.id = "div-" + k;
            divTag.className = "div-" + k;
            document.getElementById("wrapper").appendChild(divTag);
            var par = document.getElementById('wrapper');
            par.insertBefore(divTag, par.firstChild);
            //document.getElementById("div-"+k).innerHTML="";

            for (l = 0; l < 6; l++) {
                //			document.getElementById("header-"+(l+5*k)).innerHTML="";

                var divTag = document.createElement("div");

                divTag.id = "header-" + (l + 6 * k);
                document.getElementById("div-" + k).appendChild(divTag);

            }
        }
        document.getElementById("textId").innerHTML = 18;


        for (l = 0; l < 36; l++) {
            document.getElementById("header-" + l).innerHTML = "";
            var elem;
            elem = document.createElement("img");
            elem.setAttribute("src", "images/images.jpg");
            elem.setAttribute("height", "100px");
            elem.setAttribute("width", "120px");
            elem.setAttribute("alt", "Flower");
            elem.setAttribute("id", img_id[l]);
            elem.setAttribute("onclick", "myf('" + img_id[l] + "'," + indexDifficultmore[l] + "," + level + ")");
            document.getElementById("header-" + l).appendChild(elem);

        }
    }
    neg_score = 0;
    c = 0;


}