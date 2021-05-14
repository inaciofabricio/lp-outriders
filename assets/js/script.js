function getLang(lang) {

    document.documentElement.lang = lang;

    if(lang === "pt-br") {

        const langPtBr = document.getElementById("pt-br");
        langPtBr.classList.add("lingua-borda");
        langPtBr.src = "./assets/img/brasil-on.jpg";

        const langEn = document.getElementById("en");
        langEn.classList.remove("lingua-borda");
        langEn.src = "./assets/img/eua-off.jpg";

        i18n.ptBr.forEach(i => { 
            if(i.title.substring(0,3) === "alt"){
                document.querySelector(`[data-${i.title}]`).alt = i.value;
            } else {
                document.querySelector(`[data-${i.title}]`).innerHTML = i.value;
            }
        });
        
        if(window.innerWidth > 374 && window.innerWidth <= 768) {

            /* Correção de margem nos textos das habilidades - Devastador - tablet */
            document.querySelector('[data-devastadorHabilidade03]').style.margin = "-41px 0 0 2.5px";
            document.querySelector('[data-devastadorHabilidade07]').style.margin = "-41px 0 0 2.5px";

            /* Correção de margem nos textos das habilidades - Piromante - tablet */
            document.querySelector('[data-piromanteHabilidade02]').style.margin = "-33px 0 0 2.5px";
            document.querySelector('[data-piromanteHabilidade06]').style.margin = "-41px 0 0 2.5px";

            /* Correção de margem nos textos das habilidades - Tecnomante - tablet */
            document.querySelector('[data-tecnomanteHabilidade02]').style.margin = "-41px 0 0 2.5px"; 
            document.querySelector('[data-tecnomanteHabilidade04]').style.margin = "-41px 0 0 2.5px";
            document.querySelector('[data-tecnomanteHabilidade06]').style.margin = "-41px 0 0 2.5px";

            /* Correção de margem nos textos das habilidades - Trapaceiro - tablet */
            document.querySelector('[data-trapaceiroHabilidade01]').style.margin = "-41px 0 0 2.5px"; 
            document.querySelector('[data-trapaceiroHabilidade02]').style.margin = "-41px 0 0 2.5px";
            document.querySelector('[data-trapaceiroHabilidade04]').style.margin = "-41px 0 0 2.5px";
            document.querySelector('[data-trapaceiroHabilidade05]').style.margin = "-41px 0 0 2.5px";
            document.querySelector('[data-trapaceiroHabilidade06]').style.margin = "-41px 0 0 2.5px";
            document.querySelector('[data-trapaceiroHabilidade07]').style.margin = "-41px 0 0 2.5px";
            document.querySelector('[data-trapaceiroHabilidade08]').style.margin = "-41px 0 0 2.5px";
           

        } else if(window.innerWidth > 768 && window.innerWidth <= 1023) {

            /* Correção de margem nos textos das habilidades - Devastador - tablet */
            document.querySelector('[data-devastadorHabilidade03]').style.margin = "-56px 0 0 2.5px";
            document.querySelector('[data-devastadorHabilidade07]').style.margin = "-56px 0 0 2.5px";

            /* Correção de margem nos textos das habilidades - Piromante - tablet */
            document.querySelector('[data-piromanteHabilidade02]').style.margin = "-40px 0 0 2.5px";
            document.querySelector('[data-piromanteHabilidade03]').style.margin = "-56px 0 0 2.5px";
            document.querySelector('[data-piromanteHabilidade06]').style.margin = "-56px 0 0 2.5px";

            /* Correção de margem nos textos das habilidades - Tecnomante - tablet */
            document.querySelector('[data-tecnomanteHabilidade02]').style.margin = "-56px 0 0 2.5px"; 
            document.querySelector('[data-tecnomanteHabilidade06]').style.margin = "-56px 0 0 2.5px";

            /* Correção de margem nos textos das habilidades - Trapaceiro - tablet */
            document.querySelector('[data-trapaceiroHabilidade02]').style.margin = "-56px 0 0 2.5px"; 
            document.querySelector('[data-trapaceiroHabilidade05]').style.margin = "-56px 0 0 2.5px";
            document.querySelector('[data-trapaceiroHabilidade08]').style.margin = "-56px 0 0 2.5px";


        } else if(window.innerWidth > 1023) {

            /* Correção de margem nos textos das habilidades - Devastador - pc */
            document.querySelector('[data-devastadorHabilidade03]').style.margin = "-56px 0 0 2.5px";
            document.querySelector('[data-devastadorHabilidade07]').style.margin = "-56px 0 0 2.5px";
    
            /* Correção de margem nos textos das habilidades - Piromante - pc */
            document.querySelector('[data-piromanteHabilidade02]').style.margin = "-40px 0 0 2.5px";
            document.querySelector('[data-piromanteHabilidade06]').style.margin = "-56px 0 0 2.5px";
            
            /* Correção de margem nos textos das habilidades - Tecnomante - pc */
            document.querySelector('[data-tecnomanteHabilidade02]').style.margin = "-56px 0 0 2.5px"; 
            document.querySelector('[data-tecnomanteHabilidade06]').style.margin = "-56px 0 0 2.5px";
            document.querySelector('[data-tecnomanteHabilidade08]').style.margin = "-56px 0 0 2.5px";
    
            /* Correção de margem nos textos das habilidades - Trapaceiro - pc */
            document.querySelector('[data-trapaceiroHabilidade02]').style.margin = "-56px 0 0 2.5px"; 
            document.querySelector('[data-trapaceiroHabilidade05]').style.margin = "-56px 0 0 2.5px";
            document.querySelector('[data-trapaceiroHabilidade06]').style.margin = "-56px 0 0 2.5px";
            document.querySelector('[data-trapaceiroHabilidade08]').style.margin = "-56px 0 0 2.5px";

        }

    } else if(lang === "en") {

        const langEn = document.getElementById("en");
        langEn.classList.add("lingua-borda");
        langEn.src = "./assets/img/eua-on.jpg";

        const langPtBr = document.getElementById("pt-br");
        langPtBr.classList.remove("lingua-borda");
        langPtBr.src = "./assets/img/brasil-off.jpg";

        i18n.en.forEach(i => { 
            if(i.title.substring(0,3) === "alt"){
                document.querySelector(`[data-${i.title}]`).alt = i.value;
            } else {
                document.querySelector(`[data-${i.title}]`).innerHTML = i.value;
            }
        });

        
        if(window.innerWidth > 374 && window.innerWidth <= 768) {

            /* Correção de margem nos textos das habilidades - Devastador - tablet */
            document.querySelector('[data-devastadorHabilidade03]').style.margin = "-33px 0 0 2.5px";
            document.querySelector('[data-devastadorHabilidade07]').style.margin = "-33px 0 0 2.5px";

            /* Correção de margem nos textos das habilidades - Piromante - tablet */
            document.querySelector('[data-piromanteHabilidade02]').style.margin = "-42px 0 0 2.5px";
            document.querySelector('[data-piromanteHabilidade06]').style.margin = "-33px 0 0 2.5px";

            /* Correção de margem nos textos das habilidades - Tecnomante - tablet */
            document.querySelector('[data-tecnomanteHabilidade02]').style.margin = "-33px 0 0 2.5px"; 
            document.querySelector('[data-tecnomanteHabilidade04]').style.margin = "-33px 0 0 2.5px";
            document.querySelector('[data-tecnomanteHabilidade06]').style.margin = "-33px 0 0 2.5px";

            /* Correção de margem nos textos das habilidades - Trapaceiro - tablet */
            document.querySelector('[data-trapaceiroHabilidade01]').style.margin = "-33px 0 0 2.5px"; 
            document.querySelector('[data-trapaceiroHabilidade02]').style.margin = "-33px 0 0 2.5px";
            document.querySelector('[data-trapaceiroHabilidade04]').style.margin = "-33px 0 0 2.5px";
            document.querySelector('[data-trapaceiroHabilidade05]').style.margin = "-33px 0 0 2.5px";
            document.querySelector('[data-trapaceiroHabilidade06]').style.margin = "-33px 0 0 2.5px";
            document.querySelector('[data-trapaceiroHabilidade07]').style.margin = "-33px 0 0 2.5px";
            document.querySelector('[data-trapaceiroHabilidade08]').style.margin = "-33px 0 0 2.5px";
           

        } else if(window.innerWidth > 768 && window.innerWidth <= 1023) {

            /* Correção de margem nos textos das habilidades - Devastador - tablet */
            document.querySelector('[data-devastadorHabilidade03]').style.margin = "-40px 0 0 2.5px";
            document.querySelector('[data-devastadorHabilidade07]').style.margin = "-40px 0 0 2.5px";

            /* Correção de margem nos textos das habilidades - Piromante - tablet */
            document.querySelector('[data-piromanteHabilidade02]').style.margin = "-56px 0 0 2.5px";
            document.querySelector('[data-piromanteHabilidade03]').style.margin = "-40px 0 0 2.5px";
            document.querySelector('[data-piromanteHabilidade06]').style.margin = "-40px 0 0 2.5px";

            /* Correção de margem nos textos das habilidades - Tecnomante - tablet */
            document.querySelector('[data-tecnomanteHabilidade02]').style.margin = "-40px 0 0 2.5px"; 
            document.querySelector('[data-tecnomanteHabilidade06]').style.margin = "-40px 0 0 2.5px";

            /* Correção de margem nos textos das habilidades - Trapaceiro - tablet */
            document.querySelector('[data-trapaceiroHabilidade02]').style.margin = "-40px 0 0 2.5px"; 
            document.querySelector('[data-trapaceiroHabilidade05]').style.margin = "-40px 0 0 2.5px";
            document.querySelector('[data-trapaceiroHabilidade08]').style.margin = "-40px 0 0 2.5px";


        } else if(window.innerWidth > 1023) {

            /* Correção de margem nos textos das habilidades - Devastador - pc */
            document.querySelector('[data-devastadorHabilidade03]').style.margin = "-40px 0 0 2.5px";
            document.querySelector('[data-devastadorHabilidade07]').style.margin = "-40px 0 0 2.5px";
    
            /* Correção de margem nos textos das habilidades - Piromante - pc */
            document.querySelector('[data-piromanteHabilidade02]').style.margin = "-56px 0 0 2.5px";
            document.querySelector('[data-piromanteHabilidade06]').style.margin = "-40px 0 0 2.5px";
            
            /* Correção de margem nos textos das habilidades - Tecnomante - pc */
            document.querySelector('[data-tecnomanteHabilidade02]').style.margin = "-40px 0 0 2.5px"; 
            document.querySelector('[data-tecnomanteHabilidade06]').style.margin = "-40px 0 0 2.5px";
            document.querySelector('[data-tecnomanteHabilidade08]').style.margin = "-40px 0 0 2.5px";
    
            /* Correção de margem nos textos das habilidades - Trapaceiro - pc */
            document.querySelector('[data-trapaceiroHabilidade02]').style.margin = "-40px 0 0 2.5px"; 
            document.querySelector('[data-trapaceiroHabilidade05]').style.margin = "-40px 0 0 2.5px";
            document.querySelector('[data-trapaceiroHabilidade06]').style.margin = "-40px 0 0 2.5px";
            document.querySelector('[data-trapaceiroHabilidade08]').style.margin = "-40px 0 0 2.5px";

        }

    }
}

