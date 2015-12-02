/**
 * 
 * @authors Ms.cat
 * @date    2015-12-01 22:46:06
 * 
 */

/**
 * 知识点1：
 * moveTo(x, y)  把画布的左上角移动到指定的一个坐标(x, y)
 *
 * 知识点2：
 * lineTo(x, y)  添加一个新点，然后创建从该点到画布中最后指定点的线条（该方法并不会创建线条）。
 *
 * 知识点3：
 * stroke()   绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色。
 *
 * 知识点4：
 * strokeStyle   设置或返回用于笔触的颜色、渐变或模式。
 *
 * 知识点5：
 * fill()   填充当前的图像（路径）。默认颜色是黑色。此时不管是否调用了closePath()，都会自动闭合路径。
 *
 * 知识点6：
 * fillStyle   设置或返回用于填充绘画的颜色、渐变或模式。
 *
 * 知识点7：
 * beginPath()   重新规划路径。会丢弃任何当前定义的路径并且开始一条新的路径。它把当前的点设置为 (0,0)。
 *
 * 知识点8：
 * closePath()   结束当前路径。如果当前路径不是封闭路径，会自动闭合路径。
 * 							 使用 stroke() 方法在画布上绘制确切的路径。
 * 							 使用 fill() 方法来填充图像（默认是黑色）。
 *
 * 注意：beginPath()和closePath()不一定要成对出现。
 */

/**
 * 定义七巧板七个板块的顶点跟颜色值
 */
var tangram = [
  {point: [{x: 0, y: 0}, {x: 800, y: 0}, {x: 400, y: 400}], color: '#caff67'},
  {point: [{x: 0, y: 0}, {x: 400, y: 400}, {x: 0, y: 800}], color: '#67becf'},
  {point: [{x: 800, y: 0}, {x: 800, y: 400}, {x: 600, y: 600}, {x: 600, y: 200}], color: '#ef3d6'},
  {point: [{x: 600, y: 200}, {x: 600, y: 600}, {x: 400, y: 400}], color: '#f9f51a'},
  {point: [{x:400, y: 400}, {x: 600, y: 600}, {x: 400, y: 800}, {x: 200, y: 600}], color: '#a594c0'},
  {point: [{x: 200, y: 600}, {x: 400, y: 800}, {x: 0, y: 800}], color: '#fa8ecc'},
  {point: [{x: 800, y: 400}, {x: 800, y: 800}, {x: 400, y: 800}], color: '#f6ca29'},
];


window.onload = function () {
	var canvas,
			context;

	canvas = document.getElementById('canvas');

	canvas.height = 800;
	canvas.width = 800;

	context = canvas.getContext('2d');

	//循环七个板块
	for(var i = 0; i < tangram.length; i++){
		drawTangram(tangram[i], context);
	}

}

/**
 * 绘制七巧板对应板块
 * @param  {[object]} lump ，七巧板其中一个板块的相关数据
 * @param  {[object]} ctx  ，画布上下文对象
 */
function drawTangram (lump, ctx) {
	ctx.beginPath();

	ctx.moveTo(lump.point[0].x, lump.point[0].y);

	//循环每个板块中的每个点
	for(var i = 1; i < lump.point.length; i++){
		ctx.lineTo(lump.point[i].x, lump.point[i].y);
	}

	ctx.closePath();

	ctx.fillStyle = lump.color;
	ctx.fill();

	ctx.strokeStyle = '#000';
	ctx.stroke();

}