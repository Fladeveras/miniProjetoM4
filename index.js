const livros = [{nome:"Antes do Baile Verde", autor:"Conceição Evaristo", genero:"Poesia", grupoSocial:"escritor indigenas"}, {nome:"A Mão e a Luva", autor:"Eliane Potiguara", genero:"Romance", grupoSocial:"escritor indigenas"}, {nome:"Memórias de Um Sargento de Milícias", autor:"Márcia Wayna Kambeba", genero:"Adaptação, Literatura Infantojuvenil", grupoSocial:"escritor indigenas"},
{nome:"O Voo da Táinha", autor:"MCristino Wapichana", genero:"Contos", grupoSocial:"escritor indigenas"},{nome:"O Herói Desmascarado", autor:"Daniel Munduruku", genero:"Infantil", grupoSocial:"escritor indigenas"},{nome:"Cem Anos de Solidão", autor:"Gabriel García Márquez", genero:"Realismo Mágico", grupoSocial:"escritor negro"},{nome:"Kindred", autor:"Octavia Butler", genero:"Ficção Científica", grupoSocial:"escritor negro"},
{nome:"O Ódio que Você Semeia", autor:" Angie Thomas", genero:"Ficção Jovem Adulto", grupoSocial:"escritor negro"},{nome:"Meio Sol Amarelo", autor:"Chimamanda Ngozi Adichie", genero:"Ficção Histórica", grupoSocial:"escritor negro"},{nome:"Quarto de Despejo", autor:"Carolina Maria de Jesus", genero:"Memórias", grupoSocial:"escritor negro"},
{nome:"A Cor Púrpura", autor:"Alice Walker", genero:"Ficção", grupoSocial:"escritor negro"},{nome:"O Sol É Para Todos", autor:"Harper Lee", genero:"Ficção", grupoSocial:"escritor negro"},{nome:"Xondaro, o Guardião da Noite", autor:"Claudio Pinto de Oliveira", genero:"Literatura Infantojuvenil", grupoSocial:"escritor indigenas"},{nome:"O Enigma da Carta com Asas", autor:"Eliane Potiguara", genero:"Contos", grupoSocial:"escritor indigenas"},{nome:"Redefinindo o Real: Pela Voz de Pessoas Trans", autor:"Janet Mock", genero:"Não-ficção, Memórias", grupoSocial:"escritor lgbt"},{nome:"Eu Sou Jazz", autor:"Jazz Jennings", genero:"Biografia, Literatura Infantojuvenil", grupoSocial:"escritor lgbt"},{nome:"Nevada", autor:"Imogen Binnie", genero:"Ficção", grupoSocial:"escritor lgbt"},
{nome:"Cantos de Amor à Terra", autor:"Kaka Werá Jecupé", genero:"Poesia", grupoSocial:"escritor indigenas"},{nome:"Bartolomeu Campos de Queirós", autor:"Daniel Munduruku", genero:"Infantil", grupoSocial:"escritor indigenas"},{nome:"Paul Takes the Form of a Mortal Girl", autor:"Andrea Lawlor ", grupoSocial:"escritor lgbt", genero:"Ficção"},{nome:"Orlando: Uma Biografia", autor:"Virginia Woolf", genero:"Ficção/Fantasia", grupoSocial:"escritor lgbt"},{nome:"Giovanni's Room", autor:"James Baldwin", genero:"Ficção", grupoSocial:"escritor lgbt"},{nome:"Sister Outsider", autor:"Audre Lorde ", genero:"Ensaio/Prosa", grupoSocial:"escritor lgbt"},{nome:"O Milagre da Rosa", autor:"Jean Genet", genero:"Romance", grupoSocial:"escritor lgbt"},{nome:"Tales of the City", autor:"Armistead Maupin", genero:"Ficção/Série de Crônicas", grupoSocial:"escritor lgbt"},
{nome:"Dom Casmurro", autor:"Machado de Assis", genero:"Romance", grupoSocial:"escritor negro"},{nome:"Memórias Póstumas de Brás Cubas", autor:"Machado de Assis ", genero:"Romance", grupoSocial:"escritor negro"},
{nome:"Grande Sertão: Veredas", autor:"Guimarães Rosa ", genero:"Romance", grupoSocial:"escritor negro"},{nome:"Macunaíma", autor:"Mário de Andrade", genero:"Romance", grupoSocial:"escritor negro"},{nome:"Capitães da Areia", autor:"Jorge Amado", genero:"Romance", grupoSocial:"escritor negro"},{nome:"Quarto de Despejo", autor:"Carolina Maria de Jesus ", genero:"Diário/Memórias", grupoSocial:"escritor negro"},{nome:"Olhos D'Água", autor:"Conceição Evaristo", genero:"Contos", grupoSocial:"escritor negro"},{nome:"Iyalodê: Contos de Encantamento das Mulheres Negras", autor:"Jarid Arraes ", genero:"Contos", grupoSocial:"escritor negro"},{nome:"Onde Nascem os Fortes", autor:"Akemi Nitahara", genero:"Poesia", grupoSocial:"escritor negro"},{nome:"Minha Vida Fora de Série", autor:"Paula Pimenta", genero:"Romance Jovem Adulto", grupoSocial:"escritor lgbt"},
{nome:"Onde Não Existem Homens", autor:"Vinícius S.A. ", genero:"Ficção Contemporânea", grupoSocial:"escritor lgbt"},{nome:"A Gorda", autor:"Isabella Lubrano", genero:"Ficção Contemporânea", grupoSocial:"escritor lgbt"},{nome:"Meu Corpo Meu Corpo Meu Corpo Meu", autor:"Luna Vitrolira", genero:"Poesia", grupoSocial:"escritor lgbt"},{nome:"Céu sem Estrelas", autor:"Iris Figueiredo", genero:"Romance Jovem Adulto", grupoSocial:"escritor lgbt"},]


import express from "express"


const app = express ()

const porta = 2690 

app.use (express.json()) 

app.get ("/livros", (req, res) => {
    res.send (livros)
})

 function pegarPeloGenero(genero){
    const livro = livros.find (livro => livro.genero === genero)
    return livro
 }

 app.get ("/livro", (req, res) => {
    const {genero} = req.body;
    const livrosGeneros = pegarPeloGenero(genero)
    res.json ({livrosGeneros})
 })

 function PegarGrupoSocial(grupoSocial){
    const grupoPesquisado = livros.find (livros => livros.grupoSocial === grupoSocial)
    return grupoPesquisado
 }

 app.get ("/grupo", (req, res) => {
    const { grupoSocial } = req.body;
    const grupoSociais = PegarGrupoSocial(grupoSocial)
    res.json ({grupoSociais})
 })

app.listen(porta,()=>{ 
    console.log ("o serve esta on")
})