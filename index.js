var data = [
    {"sectionID":"S1",
     "subName":"fashion",
     "sectionName":"FASHION",
     "sectionUrl":"https://www.hindustantimes.com/lifestyle/fashion/cannes-2022-looking-back-at-the-worst-fashion-moments-101652506529545.html",
     "dataList" : [
                      {"title":"Actress Srinidhi Shetty in action.","Advt":"","AdImg":""},
                      {"title":"Story behind the movie is awesome which was a mother character.","Advt":"","AdImg":""},
                      {"title":"Kiss and Tell - Watch this full video now.","Advt":"Add : Zee Zest","AdImg":"zee.jpg"},
                      {"title":"Eid outfit inspo from Bollywood.","Advt":"Click to see  Iftar bash","AdImg":"copy.png"},
                      {"title":"Most Popular Actress of the year.","Advt":"","AdImg":""}
                  ]
    },
    
    {"sectionID":"S2",
    "subName":"travel",
    "sectionName":"TRAVEL",
    "sectionUrl":"https://timesofindia.indiatimes.com/travel/travel-news/myanmar-to-start-accepting-tourist-e-visa-applications-travel-still-not-advised/as91543992.cms",
    "dataList" : [
                      {"title":"Thigs to do in Spiti this Summer.","Advt":"","AdImg":""},
                      {"title":"A look at Indias top 5 most visited heritage sites.","Advt":"","AdImg":""},
                      {"title":"A beginner's 5 Day itinerary to Bali.","Advt":"Click here for more details","AdImg":"trip.png"},
                      {"title":"How to travel in a train in India with your pet?.","Advt":"","AdImg":""},
                      {"title":"Check your destination's COVID-19 situation before traveling.","Advt":"","AdImg":""}
                  ]
    },

    {"sectionID":"S3",
    "subName":"beauty",
    "sectionName":"BEAUTY",
    "sectionUrl":"https://www.hindustantimes.com/lifestyle/fashion/summer-skincare-essentials-dermats-share-their-expert-beauty-tips-101652239236007.html",
    "dataList" : [
                      {"title":"Korean lip balm recipe for pink lips..","Advt":"","AdImg":""},
                      {"title":"Best hair experiments of BTS'.","Advt":"See here for more...","AdImg":"copy.png"},
                      {"title":"Unsold cars for in sale.Check it..","Advt":"Ad: Car Deals | search Ads","AdImg":"car.jpg"},
                      {"title":"Skin care routine to beat summer acne..","Advt":"","AdImg":""},
                      {"title":"10 easy beauty tips that make a big difference.","Advt":"","AdImg":""}
                  ]
    },

    {"sectionID":"S4",
    "subName":"books",
    "sectionName":"BOOKS",
    "sectionUrl":"https://www.newindianexpress.com/good-news/2022/may/12/childrens-delight-new-look-library-to-revive-love-for-books-in-indias-easternmost-tip-2452738.html",
    "dataList" : [
                      {"title":"popular books of the past year","Advt":"","AdImg":""},
                      {"title":"The Internet isn’t the only reason.","Advt":"See here is why?...","AdImg":"copy.png"},
                      {"title":"Books grow on trees in Turkish city.","Advt":"Ad: Book Deals","AdImg":"bookDeal.jpg"},
                      {"title":"Here are the 10 best-selling books of all time..","Advt":"","AdImg":""},
                      {"title":"New-look library to revive love for books in India's easternmos.","Advt":"","AdImg":""}
                  ]
    }
  ];

  var dataLong = [
      {"subTitle":"Ukrain live: No Civilian Educations for 3rd day", "subImg":"ukrain.jpg"},
      {"subTitle":"Explained: The wide yorker and its growing popularity in T20", "subImg":"T20.png"},
      {"subTitle":"Live: Cops submit report to amit shah in Jahangir case", "subImg":"cop.jpg"},
      {"subTitle":"Tpuram: Work of 20 smart roads may be completed by May 15", "subImg":"road.jpg"},
      {"subTitle":"This IPL season, win exiting prizes with CRED", "subImg":"IPL.png"},
      {"subTitle":"Make this cricket sessioon epic with croma TVs", "subImg":"cricket.jpg"},
      {"subTitle":"KSRTC begins salary disbusral", "subImg":"ksrtc.jpg"},
      {"subTitle":"How Lankas ecanomy united those deeply divided for decades.", "subImg":"lanka.jpg"},
      {"subTitle":"Organisers affavidt must for religious processions:Yogi", "subImg":"yogi.jpg"},
      {"subTitle":"Tiruvananthapuram:Youth held for abusing minor girl.", "subImg":"kerela.jpg"},
      {"subTitle":"Killings my comunal forces are not political murders:CPI", "subImg":"politics.jpg"},
      {"subTitle":"The freshest summer offers on best selling gagets", "subImg":"sale.jpg"},
      {"subTitle":"Kerela HC verdicts on actor Dileeps petition today.", "subImg":"court.jpg"},
      {"subTitle":"The love and hate map of India -- Week II", "subImg":"india.png"},
      {"subTitle":"Time professionals Learning & IIM Trichy partner.", "subImg":"IIM.jpg"},
      {"subTitle":"KSRTC begins salary disbusral", "subImg":"ksrtc.jpg"},
      {"subTitle":"Make this cricket sessioon epic with croma TVs", "subImg":"cricket.jpg"},
      {"subTitle":"KSRTC begins salary disbusral", "subImg":"ksrtc.jpg"},
      {"subTitle":"How Lankas ecanomy united those deeply divided for decades.", "subImg":"lanka.jpg"}
  ]

  setTimeout(function(){

        /* **************************   Code in Vanilla  Javascript    ********************************* */
       var myContent = document.querySelector('.subgal1');
       var showmyHtml = data.map((obj,index) => {

        if(obj.subName == "fashion"){
            return `<div class="divHeader"><div class="post">LIFESTYLE ></div></div>
                <div class="tile wide ${obj.subName}" id="${obj.subName}">
                <div class="post">${obj.sectionName}</div>
                <div class="${obj.subName}Img"></div>
                <div class="${obj.subName}List">
                    <div class="post">${obj.dataList[0].title}</div>
                    <div class="post">${obj.dataList[1].title}.</div>
                    <div class="post">${obj.dataList[2].title}.
                        <span style="float: left;color: #cfcfcf;">${obj.dataList[2].Advt}</span>
                        <img style="float: right; width: 20px;" alt="*" src="images/${obj.dataList[2].AdImg}">
                    </div>
                    <div class="post">Eid outfit inspo from Bollywood.
                        <span style="float: left;color: #cfcfcf;">${obj.dataList[3].Advt}</span>
                        <img style="float: right; width: 20px;" alt="*" src="images/${obj.dataList[3].AdImg}">
                    </div>
                    <div class="post">${obj.dataList[4].title}</div>
                </div>
                <div class="seeAll"><a>See All</a></div>
            </div>`
        }

        if(obj.subName == "travel"){
            return `<div class="tile wide ${obj.subName}" id="${obj.subName}">
                    <div class="post">${obj.sectionName}</div>
                    <div class="${obj.subName}Img"></div>
                    <div class="${obj.subName}List">
                    <div class="post">${obj.dataList[0].title}</div>
                    <div class="post">${obj.dataList[1].title}.</div>
                    <div class="post">${obj.dataList[2].title}.
                        <span style="float: left;color: #cfcfcf;">${obj.dataList[2].Advt}</span>
                        <img style="float: right; width: 20px;" alt="*" src="images/${obj.dataList[2].AdImg}">
                    </div>
                    <div class="post">${obj.dataList[3].title}.</div>
                    <div class="post">${obj.dataList[4].title}</div>
                </div>
                <div class="seeAll"><a>See All</a></div>
            </div>`
        }

        if(obj.subName == "beauty"){
            return `<div class="tile wide ${obj.subName}" id="${obj.subName}">
                    <div class="post">${obj.sectionName}</div>
                    <div class="${obj.subName}Img"></div>
                    <div class="${obj.subName}List">
                    <div class="post">${obj.dataList[0].title}</div>
                    <div class="post">${obj.dataList[1].title}.
                        <span style="float: left;color: #cfcfcf;">${obj.dataList[1].Advt}</span>
                        <img style="float: right; width: 20px;" alt="*" src="images/${obj.dataList[1].AdImg}">
                    </div>
                    <div class="post">${obj.dataList[2].title}.
                        <span style="float: left;color: #cfcfcf;">${obj.dataList[2].Advt}</span>
                        <img style="float: right; width: 20px;" alt="*" src="images/${obj.dataList[2].AdImg}">
                    </div>
                    <div class="post">${obj.dataList[3].title}</div>
                    <div class="post">${obj.dataList[4].title}</div>
                </div>
                <div class="seeAll"><a>See All</a></div>
            </div>`
        }

        if(obj.subName == "books"){
            return `<div class="tile wide ${obj.subName}" id="${obj.subName}">
                    <div class="post">${obj.sectionName}</div>
                    <div class="${obj.subName}Img"></div>
                    <div class="${obj.subName}List">
                    <div class="post">${obj.dataList[0].title}</div>
                    <div class="post">${obj.dataList[1].title}.
                        <span style="float: left;color: #cfcfcf;">${obj.dataList[1].Advt}</span>
                        <img style="float: right; width: 20px;" alt="*" src="images/${obj.dataList[1].AdImg}">
                    </div>
                    <div class="post">${obj.dataList[2].title}.
                        <span style="float: left;color: #cfcfcf;">${obj.dataList[2].Advt}</span>
                        <img style="float: right; width: 20px;" alt="*" src="images/${obj.dataList[2].AdImg}">
                    </div>
                    <div class="post">${obj.dataList[3].title}</div>
                    <div class="post">${obj.dataList[4].title}</div>
                </div>
                <div class="seeAll"><a>See All</a></div>
            </div>`
        }

       }).join('')

       myContent.innerHTML = showmyHtml;



       var myContent2 = document.querySelector('.long');
       var showmyHtml2 = dataLong.map((obj1,index1) => { 
        
        return `<div class="division">            
                <div class="post">${obj1.subTitle}</div>
                <div class="smallImg">
                    <img src="images/${obj1.subImg}"/>
                </div>
            </div>`

       }).join('')

       myContent2.innerHTML = showmyHtml2;

        /* **************************   Code in Vanilla  Javascript    ********************************* */

  },500);  