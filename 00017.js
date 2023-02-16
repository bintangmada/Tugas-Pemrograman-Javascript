// Target Terdekat

// Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter.
// Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat.
// Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

function targetTerdekat(arr) {
  // you can only write your code here!

  let indexDari_O = -1; //jika tidak ada, maka akan dikasih min 1
  let indexDari_X = -1;
  let jarak = 0;

  //menelusuri arr satu per satu
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "o") {
      //mencari posisi O
      indexDari_O = i;
    } else if (arr[i] === "x") {
      indexDari_X = i;
      break; //mengunci posisi X terdekat setelah O, jika tidak dibreak, dia akan menyimpan posisi x yang selanjutnya
    }
  }

  if (indexDari_X === -1) {
    return jarak;
  } else {
    jarak = Math.abs(indexDari_X - indexDari_O);
    return jarak;
  }
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
