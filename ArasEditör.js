window.onload = function() {
    setTimeout(() => {
        const kayitliNot = localStorage.getItem("notum");
        if (kayitliNot) {
            document.querySelector("textarea").value = kayitliNot;
        }
    }, 250);
}



function EminMisinKapat() {
    document.getElementById("EminMisinBas").style.display = "none";
}

function NotuKaydet() {
        setTimeout(() => {
            const notIcerik = document.querySelector("textarea").value;
            localStorage.setItem("notum", notIcerik);
            alert("✅ Not kaydedildi!");
        }, 250);
}

let Silmek_Çıkmak = 2;

function NotuKaydetVeÇık() {
    const notIcerik = document.querySelector("textarea").value;
    localStorage.setItem("notum", notIcerik);
    if (Silmek_Çıkmak === 2) {
        window.close();
        setTimeout(() => {
            alert("Tarayıcı Otomatik Çıkmayı Desteklemiyor.  Yazılarınız Kaydedildi.  Çıkabilirsiniz.");
            window.location = ("http://127.0.0.1:5500/NoteBook/")
        }, 250);
    }
}

function Evet() {
    if (Silmek_Çıkmak === 2) {
        window.close();
    }

    if (Silmek_Çıkmak === 1) {
    localStorage.removeItem("notum");
    document.querySelector("textarea").value = "";
    alert("🗑️ Not silindi!");
    }
}

function NotuSil() {
    Silmek_Çıkmak = 1;
    document.getElementById("EminMisinYazı").innerHTML = "Notu Silmek İstediğinizden Emin Misiniz?";
    document.getElementById("KaydetVeÇık").style.display = "none"
    document.getElementById("EminMisinBas").style.display = "flex";
}

function SayfayıYenile() {
    Silmek_Çıkmak = 2;
    document.getElementById("EminMisinYazı").innerHTML = "Sayfayı Kaydetmeden Çıkmak İster Misin"
    document.getElementById("KaydetVeÇık").style.display = "inline-block"
    document.getElementById("EminMisinBas").style.display = "flex"
}
