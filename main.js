//BÀI TẬP JAVASCRIPT - BUỔI 4 - LỆNH ĐIỀU KIỆN 
//Tóm tắt yêu cầu vẽ mô hình 3 khối, lập trình để xử lý các bài toán

//BÀI 1
//Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần

/**
 * MÔ HÌNH 3 KHỐI
 * Khối 1: Input
 * 1. số nguyên 1 (n1)
 * 2. số nguyên 2 (n2)
 * 3. số nguyên 3 (n3)
 * 
 * Khối 2: Xử lý
 * Láy dữ liệu n1, n2, 3 từ UI người dùng nhập
 * So sánh: 
 *   Nếu n1 < n2 --> n1 < n3 --> n2 > n3:    n1; n3, n2 
 *   Nếu n1 < n2 --> n1 < n3 --> n2 < n3:    n1,n2, n3
 *   Nếu n1 < n2 --> n1 > n3                 n3, n1, n2
 * 
 *   Nếu n1 > n2 --> n1 < n3 --> n2 > n3 :   n3, n2, n1
 *   Nếu n1 > n2 --> n1 < n3 --> n2 < n3 :   n2, n1, n3
 *   Nếu n1 > n2 --> n1 > n3             :   n3, n2, n1
 * 
 * Khối 3: Output
 * Hiển thị kết quả so sánh ra UI 
 */


document.getElementById("btn1").onclick = function () {
    var n1 = document.getElementById("inputNum1").value;
    var n2 = document.getElementById("inputNum2").value;
    var n3 = document.getElementById("inputNum3").value;
    var sapXep = "";
    console.log(n1, n2, n3)

    if ((n1 < n2) && (n1 < n3) && (n2 > n3)) {
        console.log(n1 + n3 + n2);
        sapXep = String("Thứ tự từ nhỏ đến lớn: " + n1 + " " + n3 + " " + n2);
        console.log(sapXep);
    } else if ((n1 < n2) && (n1 < n3) && (n2 < n3)) {
        console.log(n1 + n2 + n3);
        sapXep = String("Thứ tự từ nhỏ đến lớn: " + n1 + " " + n2 + " " + n3);
    } else if ((n1 < n2) && (n1 > n3)) {
        console.log(n3 + n1 + n2);
        sapXep = String("Thứ tự từ nhỏ đến lớn: " + n3 + " " + n1 + " " + n2);
    } else if ((n1 > n2) && (n1 < n3) && (n2 > n3)) {
        console.log(n3, n2, n1);
        sapXep = String("Thứ tự từ nhỏ đến lớn: " + n3 + " " + n2 + " " + n1);
    } else if ((n1 > n2) && (n1 < n3) && (n2 < n3)) {
        console.log(n2 + n3 + n1);
        sapXep = String("Thứ tự từ nhỏ đến lớn: " + n2 + " " + n1 + " " + n3);
    } else if ((n1 > n2) && (n1 > n3)) {
        console.log(n3 + n2 + n1);
        sapXep = String("Thứ tự từ nhỏ đến lớn: " + n3 + " " + n2 + " " + n1);
    } else {
        console.log("Vui lòng nhập 3 số nguyên khác nhau ")
        sapXep = String("Vui lòng nhập 3 số nguyên khác nhau ");
    }
    document.getElementById("txtResult1").innerHTML = sapXep;
}


// BÀI 2
//Viết chương trình "Chào hỏi" các thành viên trong gia đình với các đặc điểm. Máy sẽ hỏi ai sử dụng, dựa vào câu trả lời đưa ra lời chào phù hợp. Gia đình gồm Bố (B), Mẹ (M), Anh trai (A), Em gái (E)

/**
 * MÔ HÌNH 3 KHỐI
 * 
 * Khối 1: Input
 * Trả lời: Ai đang sử dụng máy
 * 
 * Khối 2: Xử lý
 * 
 * lấy dữ liệu câu trả lời từ UI người dùng nhập
 * Hiển thị lên UI câu ch
 * 
 * Khối 3: 
 * Thông báo: Người sử dụng máy
 * 
 */

