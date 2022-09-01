<template>
  <div>
    <el-card>
      <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
        :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed"
        :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-card>


    <el-card>
      <div v-for="(file, index) in files">
        <el-row style="margin-top:3px;">
          <el-col :offset="3" :span="3">
            {{ file.id }}
          </el-col>
          <el-col :span="4">
            {{ file.name }}
          </el-col>
          <el-col :span="2">
            {{ file.size }}B
          </el-col>
          <el-col :span="3">
            <el-button type="danger" icon="el-icon-delete" circle size="mini" @click="del(file.id)"></el-button>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>

</template>

<script>
import { getFiles, deleteFile } from '../api/minio'
export default {
  name: 'Minio',
  data() {
    return {
      files: [{
        id: '',
        name: '',
        size: 0
      }],
      fileList: []
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      getFiles({}).then(data => {
        this.files = data;
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    del(id) {
      deleteFile(id).then(() => {
        this.$message.success("delete success.");
        this.init();
      })
    }
  }


}
</script>