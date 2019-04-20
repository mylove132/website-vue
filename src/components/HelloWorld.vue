<template>
  <div class="col-md-2 side-nav">
    <div class="panel-group" id="accordion">
      <div class="panel-heading panel">
        <a href="index.html" class="side-nav-item item-title">
          首页
        </a>
        <div class="item-body collapse" id='index'>
        </div>
      </div>

      <div class="panel-heading panel">
        <a data-toggle="collapse" data-parent="#accordion" href="#item-cangku" id="headcangku" class="side-nav-item item-title">
          仓库管理
        </a>
        <div id="item-cangku" class="panel-collapse collapse">
          <div class="item-body">
            <ul class="list-unstyled">
              <li class="item-second" id='a'><a href="a.html">产品库存</a></li>
              <li class="item-second" id='b'><a href="b.html">原料库存</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="panel-heading panel">
        <a data-toggle="collapse" data-parent="#accordion" href="#item-caiwu" id="headcaiwu" class="side-nav-item item-title collapsed">
          财务管理
        </a>
        <div id="item-caiwu" class="panel-collapse collapse">
          <div class="item-body">
            222
          </div>
        </div>
      </div>

      <div class="panel-heading panel">
        <a data-toggle="collapse" data-parent="#accordion" href="#item-renshi" id="headrenshi" class="side-nav-item item-title collapsed">
          人事管理
        </a>
        <div id="item-renshi" class="panel-collapse collapse">
          <div class="item-body">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .side-nav-item {
    display: block;
    padding: 10px 15px 10px 15px;
    background-color: #FFFFFF;
    cursor: pointer;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
  }

  .item-title {
    background-color: #F5F5F5;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom: 1px solid #DDDDDD;
  }

  .panel-heading {
    margin-top: 5px;
    padding: 0;
    border-radius: 3px;
    border: 1px solid transparent;
    border-color: #DDDDDD;
  }

  .item-body {
    padding: 10px 15px 5px 15px;
    border-bottom: 1px solid #DDDDDD;
  }

  .item-second {
    margin-top: 5px;
    cursor: pointer;
  }

  .item-second a {
    display: block;
    height: 100%;
    width: 100%;
  }
  .at{ color:red;}
</style>
