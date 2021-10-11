var a = document.querySelectorAll(".tile").length;

for (i = 0;i < a;i++) {
    document.querySelectorAll(".tile")[i].addEventListener("click",function(){ 
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
        });
}

document.addEventListener("keypress",function (event) {
    if (event.repeat)
    return
    makeSound(event.key);
    buttonAnimation(event.key);

})


function makeSound(key) {
    switch (key) {
        case "a":
            var a = new Audio('notes_A.mp3');
            a.play();
        break;

        case "s":
            var s  = new Audio('notes_B.mp3');
            s.play();
        break;

        case "d":
            var d  = new Audio('notes_C.mp3');
            d.play();
        break;

        case "f":
            var f = new Audio('notes_D.mp3');
            f.play();
        break;

        case "g":
            var g = new Audio('notes_E.mp3');
            g.play();
        break;

        case "h":
            var h = new Audio('notes_F.mp3');
            h.play();
        break;

        case "j":
            var j  = new Audio('notes_G.mp3');
            j.play();
        break;

        case "k":
            var k = new Audio('notes_A.mp3');
            k.play();
        break;

        case "l":
            var l = new Audio('notes_B.mp3');
            l.play();
        break;

        case "z":
            var z = new Audio('notes_A.mp3');
            z.play();
        break;

        case "x":
            var x = new Audio('notes_D.mp3');
            x.play();
        break;

        case "c":
            var c = new Audio('notes_C.mp3');
            c.play();
        break;

        case "v":
            var v = new Audio('notes_B.mp3');
            v.play();
        break;

        case "b":
            var b = new Audio('notes_F.mp3');
            b.play();
        break;

        case "n":
            var n = new Audio('notes_A.mp3');
            n.play();
        break;

        case "m":
            var m = new Audio('notes_G.mp3');
            m.play();
        break;

        case "q":
            var q = new Audio('notes_Ab.mp3');
            q.play();
        break;

        case "w":
            var w = new Audio('notes_Bb.mp3');
            w.play();
        break;

        case "e":
            var e = new Audio('notes_db.mp3');
            e.play();
        break;

        case "r":
            var r = new Audio('notes_Eb.mp3');
            r.play();
        break;

        case "t":
            var t = new Audio('notes_Gb.mp3');
            t.play();
        break;

        case "y":
            var y = new Audio('notes_Ab.mp3');
            y.play();
        break;

        case "u":
            var u = new Audio('notes_Bb.mp3');
            u.play();
        break;

        case "i":
            var i = new Audio('notes_Db.mp3');
            i.play();
        break;

        case "o":
            var o = new Audio('notes_Eb.mp3');
            o.play();
        break;

        case "p":
            var p = new Audio('notes_Bb.mp3');
            p.play();
        break;

        case "0":
            var zero = new Audio('notes_Bb.mp3');
            zero.play();
        break;

        case "1":
            var one = new Audio('notes_Eb.mp3');
            one.play();
        break;

        case "2":
            var two = new Audio('notes_Db.mp3');
            two.play();
        break;

        case "3":
            var three = new Audio('notes_Bb.mp3');
            three.play();
        break;

        case "4":
            var four = new Audio('notes_Eb.mp3');
            four.play();
        break;

        case "5":
            var five = new Audio('notes_G.mp3');
            five.play();
        break;

        case "6":
            var six = new Audio('notes_F.mp3');
            six.play();
        break;

        case "7":
            var seven = new Audio('notes_Bb.mp3');
            seven.play();
        break;

        case "8":
            var eight = new Audio('notes_E.mp3');
            eight.play();
        break;

        case "9":
            var nine = new Audio('notes_Ab.mp3');
            nine.play();
        break;

        default:console.log(buttonInnerHtml)
    }

}

function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    },100);
}




