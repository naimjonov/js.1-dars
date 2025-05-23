// Boolean1. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni musbat".

// let a = -2

// if (a > 0) {
//     console.log("son musbat")
// } else {
//     console.log("son mafiy")
// }



// Boolean2. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni toq son". 
// let a = 10

// if (a % 2 == 1) {
//     console.log("toq son")
// } else{
//     console.log("son juft")
// }



// Boolean3. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A>2 va B <=3".
// let a = 5
// let b = 2

// if (a > 2 && b < 3) {
//     console.log(true)
// }else {
//     console.log(false)
// }



// Boolean4. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A <= B <= C"	

// let a = 50
// let b = 70
// let c = 99

// if (a <= b && b <= c) {
//     console.log(true)
// } else {
//     console.log(false)
// }



// Boolean5. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarining har ikkalasi ham yoki toq son yoki juft son".
// let a = 4
// let b = 9

// if (a % 2 == 0 && b % 2 == 0 || a % 2 == 1 && b % 2 == 1 ) {
//     console.log("son ekalasixam juft yoi toq")
// } else {
//     console.log("bu xato")
// }



// Boolean6. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning hech bo'lmaganda bittasi musbat".
// let a = 9
// let b = -30
// let c = -1

// if (a > 0 || b > 0 || c > 0) {
//     console.log("xech bolmaganda bitasi musbat")
// } else {
//     console.log("ichida musbat yoq")
// }




// Boolean7. Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning barcha raqamlari har xil".
// let a = 246

// let yuzlik =Math.floor(a / 100)
// let onlik = Math.floor((a % 100 )/ 10)
// let birlik = a % 10

// if (yuzlik != onlik && onlik != birlik && yuzlik != birlik){
//     console.log("xama son xarxil")
// } else {
//     console.log("orasida birxili bor")
// }



// Boolean8. Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda 2 tasi bir biriga teng".
// let a = 9
// let b = 2
// let c = 8

// if (a == b || b == c || c == a){
//     console.log("xech bolmaganda 2 tasi teng")
// } else{
//     console.log("xamasi xar xil")
// }



// Boolean9.Shaxmat doskasining ikkita turli(x1, y1), (x2, y2) koordinalari berilgan(1 - 8 oraliqda yotuvchi butun sonlar).Jumlani rostlikka tekshiring: "Farzin bir yurishda bir maydondan ikkinchisiga o'ta oladi".
// let x1 = 4, y1 = 4;
// let x2 = 6, y2 = 6;

// if (
//     x1 === x2 ||
//     y1 === y2 ||
//     (x1 - x2 === y1 - y2) ||
//     (x1 - x2 === y2 - y1) ||
//     (x2 - x1 === y1 - y2) ||
//     (x2 - x1 === y2 - y1)
// ) {
//     console.log("ota oladi");
// } else {
//     console.log("ota olmaydi");
// }



                                                // UYGA VAZIFA


// Boolean1. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni juft son”.
// let a = 4

// if (a % 2 == 0){
//     console.log("juft son")
// }else {
//     console.log("son toq")
// }




// Boolean2. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring:
// "A >= 0 yoki B <-2"

// let a = 7
// let b = -1

// if (a > 0 || b < -2) {
//     console.log(true)
// }else {
//     console.log(false)
// }



// Boolean3. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "B soni A va C sonlari orasida yotadi".
// let a = 2
// let b = 4
// let c = 10

// if(b > a && b < c || b > c && b < a) {
//     console.log(true)
// }else {
//     console.log(false)
// }




// Boolean4. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlari toq sonlar".
// let a = 7
// let b = 9
// if (a % 2 == 1 && b % 2 == 1) {
//     console.log(true)
// }else{
//     console.log(false)
// }




// Boolean5. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning hech bo'lmaganda bittasi toq son".
// let a = 9
// let b = 8
// if (a % 2 == 1 || b % 2 == 1) {
//     console.log("xech bolmaganda bita toq")
// }else{
//     console.log("toq yoq")
// }



// Boolean6. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning faqat bittasi toq son".
// let a = 9
// let b = 10
// if (a % 2 == 1 && b % 2 == 0 || a % 2 == 0 && b % 2 == 1) {
//     console.log("bita toq")
// }else{
//     console.log("ekalasixam toq")
// }



// Boolean7. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning har biri musbat".
// let a = 9
// let b = 5
// let c = 2
// if (a > 0 && b > 0 && c > 0){
//     console.log("xamasi usbat")
// }else {
//     console.log("manfiy bor")
// }



// Boolean8. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlaridan faqat bittasi musbat son".
// let a = 8
// let b = -9
// let c = -3

// if (a > 0 && b < 0 && c < 0 || a < 0 && b > 0 && c < 0 || a < 0 && b < 0 && c > 0) {
//     console.log("bittasi musbat")
// } else {
//     console.log("musbatlar kop yoki manfilar")
// }


// Boolean9. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlardan faqat ikkitasi musbat son".
// let a = 8
// let b = 9
// let c = -3

// if (a > 0 && b > 0 && c < 0 || a < 0 && b > 0 && c > 0 || a > 0 && b < 0 && c > 0) {
//     console.log("ikkta musbat")
// } else {
//     console.log("musbatlar kop yoki manfilar")
// }



// Boolean10. Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son ikki xonali juft son". 
// let a = 24

// if (a > 10 && a < 99 && a % 2 == 0) {
//     console.log("jusft son va 2 xonali")
// }else {
//     console.log("ikki xonali emas yoki juft emas")
// }



// Boolean11. Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son uch xonali toq". 
// let a = 244

// if (a > 100 && a < 999 && a % 2 == 1) {
//     console.log("toq son va 3 xonali")
// }else {
//     console.log("3 xonali emas yoki toq emas")
// }




// Boolean12. Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda bir jufti o'zaro qarama-qarshi".
// let a = 3;
// let b = -3;
// let c = 5;

// if (a === -b || a === -c || b === -c){
//     console.log("xech bolmaganda bir jufti qarama qarshi")
// } else {
//     console.log("qarama qarshi emas")
// }





// Boolean13. Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan".
// let a = 256

// let yuzlik =Math.floor(a / 100)
// let onlik = Math.floor((a % 100 )/ 10)
// let birlik = a % 10

// if (birlik > onlik && onlik > yuzlik){
//     console.log("osish taribida")
// } else {
//     console.log("tartibsiz")
// }




// Boolean14. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan yoki kamayuvchi ketma-ketlikka ega".
// let a = 987

// let yuzlik =Math.floor(a / 100)
// let onlik = Math.floor((a % 100 )/ 10)
// let birlik = a % 10

// if (birlik > onlik && onlik > yuzlik || birlik < onlik && onlik < yuzlik ){
//     console.log("osish taribida yokida kaayish")
// } else {
//     console.log("tartibsiz")
// }




// Boolean15. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonni chapdan o'qiganda ham, o'ngdan o'qiganda ham bir xil".
// let a = 656

// let yuzlik =Math.floor(a / 100)
// let onlik = Math.floor((a % 100 )/ 10)
// let birlik = a % 10

// if (birlik == yuzlik){
//     console.log("ekala tarafdan oqigandaxam bir xil")
// } else {
//     console.log("birxil emas")
// }