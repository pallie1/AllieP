////////////
// nav arrow to x
////////////

//this toggle works
// $(() => {
//   const $navButtons = $('nav button')
//   const $nav = $('nav')
  
//   $navButtons.on('click', () => {
//       $('i').toggleClass('fa-times fa-chevron-down')
//   })
// })

//testing this one out
$(function() {
  // const $navButtons = $('nav button')
  $(document).on('click', function(e) {
      if (e.target.id === 'arrowXButton') {
    $('i').toggleClass('fa-times fa-chevron-down')
  } 
  else {
    $('i').toggleClass('fa-times fa-chevron-down')

  }
  
})
})

////////////
// tablet desktop nav click to go to different section 
////////////

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

////////////
// phone nav click to go to different section 
////////////

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

  

////////////
// mobile nav stickiness 
////////////

// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyPhoneNavFcn()};

// Get the navbar
var navPhoneStick = document.getElementById("navPhoneStick");

// Get the offset position of the navbar
var sticky = navPhoneStick.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyPhoneNavFcn() {
  if (window.pageYOffset >= sticky) {
    navPhoneStick.classList.add("sticky")
  } else {
    navPhoneStick.classList.remove("sticky");
  }
}

////////////
// Tablet & desktop nav stickiness 
////////////

// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {stickyNavFcn()};

// // Get the navbar
// var navStick = document.getElementById("navStick");

// // Get the offset position of the navbar
// var sticky = navStick.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function stickyNavFcn() {
//   if (window.pageYOffset >= sticky) {
//     navStick.classList.add("sticky")
//   } else {
//     navStick.classList.remove("sticky");
//   }
// }



////////////
// connect the Google sheet for project section
////////////

  console.log('app.js',$)

const sheetUrl = 'https://docs.google.com/spreadsheets/d/197-MKBbILr7wnFXrPQ8MLIESCdYmYrO1kZN0hDmCq4Q/edit?usp=sharing'
const sheetAsJSON = 'https://spreadsheets.google.com/feeds/list/197-MKBbILr7wnFXrPQ8MLIESCdYmYrO1kZN0hDmCq4Q/od6/public/values?alt=json'


// .ajax returns a Promise, and a Promise is resolved using .then()
$.ajax({
    url: sheetAsJSON,
  }).then((data) => {
      console.log("data", data)
      // data and feed are ojects, entry is an array
      const projects = data.feed.entry.map( project => {
          return {
              title: project.gsx$title.$t,
              image: project.gsx$image.$t,
              description: project.gsx$description.$t,
              url: project.gsx$url.$t
          }
      }) // map ends
      // app(projects)
      imgAdder(projects)
  })
  // .catch is meant to handle errors
  .catch( err => console.log('err', err))


// function app(projectsArr) {
//     console.log('inside app show projectsArr - ', projectsArr)
//     projectsArr.forEach( project => {
//         // creates an h3
//         let title = $('<h3>')
//         // assign the title the value storedin project.title
//         title.text(project.title)
//         // append the title to the body
//         $('#projectsContent').append(title)
//     });
// }


////////////
// puts Google sheet info into Project section cards
////////////

//image & link grabber/adder
function imgAdder(projectsArr) {
  projectsArr.forEach( project => {
      // creates an img
      let $img = $('<img>')
      let insideImg = project.image
      let projectUrl = project.url
      let $divForImgHover = $('<div>')
      // let $aForProjectUrl = $('<a>')
      // $aForProjectUrl.attr('href', projectUrl)
      // console.log('link - ', $aForProjectUrl)
      $divForImgHover.addClass('hoverDivProjects')
      // assign the img src the value storedin project.img
      $img.attr('src', insideImg)
      .addClass('card-img')
      .addClass('cardPadder')
      
      
      console.log('project url - ', projectUrl)
      console.log('$img - ', $img)
      // append the img to project
      $divForImgHover.append($img)
      $('#projectsContent').append($divForImgHover)
      $img.wrap("<a href=' " + projectUrl + "'></a>")
  });
}

