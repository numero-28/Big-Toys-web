function setupInfiniteScroll($column) {
  $column.on('scroll', function () {
    const scrollTop = $column.scrollTop();
    const scrollHeight = $column[0].scrollHeight;
    const clientHeight = $column[0].clientHeight;

    // Scroll hacia abajo
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      const $first = $column.children('.cover').first();
      $column.append($first);
      $column.scrollTop(scrollTop - $first.outerHeight(true));
    }

    // Scroll hacia arriba
    if (scrollTop <= 10) {
      const $last = $column.children('.cover').last();
      $column.prepend($last);
      $column.scrollTop(scrollTop + $last.outerHeight(true));
    }
  });
}

$(document).ready(function () {
  const $colIzq = $('.col-izq');
  const $colDer = $('.col-der');

  $colIzq.on('mouseenter', function () {
    $colIzq.css('overflow-y', 'auto');
    $colDer.css('overflow-y', 'hidden');
  });

  $colDer.on('mouseenter', function () {
    $colDer.css('overflow-y', 'auto');
    $colIzq.css('overflow-y', 'hidden');
  });

  $colIzq.on('mouseleave', function () {
    $colIzq.css('overflow-y', 'hidden');
  });

  $colDer.on('mouseleave', function () {
    $colDer.css('overflow-y', 'hidden');
  });

  setupInfiniteScroll($colIzq);
  setupInfiniteScroll($colDer);
});
