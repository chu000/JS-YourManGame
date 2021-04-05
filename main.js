let arrManPic = [
    '<img src="./img/man (1).jpg" >',
    '<img src="./img/man (2).jpg" >',
    '<img src="./img/man (3).jpg" >',
    '<img src="./img/man (4).jpg" >',
    '<img src="./img/man (5).jpg" >',
    '<img src="./img/man (6).jpg" >',
    '<img src="./img/man (7).jpg" >',
    '<img src="./img/man (8).jpg" >',
    '<img src="./img/man (9).jpg" >',
    '<img src="./img/man (10).jpg" >',
    '<img src="./img/man (11).jpg" >',
    '<img src="./img/man (12).jpg" >',
    '<img src="./img/man (13).jpg" >',
  ]

  // function getRandom(x){
  //     return Math.floor(Math.random()*x)+1;
  // }

  let arrMeal = [
    '社長',
    '和尚',
    '鄰居',
    '總裁',
    '學長',
    '學弟',
    '老師',
    '男友',
    '前任',
    '同事',
    '寶貝',
    '教練',
    '助理',
  ]
  // let idxRandom = Math.floor(Math.random() * 7);

  //作為 clearInterval() 用的變數

  // document.write(`我可以選擇的男人有: <br />`);
  // for (let i = 0; i<arrMeal.length;i++){
  //     document.write('● ' + arrMeal[i] + '<br />');
  // }

  // }

  // for (i =0; i<=6;i++){
  // let num = getRandom();
  // if (arrMeal.indexOf(i) > 6){
  //     i=0;
  // }
  // console.log(i)

  var i
  var t

  function count() {
    let i = Math.floor(Math.random() * 13)

    let p = document.getElementById('txt')
    let img = document.getElementById('manImg')
    //   另一種
    //   let img = document.createElement("img");
    //     img.setAttribute("src",arrManPic[i]);
    // li.appendChild(img);

    img.innerHTML = `${arrManPic[i]}`
    p.innerText = `${arrMeal[i]}`
  }

  count()

  function startCount() {
    t = setInterval(function () {
      count()
    }, 100)
    //  setInterval(function () { count() }, 300);
    document.getElementById('btn_start').setAttribute('disabled', true)

    document.getElementById('btn_end').removeAttribute('disabled')
  }

  function stopCount() {
    clearInterval(t)
    document.getElementById('btn_start').removeAttribute('disabled')

    document.getElementById('btn_end').setAttribute('disabled', true)
  }

  //更改btn 滑鼠移入移出的樣式，querySelector只能選一個，querySelectorAll可以多個(但因為她是產出陣列，必須給他有第幾個標示)
  // let btnColor = document.querySelectorAll('.btn');
  // let c;
  // for (let c = 0; c <= 1; c++) {
  //     btnColor[c].addEventListener('mousemove', function (event) {
  //         this.style.backgroundColor = '#f565ad';
  //     })
  //     btnColor[c].addEventListener('mouseout', function (event) {
  //         this.style.backgroundColor = '#ff97cb';
  //     })

  // }

  // 扣卷
  let haveNum = document.getElementById('haveNum')
  changeNum = 5 //目前changeNum 跟html的p 的數字都寫死 未來有後端資料庫紀錄可帶入
  document
    .getElementById('change')
    .addEventListener('click', function (event) {
      //跳出文字訊息
      // alert(this.innerText);

      //修改文字
      // this.innerText = '已兌換';
      // this.style.backgroundColor = '#c1c1c1';

      changeNum -= 1
      haveNum.innerText = changeNum
      // record.appendChild(newList+arrMeal[i])
      useTime()

      // 扣完卷 顏色變 按鈕不再執行
      if (changeNum == 0) {
        this.innerText = '已兌換'
        this.style.backgroundColor = '#c1c1c1'
        this.setAttribute('disabled', true)
      } else {
        this.innerText = '我要兌換'
        this.style.backgroundColor = '#52cfee'
      }
    })
  // 情境文字
  var j
  let loveArr = [
    '看了一場浪漫的電影',
    '漫步在雨中',
    '一起耍廢在沙發上',
    '享用美味的燭光晚餐',
    '在山上眺望夜景',
    '在沙灘散步，數著星星',
    '拿枕頭互打嘻鬧',
    '深情的擁抱',
    '一同分享一個布丁',
    '交換內心的小秘密',
    '十指緊扣著',
    '一起在家裡下廚',
    '在雨中親吻',
    '一起去兜風',
    '喝同一杯礦泉水',
    '蓋同一條棉被',
    '呼吸同一個空氣',
    '緊握這雙手',
    '深情凝視彼此',
  ]

  // 時間戳記模組

  function useTime() {
    let date = new Date()
    let year, month, day, hour, minute, second

    year = date.getFullYear()

    if (date.getMonth() + 1 < 10) {
      month = '0' + (date.getMonth() + 1)
    } else {
      month = '0' + (date.getMonth() + 1)
    }

    if (date.getDate() < 10) {
      day = '0' + date.getDate()
    } else {
      day = date.getDate()
    }

    if (date.getHours() < 10) {
      hour = '0' + date.getHours()
    } else {
      hour = date.getHours()
    }

    if (date.getMinutes() < 10) {
      minute = '0' + date.getMinutes()
    } else {
      minute = date.getMinutes()
    }
    if (date.getSeconds() < 10) {
      second = '0' + date.getSeconds()
    } else {
      second = date.getSeconds()
    }

    // let manTxt = document.getElementById('manTxt')
    let record = document.getElementById('record')
    let result = document.getElementById('txt')

    let j = Math.floor(Math.random() * 19)
    console.log(loveArr[j])
    // console.log(result) result是印出選擇的結果
    // result.style.color= '#ff0000';
    var newList = document.createElement('li')

    var textNode = document.createTextNode(
      `${year}-${month}-${day} ${hour}:${minute}:${second} \n 與 ${result.innerText} ${loveArr[j]}`,
    )
    // manTxt.innerText = '與' + String(result.innerText) + String(loveArr[j]);
    // var textNode = document.createTextNode(year+"-"+month+"-"+day +hour+":"+{minute}+":"+second+ )
    //  上述不能僅寫${result}他只會找到元素標籤 ，要寫 ${result.innerText}
    newList.appendChild(textNode)

    newList.style.borderBottom = '1px solid #e6e6e6'
    // record.appendChild(newList);

    //下面這兩行 將最新新增的移最前面
    var front = document.querySelectorAll('li')[0]
    record.insertBefore(newList, front)
  }
  //筆記  :要有模組化的概念  要多做甚麼 給他function  每次去傳回值
  //需要做的  .時間戳記   .文字結果