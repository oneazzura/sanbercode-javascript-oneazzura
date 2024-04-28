console.log("Program Akar Pangkat 2 dari Inputan Bilangan genap");


let angka = prompt("Masukkan Bilangan: ");
if (angka < 0){
    alert("Tidak bisa input bilangan negatif");
}else if (angka % 2 == 0) {
    alert(angka + " " + "Adalah bilangan Genap");
    let pangkat = prompt("Masukkan pangkat: ");
    let hasil = Math.pow(angka, pangkat);
   document.write(`Jadi, nilai dari bilangan ${angka} pangkat ${pangkat} adalah ${hasil}`);
}else{
        alert(angka + " " + " Adalah Bilangan Ganjil, Tidak bisa input bilangan Ganjil");
}




