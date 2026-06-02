// js/common.js
export default {
  methods: {
    // 读取 data.json 数据（公共方法）
    async loadData() {
      try {
        // 路径：如果 notes.html 在根目录，就用 './database/data.json'；如果在子目录，要改成 '../data.json'
        const res = await fetch('./database/data.json');
        const json = await res.json();
        // 把数据存到 Vue 实例里，页面里用 this.notes / this.works 等访问
        this.VueWeblist = json.VueWeblist || [];
        this.notes = json.notes || [];
        this.works = json.works || [];
        this.travel = json.travel || [];
        console.log("公共数据加载完成", json);
      } catch (err) {
        console.error('加载数据失败', err);
      }
    },

    // 上下页切换动作（公共分页方法）
    changeVuePage(page) {
      this.vueCurrentPage = page;
      // 最小只能翻到第一页
      if (this.vueCurrentPage < 1) {
        alert("已经是第一页了");
        return this.vueCurrentPage = 1;
      }
      // 最大只能翻到最后一页
      if (this.vueCurrentPage > this.vueTotalPages) {
        alert("已经是最后一页了");
        this.vueCurrentPage = this.vueTotalPages;
      }
    },

    // 控制搜索框的显示隐藏
    showinpbtn() {
      this.showinp = !this.showinp;
      // 搜索框自动聚焦
      this.$nextTick(() => {
        if (this.showinp) {
          this.$refs.inp?.focus();
          console.log("搜索框已自动聚焦");
        }
      })
    },

    // 清空输入框
    clearinput() {
      this.searchQuery = '';
    },

    // 热搜榜赋值
    hotsearchwords(word) {
      this.searchQuery = word;
    },

    // 通用分页数据过滤（按当前页切割数据）
    displayedList(list) {
      const start = (this.vueCurrentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredList(list).slice(start, end);
    },

    // 通用搜索过滤（根据 searchQuery 过滤列表）
    filteredList(list) {
      if (!this.searchQuery) return list;
      return list.filter(item => 
        item.title?.includes(this.searchQuery) || 
        item.name?.includes(this.searchQuery)
      );
    }
  },

  computed: {
    // 通用总页数计算
    vueTotalPages() {
      const list = this.getCurrentList();
      return Math.ceil(this.filteredList(list).length / this.itemsPerPage) || 1;
    }
  }
}