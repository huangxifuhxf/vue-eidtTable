<template>
  <el-table
    :data="tableData"
    border
    stripe
    class="table"
    >
    <el-table-column
      type="index"
      label="序号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="do"
      label="操作"
      width="180">
      <template slot-scope="scope">
          <el-button icon="el-icon-circle-plus-outline" size="mini" @click="addArr"></el-button>
          <el-button icon="el-icon-close"  size="mini" @click="delArr(scope.$index)"></el-button>
      </template>
    </el-table-column>
    <el-table-column
      prop="number"
      label="编号"
      >
      <template slot-scope="scope">
       <div @click="showInput(scope.row , 2)">
          <el-input v-model="scope.row.number" v-if='scope.row.numberIsShow' @blur='saveData(scope.row)'></el-input>
          <div v-text='scope.row.number' v-if='!scope.row.numberIsShow' style="height: 41px; line-height:41px;"></div>
       </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="品名">
      <template slot-scope="scope">
       <div @click="showInput(scope.row , 3)">
          <el-input v-model="scope.row.name" v-if='scope.row.nameIsShow' @blur='saveData(scope.row)'></el-input>
          <div v-text='scope.row.name' v-if='!scope.row.nameIsShow' style="height: 41px; line-height:41px;"></div>
       </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="color"
      label="颜色">
     <template slot-scope="scope">
       <div @click="showInput(scope.row , 4)">
          <el-input v-model="scope.row.color" v-if='scope.row.colorIsShow' @blur='saveData(scope.row)'></el-input>
          <div v-text='scope.row.color' v-if='!scope.row.colorIsShow' style="height: 41px; line-height:41px;"></div>
       </div>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  data () {
    return {
      // 每行表格的数据
      tableData: [
        {
          number: '编号1',
          name: 'DFEIFEL',
          color: '红色',
          numberIsShow: false,
          nameIsShow: false,
          colorIsShow: false
        },
        {
          number: '',
          name: '',
          color: '',
          numberIsShow: false,
          nameIsShow: false,
          colorIsShow: false
        },
        {
          number: '',
          name: '',
          color: '',
          numberIsShow: false,
          nameIsShow: false,
          colorIsShow: false
        },
        {
          number: '',
          name: '',
          color: '',
          numberIsShow: false,
          nameIsShow: false,
          colorIsShow: false
        }
      ]
    }
  },
  methods: {
    showInput (row, num) {
      switch (num) {
        case 2:
          row.numberIsShow = true
          this.number = row.number
          break
        case 3:
          row.nameIsShow = true
          this.name = row.name
          break
        case 4:
          row.colorIsShow = true
          this.color = row.color
          break
        default:
          break
      }
    },
    // 把input框消失
    saveData (row) {
      row.numberIsShow = false
      row.nameIsShow = false
      row.colorIsShow = false
    },
    // 添加一row
    addArr () {
      this.tableData.push({
        number: '',
        name: '',
        color: '',
        numberIsShow: false,
        nameIsShow: false,
        colorIsShow: false
      })
    },
    // 删除一row
    delArr (index) {
      this.tableData.splice(index, 1)
    }
  }
}
</script>
<style lang="scss" >
.table {
  max-width: 1000px;
  margin: 0 auto;
}
.check {
  width: 100%;
  height: 100%;
}
th {
  text-align: center !important;
}
td {
  height: 40px;
  padding: 0 !important;
  text-align: center;
}
.cell {
  padding: 0 !important;
}
.el-input {
  width: 100% !important;
  height: 100% !important;
}
input {
  text-align: center !important;
  padding: 0 !important;
  height: 30px !important;
  width: 100% !important;
}
</style>
