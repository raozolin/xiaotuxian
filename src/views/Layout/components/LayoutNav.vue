<script setup>
// 拿取token,在pinia里面拿取
import {useUserStore} from "@/stores/user.js"
import { useRouter } from "vue-router";
const userStore=useUserStore()
const router=useRouter()
// 用户点击退出登录按钮后的回调函数
const confirm=()=>{
  // 退出登录用户的业务逻辑实现
  // 1.清除当前用户信息 触发action函数
  userStore.clearUserInfo()
  // 2.跳转到登录页面
  router.push('/login')


}

</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <!-- v-if,v-else多模板渲染，用来区分登录状态和非登录状态 -->
        <!-- 登录时显示第一块，非登录时显示第二块 -->
        <!-- 如何判断是否有登录？是否有token -->
        <template v-if="userStore.userInfo.token">
          <li>
          <li><a href="javascript:;"><i class="iconfont icon-user"></i>{{ userStore.userInfo.account }}</a></li>
          </li>
          <li>
            <!-- @confrirm="" 当点击确认按钮的时候，自动执行的事件，组间自带的 -->
            <el-popconfirm
            
             @confirm="confirm"
              title="确认退出吗?"
              confirm-button-text="确认"
              cancel-button-text="取消"
            >
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript:;">我的订单</a></li>
          <li><a href="javascript:;">会员中心</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;" @click="$router.push('/login')">请先登录</a></li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 14px;
          margin-right: 2px;
        }

        &:hover {
          color: $xtxColor;
        }
      }

      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
