$(function () {
//    绑定地图
    $.get('../data/geo-json/chengdushi.json', function (json) {
        $.get('../data/data/center-top.json', function (data) {
            var count = 0;
            echarts.registerMap('chengdushi', json);
            var chart = echarts.init(document.getElementById('map'), 'customed');
            chart.setOption({
                // tooltip: {
                //     show: true,
                //     alwaysShowContent: false
                // },
                series: [{
                    type: 'map3D',
                    map: 'chengdushi',
                    top: '0',
                    label: {
                        show: true,
                        textStyle: {
                            fontSize: 10,
                            fontWeight: "bolder"
                        },
                        formatter: function (params) {
                            return [
                                '' + params.data.name + '',
                                '大户：' + params.data.value.dahu + '',
                                '备案车辆：' + params.data.value.beiancheliang + ''
                            ].join('\n');
                        }
                    },
                    itemStyle: {
                        borderWidth: 1,
                        borderColor: "rgb(0,186,255)",
                        color: 'rgb(0,82,133)'
                    },
                    data: data
                }]
            });
            $(window).resize(function (evt) {
                chart.resize();
            });
        })
    });
//    绑定成都市柴油货车保有量分析
    $.get('../data/data/center-bottom.json', function (json) {
        var chart = echarts.init(document.getElementById('baoyouliang'), 'customed');
        chart.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {}
            },
            legend: {
                textStyle: {
                    color: '#fff'
                },
                data: ['国Ⅰ', '国Ⅱ', '国Ⅲ', '国Ⅳ', '国Ⅴ']
            },
            grid: {
                left: '1%',
                right: '4%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    boundaryGap: true,
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '国Ⅰ',
                    type: 'line',
                    itemStyle: {
                        color: 'rgb(255,0,0)'
                    },
                    lineStyle: {
                        color: 'rgb(255,0,0)'
                    },
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgb(255,0,0)' // 0% 处的颜色
                            }, {
                                offset: 0.5, color: 'rgba(255,0,0,0.7)' // 100% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(0,0,0,0)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    },
                    smooth: true,
                    data: json[0]
                },
                {
                    name: '国Ⅱ',
                    type: 'line',
                    itemStyle: {
                        color: 'rgb(255,235,0)'
                    },
                    lineStyle: {
                        color: 'rgb(255,235,0)'
                    },
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgb(255,235,0)' // 0% 处的颜色
                            }, {
                                offset: 0.5, color: 'rgba(255,235,0,0.7)' // 100% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(0,0,0,0)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    },
                    smooth: true,
                    data: json[1]
                },
                {
                    name: '国Ⅲ',
                    type: 'line',
                    itemStyle: {
                        color: 'rgb(0,255,30)'
                    },
                    lineStyle: {
                        color: 'rgb(0,255,30)'
                    },
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgb(0,255,30)' // 0% 处的颜色
                            }, {
                                offset: 0.5, color: 'rgba(0,255,30,0.7)' // 100% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(0,0,0,0)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    },
                    smooth: true,
                    data: json[2]
                },
                {
                    name: '国Ⅳ',
                    type: 'line',
                    itemStyle: {
                        color: 'rgb(0,142,255)'
                    },
                    lineStyle: {
                        color: 'rgb(0,142,255)'
                    },
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgb(0,142,255)' // 0% 处的颜色
                            }, {
                                offset: 0.5, color: 'rgba(0,142,255,0.7)' // 100% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(0,0,0,0)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    },
                    smooth: true,
                    data: json[3]
                },
                {
                    name: '国Ⅴ',
                    type: 'line',
                    itemStyle: {
                        color: 'rgb(255,108,0)'
                    },
                    lineStyle: {
                        color: 'rgb(255,108,0)'
                    },
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgb(255,108,0)' // 0% 处的颜色
                            }, {
                                offset: 0.5, color: 'rgba(255,108,0,0.7)' // 100% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(0,0,0,0)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    },
                    smooth: true,
                    data: json[4]
                }
            ]
        });
        $(window).resize(function (evt) {
            chart.resize();
        });
    });
