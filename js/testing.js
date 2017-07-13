
function testing_inflate_page(tag) {

    var blah = "blah"

    for (var i = 0; i < 100; i++)
    {
        var string = " "
        do
            string += blah[Math.floor(Math.random() * blah.length)]
        while (Math.random() < 0.7)
        $(tag).append(string)
    }

}

// Tests the css and stuff. Any content should look fine.
function auto_trash() {
    var a = setInterval(testing_trash_page, 30)
    setTimeout(clearInterval, 10000, a)
}

function testing_trash_page() {
    // literal magic. thanks to https://stackoverflow.com/a/4602476
    var s = $(':not(:has(*))')

    // amazing
    // ETAON RISHD LFCMU GYPWB VKJXQ Z
    var vowels = "eaoiu"
    var alpha = "tnrshdlfcmgypwbvkjxqz"
    var alpha2 = "ETAONRISHDLFCMUGYPWBVKJXQZ"

    for (var i = 0; i < s.length; i++)
    {
        var text = s[i].textContent;
        var lol = text.length
        var trash = ""
        for (var j = 0; j < lol; j++)
        {
            if (vowels.indexOf(text[j]) != -1)
            {
                trash += vowels[curve(vowels.length)]
            }
            else if (alpha.indexOf(text[j]) != -1)
            {
                trash += alpha[curve(alpha.length)]
            }
            else if (alpha2.indexOf(text[j]) != -1)
            {
                trash += alpha2[curve(alpha2.length)]
            }
            else
            {
                trash += text[j]
            }
        }
        s[i].textContent = trash
    }
}

function curve(length) {
    // i spent way too much time on this
    var x = Math.random()
    return length - Math.floor(Math.sqrt(x * length * (length + 1) + 1/4) + 0.5)
}

//testing_trash_page()