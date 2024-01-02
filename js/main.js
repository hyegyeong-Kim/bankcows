$(function(){
   /* include */

   $('footer').load('./include/footer.html');

   /**
    *햄버거버튼클릭하면, header에 ul의 투명도가 1이된다
    x버튼을 누리면 header ul에 투명도가 0이 된다.
    */
   // let hamber_btn = $('.hamber_btn');
   // hamber_btn.click(function(){
   //    console.log('hi')
   //    // var $nav = $('header > ul')
   //    // $nav.css("opacity",1)
   // })
   function nav (){
      var $nav = $('header > ul')
   var $swiper = $('.swiper')
   if (window.matchMedia("(max-width:800px)").matches) {
      
      $('.hamber_btn').click(function () { 
      console.log('2222')
      $nav.css({"left":"0px","z-index":"120","opacity":"1", "visibility": "visible"});
      $('.toggle_btn_view').css({"z-index":"0"});
      $swiper.css({"z-index":"0"});

      });
      $('header .close').delegate('button','click',function(){
         $nav.css({"left":"-2000px","z-index":"0","opacity":"0", "visibility":"hidden"});
         $('.toggle_btn_view').css({"z-index":"110"});
         $swiper.css({"z-index":"110"});
      })
      
      }else if(window.matchMedia("(min-width:801px)").matches){
         $nav.css({"display":"flex"});
         $('.Indicators').removeClass
      }
      else if(window.matchMedia("(min-width:1019px)").matches){
         $nav.css({"display":"flex"});
      }
   }
   nav ()

   function growth_animation(){
      if (window.matchMedia("(max-width:691px)").matches) {
         $('.Indicators').addClass('animation_2')
      }else if (window.matchMedia("(min-width:692px)").matches){
         $('.Indicators').removeClass('animation_2')
      }
   }
   
   $(window).resize(function(){
      nav ()
      growth_animation()
   })

   /*------ main -------*/

   /**
    * 윈도우 페이지가 로드되면
    * 0.1초후 strong태그 opacity 1
    * 0.2초후 span opacity 1
    * 0.3초후 em 태그의 width가 100%가 된다.
    */

   $(window).on('load', function(){
      $('.visual #inner > div > strong').css({"transition-delay":"0.5s","opacity":"1"});
      $('.visual #inner > div > span').css({"transition-delay":"1s","opacity":"1"});
      $('.visual #inner > div > strong > em').css({"width":"100%","transition-delay":"1.5s"})
      $('.visual #inner > div > strong').css({"transition-delay":"2.5s","color":"#000"});
   })


   /**
    * scrolltop양이 map의 offsettop의 20%보다 크면 카운터 애니메이션이 동작한다.
    */

     

   /*--------scrollevent-----------*/
   $(window).scroll(function () {
      /* header */
      var scrollValue = $(document).scrollTop(); 
      var winh = $(window).height()
      if(scrollValue > 100){
         $('header').css("background", "#fff");
         $('header > h1 > a').css("color","blue")
      }else if (scrollValue < 100) {
         $('header').css("background", "transparent");
         $('header > h1 > a').css("color","#000")
      }

      /* map */
      var map = $('.map').offset().top;
      if(scrollValue >= map-winh){
         Numcount()
      }
      
   });

   function Numcount(){
      $('.nums').each(function () {
         const $this = $(this),
             countTo = $this.attr('data-count');
   
         $({
             countNum: $this.text()
         }).animate({
             countNum: countTo
         }, {
             duration: 3000,
             easing: 'linear',
             step: function () {
                 $this.text(Math.floor(this.countNum));
             },
             complete: function () {
                 $this.text(this.countNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
                 //3자리 마다 콤마 표시 적용
             }
         });
      });
   }
   /*----------farm-------------- */
/**
 * 모든 탭을 찾는다.
 * 모든 스와이프를 찾는다.
 * i번째 탭을 클릭했을 했을 때, 모든 스와이프에 current 클래스가 없어지고
 * 클릭한 탭 addClass current가 붙는다 * 
 * i번째 스와이프에 addClass current가 붙는다.
 */
var tab = $('.farm  ul li')
var tab_content = $('.farm .swiper') 
console.log('tab',tab)
console.log('tab_content',tab_content)
for (let i=0; i<tab.length; i++){
   tab.eq(i).on('click', function(){
      tab.removeClass('current');
      tab.eq(i).addClass('current');
      tab_content.removeClass('current');
      tab_content.eq(i).addClass('current');
   })
}
   /*------- growth ---------*/
   

   /*------- safety ---------*/
   $('.toggle_btn_view > span').on('click', function(){
      var text = $('.toggle_btn_view > span > span')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

      $('.chart_toggle').slideToggle();
      $(text).text(function(i, text){
         return text === "펼쳐보기" ? "닫기" : "펼쳐보기";
      })
      $('.toggle_btn_view > span > img').toggleClass('open');
   })
   
   


   /*------ footer -------*/


})//ready fn

window.addEventListener('scroll', function(){
   let scrollTop = window.scrollY
   let winHeight = window.outerHeight * 0.8
   let delay = 100
   // console.log(document.querySelector('.sec_3').offsetTop-250,scrollTop)
   let sec_offset = document.querySelector('.Partners').offsetTop-winHeight;
     if(scrollTop >=sec_offset){
         var text = document.querySelectorAll('.Partners .element_jumps > li > img')
         text.forEach(function(a,i){
           setTimeout(function(){
             a.style.animation = "jumps 2s ease-in-out 1 alternate";
             a.style.animationDelay = (delay*i);
             // console.log('1 : '+i)
           }, (delay*i))
           console.log(delay*i)
         })
     }
 })

 window.addEventListener('scroll', function(){
   let scrollTop = window.scrollY
   let winHeight = window.outerHeight
   let delay = 100
   // console.log(document.querySelector('.sec_3').offsetTop-250,scrollTop)
   let sec_offset = document.querySelector('.Investors').offsetTop-winHeight;
     if(scrollTop >=sec_offset){
         var text = document.querySelectorAll('.Investors .element_jumps > li > img')
         text.forEach(function(a,i){
           setTimeout(function(){
             a.style.animation = "jumps 2s ease-in-out 1 alternate";
             a.style.animationDelay = (delay*i);
             // console.log('1 : '+i)
           }, (delay*i))
           console.log(delay*i)
         })
     }
 })

 





   /* Hamberger_Menu js*/
  
   // let btn = document.querySelector('.hamber_btn')
   // btn.addEventListener('click', function(){
   //    console.log('hi')
   // })
   