//    页面左侧，中间一栏，上面的图
    $.get('../data/data/left-middle-1.json', function (json) {
        var chart = echarts.init(document.getElementById('left-middle-top'), 'customed');
        chart.setOption({
            // legend: {
            //     orient: 'vertical',
            //     right: 0,
            //     textStyle: {
            //         color: '#fff'
            //     },
            //     data: ['农林牧渔', '冶金矿产', '石油化工', '物流运输', '环保绿化', '其他']
            // },
            tooltip: {
                show: true
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    label: {
                        show: false
                    },
                    radius: ['60%', '80%'],
                    data: json
                },
                {
                    name: '',
                    type: 'pie',
                    label: {
                        show: true,
                        position: 'center',
                        color: '#fff',
                        formatter: '{b}\r\n\r\n{c}',
                        fontSize: 14,
                        fontFamily: 'LED'
                    },
                    itemStyle: {
                        color: 'transparent'
                    },
                    radius: ['0%', '55%'],
                    data: [
                        {
                            name: '大户总数',
                            value: (function () {
                                var sum = 0;
                                for (var i = 0; i < json.length; i++) {
                                    sum += json[i].value;
                                }
                                return sum;
                            })()
                        }
                    ]
                }
            ]
        });
        $(window).resize(function (evt) {
            chart.resize();
        });
    });
//    页面左侧，中间一栏，下面的图
    $.get('../data/data/left-middle-2.json', function (json) {
        var chart = echarts.init(document.getElementById('left-middle-bottom'), 'customed');
        chart.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['自有车辆', '租用车辆'],
                textStyle: {
                    color: '#fff'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                type: 'category',
                data: ['农林牧渔', '冶金矿产', '石油化工', '物流运输', '环保绿化', '其他'],
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [
                {
                    name: '自有车辆',
                    type: 'bar',
                    barWidth: '50%',
                    stack: '总量',
                    label: {
                        show: true,
                        position: 'insideRight'
                    },
                    data: json.ziyou
                },
                {
                    name: '租用车辆',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        show: true,
                        position: 'insideRight'
                    },
                    data: json.chuzu
                }
            ]
        });
        $(window).resize(function (evt) {
            chart.resize();
        });
    });
//    页面左侧，下面一栏，下面的图
    $.get('../data/data/center-bottom.json', function (json) {
        var chart = echarts.init(document.getElementById('left-bottom-bottom'), 'customed');
        chart.setOption({
            grid: {
                top: '9%',
                left: '1%',
                right: '4%',
                bottom: '2%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    boundaryGap: true,
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '',
                    type: 'line',
                    lineStyle: {
                        color: 'rgb(1,239,247)'
                    },
                    areaStyle: {
                        // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgb(1,239,247)' // 0% 处的颜色
                            }, {
                                offset: 0.5, color: 'rgba(1,239,247,0.7)' // 100% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(0,0,0,0)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    },
                    smooth: true,
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            color: '#fff'
                        }
                    },
                    data: json[0]
                }
            ]
        });
        $(window).resize(function (evt) {
            chart.resize();
        });
    });
//    页面右侧，中间一栏，上面的图
    $.get('../data/data/right-middle-top.json', function (json) {
        var chart = echarts.init(document.getElementById('right-middle-top'), 'customed');
        chart.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {}
            },
            grid: {
                left: '1%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },
            yAxis: [
                {
                    type: 'category',
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    boundaryGap: true,
                    data: ['国Ⅲ以前', '国Ⅲ', '国Ⅳ', '国Ⅴ', '国Ⅵ']
                }
            ],
            xAxis: [
                {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '',
                    type: 'bar',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#188df0'},
                                {offset: 0.5, color: '#188df0'},
                                {offset: 1, color: '#83bff6'}
                            ]
                        ),
                        barBorderRadius: 10
                    },
                    label: {
                        show: true,
                        position: 'right',
                        color: '#fff'
                    },
                    areaStyle: {},
                    smooth: true,
                    data: json
                }
            ]
        });
        $(window).resize(function (evt) {
            chart.resize();
        });
    });
//    页面右侧，中间一栏，下面的图
    $.get('../data/data/right-middle-bottom.json', function (json) {
        var chart = echarts.init(document.getElementById('right-middle-bottom'), 'customed');
        chart.setOption({
            // legend: {
            //     orient: 'vertical',
            //     right: 0,
            //     textStyle: {
            //         color: '#fff'
            //     },
            //     data: ['平板车', '箱车', '罐车', '槽车', '半挂车', '全挂车']
            // },
            tooltip: {
                show: true
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    label: {
                        show: false
                    },
                    radius: ['60%', '80%'],
                    data: json
                },
                {
                    name: '',
                    type: 'pie',
                    label: {
                        show: true,
                        position: 'center',
                        color: '#fff',
                        formatter: '{b}\r\n\r\n{c}',
                        fontSize: 14,
                        fontFamily: 'LED'
                    },
                    itemStyle: {
                        color: 'transparent'
                    },
                    radius: ['0%', '55%'],
                    data: [
                        {
                            name: '备案车辆',
                            value: (function () {
                                var sum = 0;
                                for (var i = 0; i < json.length; i++) {
                                    sum += json[i].value;
                                }
                                return sum;
                            })()
                        }
                    ]
                }
            ]
        });
        $(window).resize(function (evt) {
            chart.resize();
        });
    });
