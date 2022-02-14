<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.id" placeholder="参保人员编号" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        Search
      </el-button>
    </div>

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
import waves from '@/directive/waves'
import { fetchList } from '@/api/article'

export default {
  directives: { waves },
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
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        // page: 1,
        // limit: 20,
        id: undefined
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    }
  }
}
</script>
