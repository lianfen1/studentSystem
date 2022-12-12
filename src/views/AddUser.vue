<template>
     <table class="table table-bordered">
    <tr>
        <th scope="col-12">
            <div class="form-group row">
              <label for="inputPassword" class="col-2 col-form-label">姓名：</label>
              <div class="col-9">
                <input type="text" class="form-control" id="inputPassword" @keyup="this.$store.commit('upd_stu_name',$event.target.value)" v-model="this.$store.state.stu_name">
              </div>
            </div>
          </th>
    </tr>
    <tr>
      <th scope="col"><div class="form-group row">
              <label for="id" class="col-2 col-form-label">学号：</label>
              <div class="col-9">
                <input type="text" class="form-control" id="id" @keyup="this.$store.commit('upd_stu_number',$event.target.value)" v-model="this.$store.state.stu_number">
              </div>
            </div>
          </th>
    </tr>
    <tr>
      <th scope="col"><div class="form-group row">
              <label for="spacialty" class="col-2 col-form-label">专业：</label>
              <div class="col-9">
                <input type="text" class="form-control" id="spacialty" @keyup="this.$store.commit('upd_stu_major',$event.target.value)" v-model="this.$store.state.stu_major">
              </div>
            </div>
          </th>
    </tr>
    <tr>
      <th scope="col"><div class="form-group row">
              <label for="address" class="col-2 col-form-label">地址：</label>
              <div class="col-9">
                <input type="text" class="form-control" id="address" @keyup="this.$store.commit('upd_stu_address',$event.target.value)"  v-model="this.$store.state.stu_address">
              </div>
            </div>
          </th>
    </tr>
    <tr v-if="$store.state.flag">
      <th >
           <router-link to="/home/users"><button class="btn btn-primary form-control" @click="this.$store.dispatch('mysqladd')">提交</button></router-link>
      </th>
    </tr>
    <tr v-else>
      <th >
        <router-link to="/home/users"><button class="btn btn-primary form-control" @click="$store.dispatch('mysqludp',$store.state.stu_number)">更新</button></router-link>

      </th>
    </tr>
   </table>
</template>

<script>
export default {

}
</script>

<style>

</style>