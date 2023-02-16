// Faktor Persekutuan Terbesar

// Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka.
// Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar).
// FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.

function fpb(angka1, angka2) {
  // you can only write your code here!

  // cek angka terkecil
  let angkaTerkecil = angka1 < angka2 ? angka1 : angka2;

  //inisialisasi fpb defaul dengan 1
  let fpb = 1;

  // mencari fpb
  for (let i = 2; i < angkaTerkecil; i++) {
    if (angka1 % i == 0 && angka2 % i == 0) {
      fpb = i;
    }
  }

  return fpb;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
