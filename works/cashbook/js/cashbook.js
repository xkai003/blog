//表格
//随便取一个名字 defaultArr 来包裹着数据
const defaultArr = [
    { id: 1, subject: '语文', score: 20 },
    { id: 2, subject: '数学', score: 99 },
    { id: 3, subject: '英语', score: 70 },
];

const app = new Vue({
    el: '#app',
    data: {
        //将数据持久化到页面中  
        //这里的 list 是数组的名称，必须跟页面中的v-for中遍历的数组一致。defaultArr 是数组名
        list: JSON.parse(localStorage.getItem('list')) || defaultArr,
        subject: '',
        score: '',
        myChart: null, // 保存 ECharts 实例
    },
    methods: {
        //删除动作
        del(id) {
            this.list = this.list.filter(item => item.id !== id);// 删除指定 id 的项
        },
        //添加动作
        add() {
            // 如果科目为空，弹出提示框
            if (this.subject == '') {
                alert("请输入的科目！");
                return;
            }
            // 如果分数为空，弹出提示框
            if (this.score == '') {
                alert("请输入的分数！");
                return;
            }
            if(typeof this.score !== 'number'){
                alert('成绩必须为数字')
                return
            }
            // 将新的成绩项添加到 list 中
            this.list.unshift({
                id: +new Date(),
                subject: this.subject,
                score: Number(this.score),
            });
            // 添加后清空输入框
            this.subject = '';
            this.score = '';
        },
        //updateChart() 方法的主要作用是 动态更新饼图的数据，确保每次数据发生变化时，ECharts 饼图能正确显示最新的分数和科目分布。
        updateChart() {
            //this.myChart 是在 Vue mounted() 生命周期中初始化的 ECharts 实例。如果图表实例不存在（可能因为初始化失败或尚未完成），updateChart() 不会执行后续逻辑，从而避免错误。
            if (this.myChart) {
                //setOption 方法：是 ECharts 的核心方法，用于更新或重新设置图表的配置。
                this.myChart.setOption({
                    //series 部分：定义图表中数据源的具体配置，这里是饼图的数据。
                    series: [
                        {
                            //遍历 this.list，将表格中的每一行数据（包括 score 和 subject）转换为饼图需要的格式：
                            //value：用于表示饼图的比例（成绩）。
                            //name：对应饼图的分块名称（科目）。
                            data: this.list.map(item => ({
                                value: item.score,
                                name: item.subject,
                            })),
                        },
                    ],
                });
            }
        },
    },
    //调用computed计算属性
    computed: {
        // 计算总分
        totalScore() {
            return this.list.reduce((sum, item) => sum + item.score, 0);
        },
        // 计算平均分
        averageScore() {
            return this.list.length > 0 ? (this.totalScore / this.list.length).toFixed(2) : 0;
        },
    },
    //调用watch侦听器分解说明
    // watch
    //     watch 是 Vue 提供的一个选项，用来监听 Vue 实例中的数据变化。它可以指定一个数据属性，并在该属性发生变化时执行某些逻辑。
    // list: { ... }
    //     监听的数据属性是 list。当 list 的值或其内部任何子属性发生变化时，会触发 handler。
    // deep: true
    //     默认情况下，watch 只监听数据的浅层变化（即直接的值变化）。如果要监听对象或数组内部的子属性或元素变化，就需要将 deep 设置为 true。
    //     例如，如果 list 是一个数组，深度监听可以捕获到数组内部元素的增删改。
    // handler(newValue)
    //     handler 是监听器的回调函数，在数据变化时会被调用。它的参数 newValue 是变化后的数据。
    //     在这个例子中，每次 list 的内容发生改变时，都会执行 localStorage.setItem('list', JSON.stringify(newValue))，将 list 转换为 JSON 字符串后保存到浏览器的本地存储。
    watch: {
        list: {
            deep: true,
            handler(newValue) {
                //需要将变化后的 newvalue 存入本地（转JSON）
                localStorage.setItem('list', JSON.stringify(newValue));
                // 数据变化时更新图表
                this.updateChart();
            },
        },
    },
    //饼图
    mounted() {
        this.myChart = echarts.init(document.querySelector('#main'));
        this.myChart.setOption({
            title: {
                text: '成绩分布',//饼图标题
                left: 'center',//标题居中
            },
            //鼠标悬停时的提示框
            tooltip: {
                trigger: 'item',
            },
            //左上角图例
            legend: {
                orient: 'vertical',
                left: 'left',
            },
            //数据
            series: [
                {
                    name: '成绩来源',//鼠标悬停时的提示框标题
                    type: 'pie',//饼图
                    radius: '50%',//圆的半径
                        //饼图数据 （value: item.score 表示表格中的成绩数据；name: item.subject 表示表格中的科目名称）
                    data: this.list.map(item => ({
                        value: item.score,
                        name: item.subject,
                    })),
                    //阴影效果
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        },
                    },
                },
            ],
            //数据 end
        });
    },
    //饼图 end
});