const homeTexts = [
  {
    name: "NUT NUT",
    place: "SPAIN",
    brand: "NUT NUT",
    industry: "FOOD",
    area: "BRANDING"
  },
  {
    name: "SKINNY LOUIE",
    place: "MIAMI",
    brand: "SKINNY LOUIE",
    industry: "FOOD",
    area: "BRANDING"
  },
  {
    name: "LA ATÍPICA UNIVERSIDAD",
    place: "SPAIN",
    brand: "UDIT",
    industry: "EDUCATION",
    area: "CAMPAING"
  },
  {
    name: "8M 2024",
    place: "SPAIN",
    brand: "MTV",
    industry: "SOCIAL",
    area: "AWARENESS"
  },
  {
    name: "PARCLICK",
    place: "SPAIN",
    brand: "PARCLICK",
    industry: "TECH",
    area: "UX/UI"
  },
  {
    name: "ALEXIA",
    place: "SPAIN",
    brand: "AMAZON PRIME VIDEO",
    industry: "STREAMING",
    area: "CAMPAIGN"
  },
  {
    name: "PMYPTMC",
    place: "SPAIN",
    brand: "NICKELODEON",
    industry: "AWARENESS",
    area: "CAMPAIGN"
  },
  {
    name: "PARED CON PARED",
    place: "SPAIN",
    brand: "NETFLIX",
    industry: "STREAMING",
    area: "AUDIOVISUAL"
  },
  {
    name: "BAKE OFF",
    place: "SPAIN",
    brand: "AMAZON PRIME VIDEO",
    industry: "STREAMING",
    area: "CAMPAIGN"
  }
];
;





function setupInfiniteScroll($column) {
  $column.on('scroll', function () {
    const scrollTop = $column.scrollTop();
    const scrollHeight = $column[0].scrollHeight;
    const clientHeight = $column[0].clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      const $first = $column.children('.cover').first();
      $column.append($first);
      $column.scrollTop(scrollTop - $first.outerHeight(true));
    }

    if (scrollTop <= 10) {
      const $last = $column.children('.cover').last();
      $column.prepend($last);
      $column.scrollTop(scrollTop + $last.outerHeight(true));
    }
  });
}

$(document).ready(function () {
  const $scrollIzq = $('.col-izq .col-scroll');
  const $scrollDer = $('.col-der .col-scroll');

  $('.col-izq').on('mouseenter', function () {
    $scrollIzq.addClass('active');
    $scrollDer.removeClass('active');
  });

  $('.col-der').on('mouseenter', function () {
    $scrollDer.addClass('active');
    $scrollIzq.removeClass('active');
  });

  $('.col-izq, .col-der').on('mouseleave', function () {
    $scrollIzq.removeClass('active');
    $scrollDer.removeClass('active');
  });

  setupInfiniteScroll($scrollIzq);
  setupInfiniteScroll($scrollDer);
});