document.getElementById("btn2").onclick = function () {
    var B = String("Bố")
    var M = String("Mẹ")
    var A = String("Anh trai")
    var E = String("Em gái")
    var ans = document.getElementById("inputMember").value;
    var inf = "";

    if (ans == B) {
        console.log(B);
        inf = String("Chào " + B);
    } else if (ans == M) {
        console.log(M);
        inf = String("Chào " + M);
    } else if (ans == A) {
        console.log(A);
        inf = String("Chào " + A);
    } else if (ans == E) {
        console.log(E);
        inf = String("Chào " + E);
    } else {
        console.log("Xin Chào");
        inf = String("Xin Chào");
    }
    document.getElementById("txtResult2").innerHTML = inf;
}

// BÀI 3
// Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu số lẻ, bao nhiêu số chẵn
/**
 * MÔ HÌNH 3 KHỐI
 * Khối 1: Input
 * 3 số nguyên dương: n1, n2, n3
 * 
 * Khối 2: Xử lý
 * Cho người dùng nhập vào 3 số nguyên dương n1, n2, n3
 * Lấy giá trị từ UI thực hiện tính toán
 * Khai báo biến tính tổng số chắn countChan 
 * Khai báo biến tính tổng số lẻ countLe
 * Nếu n1%2=0 countChan +=1
 *    Ngược lại countLe +=1
 * 
 * Khối 3: Output
 */

document.getElementById("btn3").onclick = function () {
    var n1 = document.getElementById("inputN1").value;
    var n2 = document.getElementById("inputN2").value;
    var n3 = document.getElementById("inputN3").value;
    var countChan = 0;
    var countLe = 0;

    if (n1 % 2 == 0) {
        countChan += 1;
        console.log(countChan, countLe);
    } else {
        countLe += 1;
    }

    if (n2 % 2 == 0) {
        countChan += 1;
        console.log(countChan, countLe);
    } else {
        countLe += 1;
        console.log(countChan, countLe);
    }
    if (n3 % 2 == 0) {
        countChan += 1;
        console.log(countChan, countLe);
    } else {
        countLe += 1;
        console.log(countChan, countLe);
    }
    console.log(countChan, countLe);
    document.getElementById("txtResult3").innerHTML = String("Có " + countChan + " số chẵn và " + countLe + " số lẻ.")
}


//BÀI 4
//Viết chương trình cho nhập 3 cạnh của tam giác. 
//Cho biết đó là tam giác gì?
/**
 * MÔ HÌNH 3 KHỐI
 * Khối 1: Input
 * 3 cạnh tam giác (a, b, c)
 * 
 * Khối 2: Xử lý
 * Cho người dùng nhập vào 3 cạnh tam giác (a, b, c)
 * Lấy giá trị từ UI, thực hiện so sánh
 * Nếu a=b=c: Tam giác đều
 * Nếu (a=b) || (a=c) || (b=c): Tam giác cân
 * Nếu a*a+b*b=c*c || a*a+c*c =b*b || b*b+c*c=a*a: Tam giác vuông
 * 
 * Khối 3: Output
 * Loại tam giác
 */

document.getElementById("btn4").onclick = function () {
    var a = document.getElementById("inputA").value;
    var b = document.getElementById("inputB").value;
    var c = document.getElementById("inputC").value;
    var loai = ""

    if (a == b && a == c) {
        console.log("Tam giác đều");
        loai = String("Đây là tam giác đều");

    } else if ((a == b) || (a == c) || (b == c)) {
        console.log("Tam giác cân");
        loai = String("Đây là tam giác cân");
    } else if (a * a + b * b == c * c || a * a + c * c == b * b || b * b + c * c == a * a) {
        console.log("Tam giác vuông");
        loai = String("Đây là tam giác vuông");
    } else {
        console.log("Tam giác thường");
        loai = String("Đây là tam giác thường");
    }
    console.log(loai);
    document.getElementById("txtResult4").innerHTML = loai;
}




