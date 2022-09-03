<template>
  <div>
    <el-card>
      <el-upload class="upload-demo" action="" :auto-upload="true" :on-preview="handlePreview" :on-remove="handleRemove"
        :http-request="upload" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed"
        :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-card>


    <el-card style="height:500px;margin-top: 10px;">
      <el-table :data="files" style="width:50%" stripe border>
        <el-table-column prop="id" label="ID" width="260">
        </el-table-column>
        <el-table-column prop="name" label="文件名">
        </el-table-column>
        <el-table-column prop="size" label="大小">
          <template slot="header" slot-scope="scope">{{ scope.size }}B</template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="success" @click="download(scope.row.name)">下载</el-button>
            <el-button size="mini" type="danger" @click="del(scope.row.name)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>

</template>

<script>
import { getFiles, deleteFile, uploadFile, downloadFile } from '../api/minio';
import axios from 'axios';
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
        this.$message.success("delete success");
        this.init();
      })
    },
    upload(data) {
      uploadFile(data.file).then(() => {
        this.$message.success("upload success");
        this.fileList = [];
        this.init();
      });
    },
    download(name) {
      downloadFile(name);
    }   
  }
}
</script>