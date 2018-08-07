$(function () {
  // 轮播图
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });


  // 搜索框
  $('.containert .header input').focus(function () {
    $('.containert').hide();
    $('.searchpage').show();

  })

  // 返回点击事件
  $('.searchpage .back').click(function () {
    $('.containert').show();
    $('.searchpage').hide();
  })

  // 历史搜索
  var keysArr = getKeywords();

  render(keysArr);

  // 点击搜索
  $('.searchpage .search').click(function () {

    var str = $('.searchpage input').val();

    $(".searchpage .header input").val("");

    if (str.length == 0) {

      return;
    }
     var keysArr = getKeywords();
        
     keysArr.push(str);
      window.localStorage.setItem('keywords',JSON.stringify(keysArr)) ;
      render(keysArr);
  })

  //  点击清除历史记录
    $(".searchhistory").on('click','.clear',function(){

    
     localStorage.removeItem('keywords');
     render([]);
    })

    
// 判断有无数据
  function getKeywords() {
    var keysArr = [];
    var keywordsStr = localStorage.getItem('keywords');


    if (keywordsStr) {
      keysArr = JSON.parse(keywordsStr);
    }

    return keysArr;
  }




  // 渲染页面
  function render(arr) {

    if (arr.length > 0) {

      $(".searchhistory").show();

    } else {

      $(".searchhistory").hide();
    }
    var html = template('tpl', {
      list: arr
    });
    $('.searchhistory').html(html);

  }





})