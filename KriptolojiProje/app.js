var key = [];

function sifreleme(){
    const sifrelenecek=document.getElementById('inputText').value;
    var x = sifrelenecek.length * 2;
    let c=0;

    let sifrelenmisMetinDizisi = new Array(x); 

    for (let l = 0; l < sifrelenmisMetinDizisi.length; l++) {
        sifrelenmisMetinDizisi[l] = getCharOfIndex(randomKeyGenerator());
    }

    for (let k = 0; k < sifrelenecek.length; k++) {
        
        var sifrelenmisMetin = getCharOfIndex(getCharBitInverse(getIndexOfChar(sifrelenecek[k])));
        while (0 < 8) {
            let rastgeleSayi = Math.floor(Math.random() *x);
            if (!key.includes(rastgeleSayi)) {
                key[k] = rastgeleSayi;
                break;
            }
        }

        sifrelenmisMetinDizisi[key[k]] = sifrelenmisMetin;
        c++;
        
    }

    var text = "";
    sifrelenmisMetinDizisi.forEach(element => {
        text+=element;
    });
    document.getElementById('outputText').value = text;
   //decryption(text);
}
function decryption(text){
    var sifrele=document.getElementById('outputText').value;
    
    var metin=[];
    for(let a =0;a<key.length;a++){
        var sayim=getIndexOfChar(sifrele[key[a]]);
       metin+= getCharOfIndex(getCharBitInverse(sayim));
      
    }
    document.getElementById('decryptedText').value=metin;
   
    
}



function getCharBitInverse(indeks){
    return (31-indeks)%26;
}

function randomKeyGenerator(){
    return Math.floor(Math.random() * 26);
 }  

function getIndexOfChar(harf){
   harf = harf.toUpperCase();
 
   const alfabe = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   const indeks = alfabe.indexOf(harf);
 
   return indeks;
 }
 function getCharOfIndex(indeks){
   const alfabe = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     return alfabe.charAt(indeks);
 }