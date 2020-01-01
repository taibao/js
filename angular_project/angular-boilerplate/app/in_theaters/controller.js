(function(angular){
  'use strict';

  var data = [
        {
            "rating": {
                "max": 10,
                "average": 6.3,
                "details": {
                    "1": 133.0,
                    "3": 1018.0,
                    "2": 376.0,
                    "5": 194.0,
                    "4": 607.0
                },
                "stars": "35",
                "min": 0
            },
            "genres": [
                "剧情",
                "喜剧",
                "爱情"
            ],
            "title": "宠爱",
            "casts": [
                {
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1365451897.03.jpg",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1365451897.03.jpg",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1365451897.03.jpg"
                    },
                    "name_en": "Hewei Yu",
                    "name": "于和伟",
                    "alt": "https://movie.douban.com/celebrity/1313742/",
                    "id": "1313742"
                },
                {
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513308156.39.jpg",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513308156.39.jpg",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513308156.39.jpg"
                    },
                    "name_en": "Leo Wu",
                    "name": "吴磊",
                    "alt": "https://movie.douban.com/celebrity/1276150/",
                    "id": "1276150"
                },
                {
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1537164285.33.jpg",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1537164285.33.jpg",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1537164285.33.jpg"
                    },
                    "name_en": "Zifeng Zhang",
                    "name": "张子枫",
                    "alt": "https://movie.douban.com/celebrity/1274254/",
                    "id": "1274254"
                }
            ],
            "durations": [
                "108分钟"
            ],
            "collect_count": 26920,
            "mainland_pubdate": "2019-12-31",
            "has_video": false,
            "original_title": "宠爱",
            "subtype": "movie",
            "directors": [
                {
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1382696083.12.jpg",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1382696083.12.jpg",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1382696083.12.jpg"
                    },
                    "name_en": "Larry Yang",
                    "name": "杨子",
                    "alt": "https://movie.douban.com/celebrity/1335623/",
                    "id": "1335623"
                }
            ],
            "pubdates": [
                "2019-12-31(中国大陆)"
            ],
            "year": "2019",
            "images": {
                "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2577327922.jpg",
                "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2577327922.jpg",
                "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2577327922.jpg"
            },
            "alt": "https://movie.douban.com/subject/33417046/",
            "id": "33417046"
        },
        {
            "rating": {
                "max": 10,
                "average": 9.5,
                "details": {
                    "1": 684.0,
                    "3": 14871.0,
                    "2": 1200.0,
                    "5": 517465.0,
                    "4": 114281.0
                },
                "stars": "50",
                "min": 0
            },
            "genres": [
                "剧情",
                "喜剧",
                "爱情"
            ],
            "title": "美丽人生",
            "casts": [
                {
                    "avatars": {
                        "small": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26764.jpg",
                        "large": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26764.jpg",
                        "medium": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26764.jpg"
                    },
                    "name_en": "Roberto Benigni",
                    "name": "罗伯托·贝尼尼",
                    "alt": "https://movie.douban.com/celebrity/1041004/",
                    "id": "1041004"
                },
                {
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9548.jpg",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9548.jpg",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9548.jpg"
                    },
                    "name_en": "Nicoletta Braschi",
                    "name": "尼可莱塔·布拉斯基",
                    "alt": "https://movie.douban.com/celebrity/1000375/",
                    "id": "1000375"
                },
                {
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45590.jpg",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45590.jpg",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45590.jpg"
                    },
                    "name_en": "Giorgio Cantarini",
                    "name": "乔治·坎塔里尼",
                    "alt": "https://movie.douban.com/celebrity/1000368/",
                    "id": "1000368"
                }
            ],
            "durations": [
                "116分钟",
                "125分钟(加长版)"
            ],
            "collect_count": 1100867,
            "mainland_pubdate": "2020-01-03",
            "has_video": true,
            "original_title": "La vita è bella",
            "subtype": "movie",
            "directors": [
                {
                    "avatars": {
                        "small": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26764.jpg",
                        "large": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26764.jpg",
                        "medium": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26764.jpg"
                    },
                    "name_en": "Roberto Benigni",
                    "name": "罗伯托·贝尼尼",
                    "alt": "https://movie.douban.com/celebrity/1041004/",
                    "id": "1041004"
                }
            ],
            "pubdates": [
                "1997-12-20(意大利)",
                "2020-01-03(中国大陆)"
            ],
            "year": "1997",
            "images": {
                "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2578474613.jpg",
                "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2578474613.jpg",
                "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2578474613.jpg"
            },
            "alt": "https://movie.douban.com/subject/1292063/",
            "id": "1292063"
        },
        {
            "rating": {
                "max": 10,
                "average": 6.3,
                "details": {
                    "1": 61.0,
                    "3": 409.0,
                    "2": 202.0,
                    "5": 104.0,
                    "4": 271.0
                },
                "stars": "35",
                "min": 0
            },
            "genres": [
                "剧情",
                "爱情"
            ],
            "title": "亲爱的新年好",
            "casts": [
                {
                    "avatars": {
                        "small": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1460361929.34.jpg",
                        "large": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1460361929.34.jpg",
                        "medium": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1460361929.34.jpg"
                    },
                    "name_en": "Baihe Bai",
                    "name": "白百何",
                    "alt": "https://movie.douban.com/celebrity/1275542/",
                    "id": "1275542"
                },
                {
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1537164285.33.jpg",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1537164285.33.jpg",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1537164285.33.jpg"
                    },
                    "name_en": "Zifeng Zhang",
                    "name": "张子枫",
                    "alt": "https://movie.douban.com/celebrity/1274254/",
                    "id": "1274254"
                },
                {
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1550762176.27.jpg",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1550762176.27.jpg",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1550762176.27.jpg"
                    },
                    "name_en": "Daxun Wei",
                    "name": "魏大勋",
                    "alt": "https://movie.douban.com/celebrity/1314064/",
                    "id": "1314064"
                }
            ],
            "durations": [
                "110分钟"
            ],
            "collect_count": 8799,
            "mainland_pubdate": "2019-12-31",
            "has_video": false,
            "original_title": "亲爱的新年好",
            "subtype": "movie",
            "directors": [
                {
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1532590468.85.jpg",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1532590468.85.jpg",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1532590468.85.jpg"
                    },
                    "name_en": "Youlun Peng",
                    "name": "彭宥纶",
                    "alt": "https://movie.douban.com/celebrity/1346292/",
                    "id": "1346292"
                }
            ],
            "pubdates": [
                "2019-12-31(中国大陆)"
            ],
            "year": "2019",
            "images": {
                "small": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2578723424.jpg",
                "large": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2578723424.jpg",
                "medium": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2578723424.jpg"
            },
            "alt": "https://movie.douban.com/subject/34460763/",
            "id": "34460763"
        }
    ];
  //创建正在热映模块
  var module =  angular.module('moviecat.in_theaters', ['ngRoute']);
 //配置模块的路由
  module.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/in_theaters', {
      templateUrl: 'in_theaters/view.html',
      controller: 'InTheatersCtroller'
    });
  }])

  module.controller('InTheatersCtroller', ['$scope',function($scope) {
    //控制器的编写 1：设计暴露数据 2：设计暴露行为
    $scope.subjects = data;


  }]);
})(angular)
