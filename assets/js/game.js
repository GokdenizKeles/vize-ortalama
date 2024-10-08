let vize = (Number)  (prompt ("vize notunuzu giriniz"))
let final = (Number)  (prompt ("final notunuzu giriniz"))

let vizeOran = 0.40
let finalOran = 0.60

let ortalama = (vize * vizeOran) + (final * finalOran)

 alert ("ortalamanız " + ortalama)
if (ortalama >= 50) {
   alert("geçtiniz")
} else if (ortalama < 50 && ortalama > 40) {
  alert ("şartlı geçtiniz")
} else if (ortalama < 40) {
   alert("kaldınız")
}



