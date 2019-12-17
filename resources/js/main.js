const swiperEle = document.getElementById("swiper-wrapper");
const vizContainerEle = document.getElementById('visualziation-container');
let vizEle, vizHeight, vizWidth;

const languages = {
    names: ['JavaScript',
        'HTML/CSS',
        'SQL',
        'Python',
        'Java',
        'Bash/Shell',
        'C#',
        'PHP',
        'C++',
        'TypeScript',
        'C',
        'Ruby',
        'Go',
        'Assembly',
        'Swift',
        'Kotlin',
        'R',
        'VBA',
        'Objective-C',
        'Scala',
        'Rust',
        'Dart',
        'Elixir',
        'Clojure',
        'WebAssembly',
        'F#', 
        'Erlang'
    ],
    popularity: [
        67.8,
        63.5,
        54.4,
        41.7,
        41.1,
        36.6,
        31,
        26.4,
        23.5,
        21.2,
        20.6,
        8.4,
        8.2,
        6.7,
        6.6,
        6.4,
        5.8,
        5.5,
        4.8,
        3.8,
        3.2,
        1.9,
        1.4,
        1.4,
        1.2,
        0,
        0
    ],
    loved: [
        66.8,
        62.2,
        64.1,
        73.1,
        53.4,
        59.5,
        67,
        45.8,
        52,
        73.1,
        42.5,
        50.3,
        67.9,
        35.6,
        69.2,
        72.6,
        51.7,
        24.8,
        31.3,
        58.3,
        83.5,
        66.3,
        68.2,
        68.3,
        69.5,
        61.7,
        47.4
    ],
    dreaded: [
        33.2,
        37.8,
        35.9,
        26.9,
        46.6,
        40.5,
        33,
        54.2,
        48,
        26.9,
        57.5,
        49.7,
        32.1,
        64.4,
        30.8,
        27.4,
        48.3,
        75.2,
        68.7,
        41.7,
        16.5,
        33.7,
        31.8,
        31.7,
        30.5,
        38.3,
        52.6
    ],
    wanted: [
        17.8,
        6.6,
        7.6,
        25.7,
        8.3,
        4,
        7,
        3.5,
        9.1,
        14.6,
        5,
        4.4,
        15,
        3.1,
        5.8,
        11.1,
        4.9,
        0,
        0,
        4.3,
        9.5,
        3.8,
        3.4,
        2.2,
        8.9,
        3.3,
        2
    ]
}

