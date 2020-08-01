$(document).ready(function() {
  $('#arrowXButton').click(function() {
    $('body, html').animate({
      scrollTop: $("#aboutContent").offset().top
    }, 600);
  });
});
 
$(document).ready(function() {
  $('#about2').click(function() {
    $('body, html').animate({
      scrollTop: $("#aboutContent").offset().top
    }, 600);
  });
});

$(document).ready(function() {
  $('#projects2').click(function() {
    $('body, html').animate({
      scrollTop: $("#projectsContent").offset().top
    }, 600);
  });
});

$(document).ready(function() {
  $('#contact2').click(function() {
    $('body, html').animate({
      scrollTop: $("#contactContent").offset().top
    }, 600);
  });
});

$(document).ready(function() {
    $('#about').click(function(event) {
      $('body, html').animate({
        scrollTop: $("#aboutContent").offset().top
      }, 600);
    });
  });

  $(document).ready(function() {
    $('#projects').click(function(event) {
      $('body, html').animate({
        scrollTop: $("#projectsContent").offset().top
      }, 600);
    });
  });

  $(document).ready(function() {
    $('#contact').click(function(event) {
      $('body, html').animate({
        scrollTop: $("#contactContent").offset().top
      }, 600);
    });
  });

window.onscroll = function() {stickyNavFcn()};
var navStick = document.getElementById("navStick");
var sticky = navStick.offsetTop;

function stickyNavFcn() {
  if (window.pageYOffset >= sticky) {
    navStick.classList.add("sticky")
  } else {
    navStick.classList.remove("sticky");
  }
}

const sheetUrl = 'https://docs.google.com/spreadsheets/d/197-MKBbILr7wnFXrPQ8MLIESCdYmYrO1kZN0hDmCq4Q/edit?usp=sharing'
const sheetAsJSON = 'https://spreadsheets.google.com/feeds/list/197-MKBbILr7wnFXrPQ8MLIESCdYmYrO1kZN0hDmCq4Q/od6/public/values?alt=json'

$.ajax({
    url: sheetAsJSON,
  }).then((data) => {
      const projects = data.feed.entry.map( project => {
          return {
              title: project.gsx$title.$t,
              image: project.gsx$image.$t,
              description: project.gsx$description.$t,
              url: project.gsx$url.$t
          }
      }) 
      imgAdder(projects)
  })
  .catch( err => console.log('err', err))

function imgAdder(projectsArr) {
  projectsArr.forEach( project => {
      let $img = $('<img>')
      let $title = $('<h3>')
      let insideImg = project.image
      let projectUrl = project.url
      let $divForImgHover = $('<div>')
      $title.text(project.description).attr('class', 'blueTitle')
      $divForImgHover.addClass('hoverDivProjects')
      $img.attr('src', insideImg)
      .addClass('cardPadder')
    
      $divForImgHover.append($img).prepend($title);
      
      $('.projects').append($divForImgHover)
      $img.wrap("<a class='blueLink' href=' " + projectUrl + "'></a>")
  });
}

let noTooth = 'https://i.imgur.com/t5HHRo8.png'
let normal = "https://i.imgur.com/Pp4zA4B.png"


  $(document).keypress(function(typing) {
    if(typing.keyCode === (116,111,111,116,104)) {
      $('.portraitMe').attr('src', noTooth)
    }
    })

$(document).keyup(function(typing) {
  if(typing.keyCode === 27) {
    $('.portraitMe').attr('src', normal)
  }
})