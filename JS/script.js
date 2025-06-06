$(document).ready(function () {

<<<<<<< Updated upstream
    $colIzq.append($izqOriginal);
    $colDer.append($derOriginal);
=======
    const $izqScroll = $('.col-izq .col-scroll');
    const $derScroll = $('.col-der .col-scroll');
>>>>>>> Stashed changes

    const $izqOriginal = $izqScroll.children().clone();
    const $derOriginal = $derScroll.children().clone();

    $izqScroll.append($izqOriginal);
    $derScroll.append($derOriginal);


    $('.col-izq').on('mouseenter', function () {
        $izqScroll.addClass('active');
        $derScroll.removeClass('active');
    });

    $('.col-der').on('mouseenter', function () {
        $derScroll.addClass('active');
        $izqScroll.removeClass('active');
    });

    function setupInfiniteScroll($col) {
        const originalHeight = $col[0].scrollHeight / 2;

        $col.scrollTop(originalHeight);

        $col.on('scroll', function () {
            const scrollTop = $col.scrollTop();

            if (scrollTop >= originalHeight * 1.5) {
                $col.scrollTop(scrollTop - originalHeight);
            }

            if (scrollTop <= originalHeight * 0.5) {
                $col.scrollTop(scrollTop + originalHeight);
            }
        });
    }
    setupInfiniteScroll($izqScroll);
    setupInfiniteScroll($derScroll);
});