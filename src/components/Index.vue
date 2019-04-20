<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">OKAY</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">教师空间</a></li>
          <li><a href="#">学生pad</a></li>
          <li><a href="#">教师pad</a></li>
          <li><a href="#">商城</a></li>
        </ul>
        <form class="navbar-form navbar-left">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">登录</a></li>
          <li><a href="#"></a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
    <div style="margin-top: 50px">
      <table class="table table-bordered">
        <thead>
        <tr>
          <th>创建人</th>
          <th>模块名称</th>
          <th>创建时间</th>
          <th>更新时间</th>
          <th>模块描述</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>

        <tr v-for="item in datas">
          <td>{{item.user.username}}</td>
          <td>{{item.module_name}}</td>
          <td>{{item.create_time}}</td>
          <td>{{item.update_time}}</td>
          <td>{{item.module_desc}}</td>
          <td>
            <a href="#">编辑</a>
            <a href="#">删除</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </nav>

</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        datas: []
      }
    },
    beforeCreate: async function () {
      this.datas = await new Promise((resolve, reject) => {
        $.ajax({
          type: "GET",
          url: "http://127.0.0.1:8000/api/module/zhangwen",
          success: function (response) {
            resolve(response.data);
          }
        });
      })
    },
    methods: {}
  }
</script>

<style scoped>

</style>