//    页面右侧，下面一栏，左边的图
    $.get('../data/data/right-bottom-left.json', function (json) {
        var total = 300;
        var colorRegionRate = (json.value / total).toFixed(2);
        var chart = echarts.init(document.getElementById('right-bottom-left'), 'customed');
        chart.setOption({
            tooltip: {
                formatter: '{a} <br/>{b} : {c}'
            },
            series: [
                {
                    name: '车辆归属地',
                    type: 'gauge',
                    splitNumber: 0, //刻度数量
                    startAngle: 225,
                    endAngle: -45,
                    title: {
                        color: '#fff',
                        offsetCenter: [0, '100%'],
                        width: 60,
                        height: 30,
                        lineHeight: 30,
                        borderRadius: 25,
                        padding: [0, 30, 0, 30],
                        backgroundColor: 'rgb(11,69,105)'
                    },
                    max: total,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 20,
                            color: [
                                // 有数值的部分
                                [
                                    colorRegionRate,
                                    'rgb(1,247,255)'
                                    // , new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    //     offset: 0,
                                    //     color: '#1E85E6' // 0% 处的颜色
                                    // },
                                    //     {
                                    //         offset: 1,
                                    //         color: '#38F0C8' // 100% 处的颜色
                                    //     }
                                    // ])
                                ],
                                // 底色
                                [
                                    1, 'rgb(11,69,105)'
                                ]
                            ],
                        },
                        radius: 8,
                    },
                    //分隔线样式。
                    splitLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    pointer: {
                        show: false,
                    },
                    detail: {
                        show: true,
                        offsetCenter: [0, '0%'],
                        color: 'rgb(1,247,255)',
                        formatter: '{value}',
                        fontSize: 20,
                        fontFamily: 'LED',
                        backgroundColor: 'rgb(11,69,105)',
                        borderRadius: 100,
                        // width: 100,
                        // height: 50,
                        // lineHeight: 100,
                        padding: [40, 30, 40, 30]
                    },
                    data: [{value: json.value, name: '川A车辆'}]
                }
            ]
        });
        $(window).resize(function (evt) {
            chart.resize();
        });
    });
//    页面右侧，下面一栏，右边的图
    $.get('../data/data/right-bottom-left.json', function (json) {
        var total = 200;
        var colorRegionRate = (json.value / total).toFixed(2);
        var chart = echarts.init(document.getElementById('right-bottom-right'), 'customed');
        chart.setOption({
            tooltip: {
                formatter: '{a} <br/>{b} : {c}'
            },
            series: [
                {
                    name: '车辆归属地',
                    type: 'gauge',
                    splitNumber: 0, //刻度数量
                    startAngle: 225,
                    endAngle: -45,
                    title: {
                        color: '#fff',
                        offsetCenter: [0, '100%'],
                        width: 60,
                        height: 30,
                        lineHeight: 30,
                        borderRadius: 25,
                        padding: [0, 30, 0, 30],
                        backgroundColor: 'rgb(11,69,105)'
                    },
                    max: total,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 20,
                            color: [
                                // 有数值的部分
                                [
                                    colorRegionRate,
                                    'rgb(39,147,246)'
                                    // , new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    //     offset: 0,
                                    //     color: '#1E85E6' // 0% 处的颜色
                                    // },
                                    //     {
                                    //         offset: 1,
                                    //         color: '#38F0C8' // 100% 处的颜色
                                    //     }
                                    // ])
                                ],
                                // 底色
                                [
                                    1, 'rgb(11,69,105)'
                                ]
                            ],
                        },
                        radius: 8,
                    },
                    //分隔线样式。
                    splitLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    pointer: {
                        show: false,
                    },
                    detail: {
                        show: true,
                        offsetCenter: [0, '0%'],
                        color: 'rgb(39,147,246)',
                        formatter: '{value}',
                        fontSize: 20,
                        fontFamily: 'LED',
                        backgroundColor: 'rgb(11,69,105)',
                        borderRadius: 100,
                        // width: 100,
                        // height: 50,
                        // lineHeight: 100,
                        padding: [40, 30, 40, 30]
                    },
                    data: [{value: json.value, name: '其他车辆'}]
                }
            ]
        });
        $(window).resize(function (evt) {
            chart.resize();
        });
    });
});