var hyperlinks = document.getElementsByTagName('a');
for (var i = 0, l = hyperlinks.length; i < l; i++) {

    if (!hyperlinks[i].toString().startsWith("javascript:call_link")) {
        continue
    }

    let temp = hyperlinks[i].getAttribute('href').slice(22, -2)
    hyperlinks[i].setAttribute('href', `./${temp}`)
    console.log(`./${temp}`);
}
