function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 4) {
                img.setAttribute('src','img/bebe.png');
            } else if (idade < 12) {
                img.setAttribute('src', 'img/criancaF.png');
            } else if (idade < 18) {
                img.setAttribute('src', 'img/adolecenteF.png');
            } else if (idade < 25) {

                img.setAttribute('src', 'img/jovemF.png');
            } else if (idade < 60) {

                img.setAttribute('src', 'img/adultoF.png');
            } else if (idade < 150) {

                img.setAttribute('src', 'img/idosaF.png');
            } else {

                img.setAttribute('src', 'img/falecido.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 4) {
                img.setAttribute('src','img/bebe.png');
            } else if (idade < 12) {
                img.setAttribute('src', 'img/criancaM.png');
            } else if (idade < 18) {
                img.setAttribute('src', 'img/adolecenteM.png');
            } else if (idade < 25) {

                img.setAttribute('src', 'img/jovemM.png');
            } else if (idade < 60) {

                img.setAttribute('src', 'img/adultoM.png');
            } else if (idade < 150) {

                img.setAttribute('src', 'img/idosOM.png');
            } else {

                img.setAttribute('src', 'img/falecido.png');
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ` Detectamos que é do genero ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