getLang("pt-br");

const langPtBr = document.getElementById("pt-br");
langPtBr.addEventListener('click', (evento) => {
    getLang("pt-br");
});

const langEn = document.getElementById("en");
langEn.addEventListener('click', (evento) => {
    getLang("en");
});

const classes = document.querySelector('[data-classes]');
    
const linkDevastador = document.querySelector('[data-devastador]');

linkDevastador.addEventListener('mouseover', (evento) => {
    classes.style.background = 'linear-gradient(#FFFFFB, #2F1C07)';
});

linkDevastador.addEventListener('mouseout', (evento) => {
    classes.style.background = 'linear-gradient(#FFFFFF, #CCCCCC)';
});


const linkPiromante = document.querySelector('[data-piromante]');

linkPiromante.addEventListener('mouseover', (evento) => {
    classes.style.background = 'linear-gradient(#FAF1CF, #4C1512)';
});

linkPiromante.addEventListener('mouseout', (evento) => {
    classes.style.background = 'linear-gradient(#FFD137, #CCCCCC)';
});


const linkTecnomante = document.querySelector('[data-tecnomante]');

linkTecnomante.addEventListener('mouseover', (evento) => {
    classes.style.background = 'linear-gradient(#BFF4F1, #093112)';
});

linkTecnomante.addEventListener('mouseout', (evento) => {
    classes.style.background = 'linear-gradient(#FFFFFF, #CCCCCC)';
});


const linkTrapaceiro = document.querySelector('[data-trapaceiro]');

linkTrapaceiro.addEventListener('mouseover', (evento) => {
    classes.style.background = 'linear-gradient(#A8EFE9, #152039)';
});

linkTrapaceiro.addEventListener('mouseout', (evento) => {
    classes.style.background = 'linear-gradient(#FFFFFF, #CCCCCC)';
});