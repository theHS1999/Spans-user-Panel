$(document).ready(function () {
    $(".converter").find(".toggle").click(function () {
        var stat = $(".converter").css("right");
        if (stat === "0px") {
            $(".converter").removeClass("converter-open");
            $(".converter").addClass("converter-close");
        }
        else {
            $(".converter").removeClass("converter-close");
            $(".converter").addClass("converter-open");
        }
    });
    var tooman = $("#tooman").val();
    var spans = $("#spans").val();
    var paypal = $("#paypal").val();
    var toomantoSpans_amount = (tooman / 20).toFixed(2);
    var toomanToPaypal_amount = (tooman / 12000).toFixed(2);
    $(".tooman-result").find(".converted-currency1").html(toomantoSpans_amount + " spans");
    $(".tooman-result").find(".converted-currency2").html(toomanToPaypal_amount + " PayPal");
    $("#tooman").on("change paste keyup" , function () {
        tooman = $(this).val();
        toomantoSpans_amount = (tooman / 20).toFixed(2);
        toomanToPaypal_amount = (tooman / 12000).toFixed(2);
        $(".tooman-result").find(".converted-currency1").html(toomantoSpans_amount + " spans");
        $(".tooman-result").find(".converted-currency2").html(toomanToPaypal_amount + " PayPal");
    });
    var spansToTooman_amount = spans * 20;
    var spansToPaypal_amount = (spans / 600).toFixed(2);
    $(".spans-result").find(".converted-currency1").html(spansToTooman_amount + " Tooman");
    $(".spans-result").find(".converted-currency2").html(spansToPaypal_amount + " PayPal");
    $("#spans").on("change paste keyup" , function () {
        spans = $(this).val();
        spansToTooman_amount = spans * 20;
        spansToPaypal_amount = (spans / 600).toFixed(2);
        $(".spans-result").find(".converted-currency1").html(spansToTooman_amount + " Tooman");
        $(".spans-result").find(".converted-currency2").html(spansToPaypal_amount + " PayPal");
    });
    var paypaltoTooman_amount = paypal * 12000;
    var paypalToSpans_amount = paypal * 600;
    $(".paypal-result").find(".converted-currency1").html(paypaltoTooman_amount + " Tooman");
    $(".paypal-result").find(".converted-currency2").html(paypalToSpans_amount + " Spans");
    $("#paypal").on("change paste keyup" , function () {
        paypal = $(this).val();
        paypaltoTooman_amount = paypal * 12000;
        paypalToSpans_amount = paypal * 600;
        $(".paypal-result").find(".converted-currency1").html(paypaltoTooman_amount + " Tooman");
        $(".paypal-result").find(".converted-currency2").html(paypalToSpans_amount + " Spans");
    });
});