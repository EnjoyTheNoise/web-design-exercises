$(document).ready(function () {
    // $(function () {                  old load function
    //     var includes = $('[data-include]');
    //     jQuery.each(includes, function () {
    //         var file = 'elements/' + $(this).data('include') + '.html';
    //         $(this).load(file);
    //         console.log("loaded file")
    //     });
    // });
    $(".motto").on("mouseover", function () {
        this.innerHTML = 'nie wkurwiać informatyków';
        console.log("mouseover");
    }).on("mouseout", function () {
        this.innerHTML = 'nie denerwować informatyków';
        console.log("mouseout");
    });
    $(".nav a").on("click", function () {
        if (this.classList.contains("force-pointer"))
            return;
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
    $('.panel').on('click', function () {
        $(this).toggleClass('panel-primary panel-success');
    });
});