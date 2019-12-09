const swiperEle = document.getElementById("swiper-wrapper");
const vizContainerEle = document.getElementById('visualziation-container');
let vizEle, vizHeight, vizWidth;

const slides = [
    {
        title: 'Developer Suvery 2019',
        subtitle: 'Trends within Software Development defined by 90K developers.',
        description: 'Every year, Stack Overflow fields a suvery covering everything from developers’ favorite technologies to their job preferences. This is the 9th consecutive year.',
        viz: false
    },
    // 1. Languages
    {
        title: 'Languages',
        subtitle: 'Most Popular',
        description: 'Rust is King',
        viz: {
            color: ['#54f686'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Loved',
                type: 'bar',
                data: [83.5, 73.1, 73.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
    {
        title: 'Languages',
        subtitle: 'Most Loved',
        description: 'description',
        viz: {
            color: ['#ff3f3f'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Dreaded',
                type: 'bar',
                data: [43.5, 73.1, 73.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
    {
        title: 'Languages',
        subtitle: 'Most Dreaded',
        description: 'description',
        viz: {
            color: ['#40a6ff'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Wanted',
                type: 'bar',
                data: [23.5, 73.1, 73.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
    {
        title: 'Languages',
        subtitle: 'Most Wanted',
        description: 'description',
        viz: {
            color: ['#40a6ff'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Wanted',
                type: 'bar',
                data: [23.5, 73.1, 93.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
    // 2. Frameworks
    {
        title: 'Frameworks',
        subtitle: 'Most Popular',
        description: 'Rust is King',
        viz: {
            color: ['#54f686'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Loved',
                type: 'bar',
                data: [83.5, 73.1, 73.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
    {
        title: 'Frameworks',
        subtitle: 'Most Loved',
        description: 'description',
        viz: {
            color: ['#ff3f3f'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Dreaded',
                type: 'bar',
                data: [43.5, 73.1, 73.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
    {
        title: 'Frameworks',
        subtitle: 'Most Dreaded',
        description: 'description',
        viz: {
            color: ['#40a6ff'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Wanted',
                type: 'bar',
                data: [23.5, 73.1, 73.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
    {
        title: 'Frameworks',
        subtitle: 'Most Wanted',
        description: 'description',
        viz: {
            color: ['#40a6ff'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Wanted',
                type: 'bar',
                data: [23.5, 73.1, 93.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
    // 3. Libraries / Tools
    {
        title: 'Libraries / Tools',
        subtitle: 'Most Popular',
        description: 'Rust is King',
        viz: {
            color: ['#54f686'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Loved',
                type: 'bar',
                data: [83.5, 73.1, 73.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
    {
        title: 'Libraries / Tools',
        subtitle: 'Most Loved',
        description: 'description',
        viz: {
            color: ['#ff3f3f'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Dreaded',
                type: 'bar',
                data: [43.5, 73.1, 73.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
    {
        title: 'Libraries / Tools',
        subtitle: 'Most Dreaded',
        description: 'description',
        viz: {
            color: ['#40a6ff'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Wanted',
                type: 'bar',
                data: [23.5, 73.1, 73.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
    {
        title: 'Libraries / Tools',
        subtitle: 'Most Wanted',
        description: 'description',
        viz: {
            color: ['#40a6ff'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Wanted',
                type: 'bar',
                data: [23.5, 73.1, 93.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
    // 4. Databases
    {
        title: 'Databases',
        subtitle: 'Most Popular',
        description: 'Rust is King',
        viz: {
            color: ['#54f686'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Loved',
                type: 'bar',
                data: [83.5, 73.1, 73.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
    {
        title: 'Databases',
        subtitle: 'Most Loved',
        description: 'description',
        viz: {
            color: ['#ff3f3f'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Dreaded',
                type: 'bar',
                data: [43.5, 73.1, 73.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
    {
        title: 'Databases',
        subtitle: 'Most Dreaded',
        description: 'description',
        viz: {
            color: ['#40a6ff'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Wanted',
                type: 'bar',
                data: [23.5, 73.1, 73.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
    {
        title: 'Databases',
        subtitle: 'Most Wanted',
        description: 'description',
        viz: {
            color: ['#40a6ff'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Wanted',
                type: 'bar',
                data: [23.5, 73.1, 93.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
    // 5. Platforms
    {
        title: 'Platforms',
        subtitle: 'Most Popular',
        description: 'Rust is King',
        viz: {
            color: ['#54f686'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Loved',
                type: 'bar',
                data: [83.5, 73.1, 73.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
    {
        title: 'Platforms',
        subtitle: 'Most Loved',
        description: 'description',
        viz: {
            color: ['#ff3f3f'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Dreaded',
                type: 'bar',
                data: [43.5, 73.1, 73.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
    {
        title: 'Platforms',
        subtitle: 'Most Dreaded',
        description: 'description',
        viz: {
            color: ['#40a6ff'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Wanted',
                type: 'bar',
                data: [23.5, 73.1, 73.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
    {
        title: 'Platforms',
        subtitle: 'Most Wanted',
        description: 'description',
        viz: {
            color: ['#40a6ff'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Wanted',
                type: 'bar',
                data: [23.5, 73.1, 93.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
    {
        title: 'Dev Environments',
        subtitle: 'All vs Web vs Mobile vs SRE/DevOps',
        description: 'Include toggle button to jump between ',
        viz: {
            color: ['#40a6ff'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Wanted',
                type: 'bar',
                data: [23.5, 73.1, 93.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
    {
        title: 'Primary OS',
        subtitle: '',
        description: '',
        viz: {
            color: ['#40a6ff'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Wanted',
                type: 'bar',
                data: [53.5, 73.1, 93.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
    {
        title: 'Salary',
        subtitle: 'Languages',
        description: '',
        viz: {
            color: ['#40a6ff'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Wanted',
                type: 'bar',
                data: [53.5, 73.1, 93.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
    {
        title: 'Salary',
        subtitle: 'Developer Type',
        description: '',
        viz: {
            color: ['#40a6ff'],
            tooltip: {},
            grid: {
                left: 150
            },
            yAxis: {
                data: ['Rust', 'Python', 'TypeScript', 'Kotlin', 'WebAssembly', 'Swift', 'Swift', 'Clojure', 'Elixir', 'Go', 'C#', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'F#', 'Bash/Shell/PowerShell', 'Scala', 'Java', 'C++', 'R', 'Ruby', 'Erlang', 'PHP', 'C', 'Assembly'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [{
                name: 'Wanted',
                type: 'bar',
                data: [53.5, 73.1, 93.1, 72.6, 69.5, 69.2, 68.3, 68.2, 67.9, 67.0, 66.8, 66.3, 64.1, 62.2, 61.7, 59.5, 58.3, 53.4, 52.0, 51.7, 50.3, 47.4, 45.8, 42.5, 35.6]
            }]
        }
    },
];
let slidesEle = ''

slides.forEach(function (slide) {
    slidesEle += `<div class="swiper-slide">
                    <div class="title" data-swiper-parallax="-300">` + slide.title + `</div>
                    <div class="subtitle" data-swiper-parallax="-200">` + slide.subtitle + `</div>
                    <div class="text" data-swiper-parallax="-100">
                        <p>` + slide.description + `</p>
                    </div>
                </div>`
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
        vizEle.style.width = vizWidth + 'px';
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
    vizHeight = document.body.clientHeight / 1.25;
    vizWidth = document.body.clientWidth / 2;
    vizContainerEle.innerHTML = `
        <div class="visualziation" id="visualziation"></div>
    `;
    vizEle = document.getElementById('visualziation');
}