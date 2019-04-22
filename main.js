// $("#btnClick").click(function () {
//     var salavat = $("#salavat").val();
//     // var salavat = document.getElementById("salavat").value;

//     if (Number(salavat) > 0) {
//         $("#warning").slideUp();
//         $("#label").text("تعداد صلوات باقی مانده");
//         $("#salavat").val(Number(salavat) - 1);
//         $("#salavat").attr("disabled", "disabled");
//         $("#salavat").removeClass("w3-green");
//         $("#salavat").addClass("w3-blue-gray");

//         if (Number($("#salavat").val()) == 0) {
//             $("#warning").text("به دیار شهدا خوش آمدید");
//             $("#warning").removeClass("w3-text-red");
//             $("#warning").addClass("w3-text-green");
//             $("#warning").slideDown();

//             //delay for 2 secends
//             setTimeout(function () {
//                 window.location.assign("http://gsm.ir");
//             }, 2000);
//         }
//     } else {
//         $("#warning").slideDown();
//         $("#label").text("تعداد صلوات ");
//     }
// });



function getSalavat() {
    var salavat = $("#salavat").val();
    // var salavat = document.getElementById("salavat").value;

    if (Number(salavat) > 0) {
        $("#warning").slideUp();
        $("#label").text("تعداد صلوات باقی مانده");
        $("#salavat").val(Number(salavat) - 1);
        $("#salavat").attr("disabled", "disabled");
        $("#salavat").removeClass("w3-green");
        $("#salavat").addClass("w3-blue-gray");

        if (Number($("#salavat").val()) == 0) {
            $("#warning").text("به دیار شهدا خوش آمدید");
            $("#warning").removeClass("w3-text-red");
            $("#warning").addClass("w3-text-green");
            $("#warning").slideDown();

            //delay for 2 secends
            setTimeout(function () {
                window.location.assign("http://gsm.ir");
            }, 2000);
        }
    } else {
        $("#warning").slideDown();
        $("#label").text("تعداد صلوات ");
    }
}