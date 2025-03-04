<template>
  <div class="am4core-component main-container">
    <!-- <h2>am4core</h2> -->
    <div class="am4core-container" ref="am4coreContainer"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { ElMessage } from "element-plus";
import { calculateHumanValue } from "@/service/api";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

const am4coreContainer = ref(null);
onMounted(async () => {
  if (am4coreContainer.value) {
    //     am4core.useTheme(am4themes_animated);
    // am4core.useTheme(am4themes_dark);

    var chart = am4core.create(am4coreContainer.value, am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panXY"; // 启用拖拽功能

    // 添加鼠标滚轮缩放
    chart.mouseWheelBehavior = "zoomXY";
    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarY = new am4core.Scrollbar();

    var valueAxisX = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxisX.title.text = "x title";
    // valueAxisX.min = 0;
    // valueAxisX.max = 100;
    // valueAxisX.strictMinMax = true;
    var valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxisY.title.text = "y title";
    // valueAxisY.min = 0;
    // valueAxisY.max = 100;
    // valueAxisY.strictMinMax = true;

    // Create series
    var series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueX = "x";
    series1.dataFields.valueY = "y";
    series1.dataFields.value = "value";
    series1.strokeOpacity = 0;
    series1.sequencedInterpolation = true;

    // Add a bullet
    var bullet = series1.bullets.push(new am4core.Circle());
    bullet.propertyFields.fill = "color";
    bullet.strokeOpacity = 0;
    bullet.radius = 6;
    bullet.strokeWidth = 2;
    bullet.fillOpacity = 0.7;
    bullet.stroke = am4core.color("red");
    bullet.tooltipText =
      "[bold]{title}:[/]\nvalue: {value.value}\nX: {valueX.value}\nY:{valueY.value}";

    // Add a label
    var labelBullet1 = series1.bullets.push(new am4charts.LabelBullet());
    labelBullet1.label.text = "{title}";
    labelBullet1.label.horizontalCenter = "middle";
    labelBullet1.label.verticalCenter = "middle";
    labelBullet1.dy = -16; // 调整文字位置
    // 设置文字样式
    labelBullet1.label.fill = am4core.color("#000000"); // 文字颜色
    labelBullet1.label.fontSize = 14; // 文字大小
    // labelBullet1.label.fontWeight = "bold"; // 文字粗细
    labelBullet1.label.fontFamily = "Microsoft YaHei"; // 字体

    var hoverState = bullet.states.create("hover");
    hoverState.properties.fillOpacity = 1;
    hoverState.properties.strokeOpacity = 1;

    series1.heatRules.push({
      target: bullet,
      property: "fill",
      min: am4core.color("rgb(253, 253, 253)"),
      max: am4core.color("rgb(0, 0, 200)"),
      dataField: "value",
    });

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueX = "x";
    series2.dataFields.valueY = "y";
    series2.dataFields.value = "value";
    series2.strokeOpacity = 0;
    series2.sequencedInterpolation = true;

    let bullet2 = series2.bullets.push(new am4charts.Bullet());
    bullet2.tooltipText =
      "[bold]{title}:[/]\nvalue: {value.value}\nX: {valueX.value}\nY:{valueY.value}";

    let rectangle2 = bullet2.createChild(am4core.Rectangle);
    rectangle2.verticalCenter = "middle";
    rectangle2.horizontalCenter = "middle";
    rectangle2.width = 14;
    rectangle2.height = 14;
    rectangle2.rotation = 45;
    rectangle2.stroke = am4core.color("#fff");
    rectangle2.strokeWidth = 1;
    rectangle2.nonScalingStroke = true;
    series2.heatRules.push({
      target: rectangle2,
      property: "fill",
      min: am4core.color("rgb(253, 253, 253)"),
      max: am4core.color("rgb(0, 0, 200)"),
      dataField: "value",
    });
    // 设置 tooltip 背景颜色与 bullet 颜色一致
bullet2.adapter.add("tooltipText", function(text, target) {
  if (target.dataItem && target.dataItem.dataContext) {
    let value = target.dataItem.dataContext.value;
    let minColor = am4core.color("rgb(253, 253, 253)");
    let maxColor = am4core.color("rgb(0, 0, 200)");
    let color = am4core.colors.interpolate(minColor, maxColor, value / 100);
    console.log(color,target.dataItem.dataContext,target.dataItem.dataContext.value)
    target.tooltip.background.fill = color;
  }
  return text;
});

    // Add a label
    var labelBullet2 = series2.bullets.push(new am4charts.LabelBullet());
    labelBullet2.label.text = "{title}";
    labelBullet2.label.horizontalCenter = "middle";
    labelBullet2.label.verticalCenter = "middle";
    labelBullet2.dy = -16; // 调整文字位置
    // 设置文字样式
    labelBullet2.label.fill = am4core.color("#000000"); // 文字颜色
    labelBullet2.label.fontSize = 14; // 文字大小
    // labelBullet2.label.fontWeight = "bold"; // 文字粗细
    labelBullet2.label.fontFamily = "Microsoft YaHei"; // 字体

    // chart.data = [
    //   {
    //     title: "Angola",
    //     id: "AO",
    //     continent: "africa",
    //     x: 4,
    //     y: 10,
    //     value: 80,
    //     type: "me",
    //   },
    //   { title: "1", x: 10, y: 14, value: 65 },
    //   { title: "1", x: 11, y: 14, value: 65 },
    //   { title: "2", x: 5, y: 3, value: 78 },
    //   { title: "3", x: 7, y: 10, value: 45 },
    //   { title: "4", x: 3, y: 8, value: 90 },
    //   { title: "5", x: 15, y: 5, value: 60 },
    //   { title: "6", x: 11, y: 5, value: 60 },
    //   { title: "7", x: 40, y: 40, value: 10 },
    // ];

    const result = await calculateHumanValue();
    console.log(result.data);
    const res = result.data;
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < res.tsne_cultures.length; i++) {
      let cultureItem = {
        title: res.tsne_culture_caption[i],
        x: res.tsne_cultures[i][0],
        y: res.tsne_cultures[i][1],
        value: res.tsne_cultures[i][2],
        type: "culture",
      };
      arr2.push(cultureItem);
    }

    for (let i = 0; i < res.tsne_models.length; i++) {
      let modelItem = {
        title: res.tsne_model_caption[i],
        x: res.tsne_models[i][0],
        y: res.tsne_models[i][1],
        value: res.tsne_models[i][2],
        type: "model",
      };
      arr1.push(modelItem);
    }

    series1.data = arr1;
    series2.data = arr2;
    // chart.data = arr;
  } else {
    ElMessage.error("无法找到图表容器");
  }
});
</script>

<style scoped lang="scss">
.am4core-container {
  width: 100%;
  height: 800px;
}
</style>