const slides = [
    {
        html: `<div class="swiper-slide">
            <div class="top-full flex vertical-bottom horizontal-center" data-swiper-parallax="-300">
                <div class="title">Development Trends</div>
            </div>
            <div class="bottom-full flex vertical-top horizontal-center" data-swiper-parallax="-200">
                <div class="sub-title">
                Explore recent trends within the world of development defined b 90K software developers
                </div>
            </div>
        </div>`,
        viz: false
    },
    {
        html: `<div class="swiper-slide">
            <div class="top-full flex vertical-center horizontal-center" data-swiper-parallax="-300">
                <div class="sub-title">
                    Every year, Stack Overflow fields a <a href="https://insights.stackoverflow.com/survey/2019">survey</a> covering everything from developers’ favorite technologies to their job preferences. 
                    Here we'll dive into the results to discover major trends within Languages, Frameworks, Libraries, Databases, and more.
                </div>
            </div>
            <div class="bottom-full center" data-swiper-parallax="-300">
                <img height="80%" src="resources/img/favicon.png" alt"Stack Overflow Logo">
            </div>
        </div>`,
        viz: false
    },
    {
        html: `<div class="swiper-slide">
            <div class="top-full flex vertical-center horizontal-center" data-swiper-parallax="-300">
                <img height="60%" src="resources/img/languages.png" alt"Languages">
            </div>
            <div class="bottom-full center" data-swiper-parallax="-300">
                <div class="title">Languages</div>
                <div class="sub-title">
                    Let's dive into Languages! Here are the most popular languages today, along with the most loved and hated languages by developers.
                </div>
            </div>
        </div>`,
        viz: false
    },
    {
        html: `<div class="swiper-slide">
            <div class="top-full">
                <div class="title left" data-swiper-parallax="-300">Languages</div>
                <div class="sub-title left" data-swiper-parallax="-200">
                    Most Popular
                </div>
                <div class="description left" data-swiper-parallax="-100">
                    <p>For the 7th year in a row, JavaScript is the most commonly used programming language, but Python has risen in the ranks again.
                    This year, Python just edged out Java in overall ranking, much like it surpassed C# last year and PHP the year before. 
                    Python is the fastest-growing major programming language today.</p>
                </div>
            </div>
        </div>`,
        viz: {
            color: ['#54f686'],
            animation: true,
            animationDuration: 2000,
            tooltip: {},
            grid: {
                bottom: 80
            },
            xAxis: {
                data: languages.names,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    rotate: 45
                }
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            series: [{
                name: 'Popularity',
                type: 'bar',
                itemStyle: {
                    barBorderRadius: 4
                },
                data: languages.popularity
            }]
        }
    },
    {
        html: `<div class="swiper-slide">
            <div class="top-full">
                <div class="title left" data-swiper-parallax="-300">Languages</div>
                <div class="sub-title left" data-swiper-parallax="-200">
                    Most Loved
                </div>
                <div class="description left" data-swiper-parallax="-100">
                    <p>For the fourth year in a row, Rust is the most loved programming language among our respondents, followed close behind by Python, 
                    the fastest-growing major language today. This means that proportionally, more developers want to continue working with these than other languages.</p>
                </div>
            </div>
        </div>`,
        viz: {
            color: ['#ff3f3f'],
            animation: true,
            animationDuration: 2000,
            tooltip: {},
            grid: {
                bottom: 80
            },
            xAxis: {
                data: languages.names,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    rotate: 45
                }
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            series: [{
                name: 'Loved',
                type: 'bar',
                itemStyle: {
                    barBorderRadius: 4
                },
                data: languages.loved
            }]
        }
    },
    {
        html: `<div class="swiper-slide">
            <div class="top-full">
                <div class="title left" data-swiper-parallax="-300">Languages</div>
                <div class="sub-title left" data-swiper-parallax="-200">
                    Most Dreaded
                </div>
                <div class="description left" data-swiper-parallax="-100">
                    <p>VBA and Objective-C rank as the most dreaded languages this year. Most dreaded means that a high percentage of developers who are currently using 
                    these technologies express no interest in continuing to do so.</p>
                </div>
            </div>
        </div>`,
        viz: {
            color: ['#40a6ff'],
            animation: true,
            animationDuration: 2000,
            tooltip: {},
            grid: {
                bottom: 80
            },
            xAxis: {
                data: languages.names,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    rotate: 45
                }
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            series: [{
                name: 'Dreaded',
                type: 'bar',
                itemStyle: {
                    barBorderRadius: 4
                },
                data: languages.dreaded
            }]
        }
    },
    {
        html: `<div class="swiper-slide">
            <div class="top-full">
                <div class="title left" data-swiper-parallax="-300">Languages</div>
                <div class="sub-title left" data-swiper-parallax="-200">
                    Most Wanted
                </div>
                <div class="description left" data-swiper-parallax="-100">
                    <p>Python is the most wanted language for the third year in a row, meaning that developers who do not yet use it say they want to learn it.</p>
                </div>
            </div>
        </div>`,
        viz: {
            color: ['#54f686'],
            animation: true,
            animationDuration: 2000,
            tooltip: {},
            grid: {
                bottom: 80
            },
            xAxis: {
                data: languages.names,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    rotate: 45
                }
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            series: [{
                name: 'Wanted',
                type: 'bar',
                itemStyle: {
                    barBorderRadius: 4
                },
                data: languages.wanted
            }]
        }
    },
    {
        html: `<div class="swiper-slide">
            <div class="top-full flex vertical-center horizontal-center" data-swiper-parallax="-300">
                <img height="80%" src="resources/img/frameworks.png" alt"Frameworks">
            </div>
            <div class="bottom-full center" data-swiper-parallax="-300">
                <div class="title">Frameworks</div>
                <div class="sub-title">
                    Now onto Frameworks! Here are the most popular frameworks and how developers feel about them.
                </div>
            </div>
        </div>`,
        viz: false
    },
    // 1. Languages (done)
    // 2. Frameworks
    // 3. Libraries / Tools
    // 4. Databases
    // 5. Platforms
    // 6. Dev Environment
    // 7. OS
    // 8. Salary
];
let slidesEle = ''

slides.forEach(function (slide) {
    slidesEle += slide.html
});

swiperEle.innerHTML = slidesEle;

const swiper = new Swiper('.swiper-container', {
    speed: 800,
    parallax: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 5,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

swiper.on('slideChange', function () {
    const idx = this.activeIndex;

    if (slides[idx].viz) {
        vizEle.style.visibility = 'visible';
        vizEle.style.opacity = 1;
        vizEle.style.height = vizHeight + 'px';
        vizEle.style.width = '100%';
        updateViz(idx)
    } else {
        vizEle.style.visibility = 'hidden';
        vizEle.style.opacity = 0;
    }
});

function updateViz(idx) {
    const myChart = echarts.init(vizEle);
    myChart.setOption(slides[idx].viz);
}

function initialize() {
    vizHeight = document.body.clientHeight / 2;
    vizWidth = document.body.clientWidth;
    vizContainerEle.innerHTML = `
        <div class="visualziation" id="visualziation"></div>
    `;
    vizEle = document.getElementById('visualziation');
}