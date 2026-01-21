const app = new Vue({
    el: '#app',
    data: {
        // 清空输入框内容
        todoName: '', 
        // 添加一个数组来存储数据
        list: JSON.parse(localStorage.getItem("taskList")) || [
            { id: 1, name: '跑步100米' }
        ]
    },
    methods: {
        del(id) {
            // 删除事件弹窗
            if (!confirm('是否要删除数据?')) {
                return;
            }
            // 删除动作
            this.list = this.list.filter(item => item.id !== id);
            // 更新 localStorage
            localStorage.setItem("taskList", JSON.stringify(this.list));
        },
        add() {
            if (this.todoName.trim() === '') {
                alert('请输入任务名称');
                return;
            }
            // 添加列表动作
            const newTask = {
                id: +new Date(),
                name: this.todoName
            };
            this.list.unshift(newTask);
            // 清空输入框
            this.todoName = '';
            // 数据存储
            localStorage.setItem("taskList", JSON.stringify(this.list));
        },
        clear() {
            if (!confirm('确定要清空所有数据吗？')) {
                return;
            }
            // 清空数组
            this.list = [];
            // 清空 localStorage
            localStorage.setItem("taskList", JSON.stringify(this.list));
        }
    }
});