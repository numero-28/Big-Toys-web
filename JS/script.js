
$(document).ready(function () {
    const $colIzq = $('.col-izq');
    const $colDer = $('.col-der');
    
    const $izqOriginal = $colIzq.children().clone();
    const $derOriginal = $colDer.children().clone();

    $colIzq.append($izqOriginal);
    $colDer.append($derOriginal);

    $colIzq.on('mouseenter', function () {
        $colIzq.css('overflow-y', 'auto');
        $colDer.css('overflow-y', 'hidden');
    });

    $colDer.on('mouseenter', function () {
        $colDer.css('overflow-y', 'auto');
        $colIzq.css('overflow-y', 'hidden');
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

    setupInfiniteScroll($colIzq);
    setupInfiniteScroll($colDer);

  });
  