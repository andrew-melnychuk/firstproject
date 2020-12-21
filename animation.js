var w = window.innerWidth,
  h = window.innerHeight,
  canvas = document.getElementById('snow'),
  ctx = canvas.getContext('2d'),
  rate = 60,
  arc = 2000,
  time,
  count,
  size = 1.2,
  speed = 10,
  lights = new Array(),
  colors = ['#ffffff'];

canvas.setAttribute('width', w);
canvas.setAttribute('height', h);

function init() {
  time = 0;
  count = 0;

  for (var i = 0; i < arc; i++) {
    lights[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      toX: Math.random() * 5 + 1,
      toY: Math.random() * 5 + 1,
      c: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * size,
    };
  }
}

function snow() {
  ctx.clearRect(0, 0, w, h);

  for (var i = 0; i < arc; i++) {
    var li = lights[i];

    ctx.beginPath();
    ctx.arc(li.x, li.y, li.size, 0, Math.PI * 2, false);
    ctx.fillStyle = li.c;
    ctx.fill();

    li.x = li.x + li.toX * (time * 0.05);
    li.y = li.y + li.toY * (time * 0.05);

    if (li.x > w) {
      li.x = 0;
    }
    if (li.y > h) {
      li.y = 0;
    }
    if (li.x < 0) {
      li.x = w;
    }
    if (li.y < 0) {
      li.y = h;
    }
  }
  if (time < speed) {
    time++;
  }
  timerID = setTimeout(snow, 1000 / rate);
}
init();
snow();

//navbar code

var animation = 'easeOutCubic';
delay = 60;
$(document)
  .on('click', '.fa-bars', function () {
    var i = 0;
    $('nav').before($('#snow'));
    $('#snow').fadeIn();
    $('#mainnav')
      .find('li')
      .each(function () {
        var that = $(this);
        i++;
        (function (i, that) {
          setTimeout(function () {
            that
              .animate({ top: '0px' }, { duration: 350, easing: animation })
              .fadeIn({ queue: false });
          }, delay * i);
        })(i, that);
      });
    $('.fa-bars').fadeOut(100, function () {
      $(this).removeClass('fa-bars').addClass('fa-times').fadeIn();
    });
  })
  .on('click', '#snow, .fa-times', function () {
    $('#snow').fadeOut();
    $('#mainnav')
      .find('li')
      .animate({ top: '-150px' }, { duration: 250 })
      .fadeOut({ queue: false });

    $('.hamb').fadeOut(100, function () {
      $(this)
        .find($('i'))
        .removeClass('fa-times')
        .addClass('fa-bars')
        .end()
        .fadeIn();
    });
  });
