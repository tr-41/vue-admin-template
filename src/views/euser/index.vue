<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column label="人员编号" width="110">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="身份证号" width="312" align="center">
        <template slot-scope="scope">
          {{ scope.row.idnumber }}
        </template>
      </el-table-column>
      <el-table-column label="参保地" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.address }}
        </template>
      </el-table-column>
      <el-table-column label="保费账户" width="312" align="center">
        <template slot-scope="scope">
          {{ scope.row.account }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="是否残疾" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.disability | statusFilter">{{ scope.row.disability }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="是否计生困难人员" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.familyplanning | statusFilter">{{ scope.row.familyplanning }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="是否贫困人员" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.poverty | statusFilter">{{ scope.row.poverty }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/euser'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        no: 'success',
        yes: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data
        this.listLoading = false
      })
    }
  }
}
</script>
