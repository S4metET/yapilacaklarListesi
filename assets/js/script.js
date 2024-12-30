let listes = JSON.parse(localStorage.getItem("listes")) || [];

function saveListes(){
    localStorage.setItem("listes", JSON.stringify(listes));
}
function isListele(){
    if (listes.length === 0){
        alert("Henüz bir yapılacak iş eklenmedi.");
    }
    else{
        const liste = listes.map((liste, i) => `${i + 1}. ${liste.is} - ${liste.tarih}`).join("\n");
        alert(liste);
    }
    return nextAction();
}
function yeniİs(){
    const is = prompt("Yapılacak işin adını gir:");
    const tarih = prompt("Yapılacak işin tarihini gir: (Yıl-Gün-Ay)");
    listes.push({ is, tarih });
    saveListes();
    alert("Yapılacak iş eklendi.");
    return nextAction();
}
function isSil(){
    if (listes.length === 0){
        alert("Silinecek bir iş yok.");
        return nextAction();
    }
    const liste = listes.map((liste, i) => `${i + 1}. ${liste.is} - ${liste.tarih}`).join("\n");
    const value = prompt(`Silmek istediğin işin numarasını gir:\nVazgeçmek için x yazın.\n\n${liste}`);
    if (value.toLowerCase() === "x"){
        return nextAction();
    }
    const i = parseInt(value) - 1;
    if (isNaN(i) || i < 0 || i >= listes.length){
        alert("Geçersiz numara girdin.");
        return isSil();
    }
    listes.splice(i, 1);
    saveListes();
    alert("iş başarıyla silindi.");
    return nextAction();
}
function isGuncelle(){
    if (listes.length === 0) {
        alert("Güncellenecek bir iş yok.");
        return nextAction();
    }
    const liste = listes.map((liste, i) => `${i + 1}. ${liste.is} - ${liste.tarih}`).join("\n");
    const value = prompt(`Güncellemek istediğiniz işin numarasını gir:\nVazgeçmek için x yaz.\n\n${liste}`);
    if (value.toLowerCase() === "x") {
        return nextAction();
    }
    const i = parseInt(value) - 1;
    if (isNaN(i) || i < 0 || i >= listes.length){
        alert("Geçersiz numara girdin.");
        return isGuncelle();
    }
    const yeniİs = prompt("Yeni işi gir:");
    const yeniTarih = prompt("Yeni tarihi gir (Yıl-Ay-Gün formatında):");
    listes[i] = { is: yeniİs, tarih: yeniTarih };
    saveListes();
    alert("Yapılacak iş güncellendi.");
    return nextAction();
}
function nextAction(){
    const value = prompt("Başka bir işlem yapmak ister misin? (e/h)").toLowerCase();
    if (value === "e") {
        return mainMenu();
    } else if (value === "h") {
        alert("Güle güle...");
    } else {
        alert("Geçersiz seçim yaptın.");
        return nextAction();
    }
}
function mainMenu(){
    const value = prompt(`Bir işlem seç:\n1- Yapılacak işleri listele\n2- Yeni iş ekle\n3- İş sil\n4- İş güncelle\n5- Çıkış yap`);
    if (value === "1"){
        return isListele();
    }
    else if(value === "2"){
        return yeniİs();
    }
    else if(value === "3"){
        return isSil();
    }
    else if(value === "4"){
        return isGuncelle();
    }
    else if(value === "5"){
        alert("Güle güle...");
    }
    else{
        alert("Geçersiz seçim yaptın.");
        return mainMenu();
    }
}
mainMenu();