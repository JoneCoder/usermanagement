<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="javascript:void(0)">
        <b>Admin</b>Panel
      </a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">New Registation</p>

      <slot v-if="!$root.spinner">
        <form v-on:submit.prevent="submit" method="post">
        <div
            class="form-group has-feedback"
            :class="{ 'has-error': validation.hasError('data.name'), 'has-success': data.name }"
          >
            <input type="text" v-model="data.name" class="form-control" placeholder="Name" />
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
            <span class="help-block">{{ validation.firstError('data.name') }}</span>
          </div>


          <div
            class="form-group has-feedback"
            :class="{ 'has-error': validation.hasError('data.username'), 'has-success': data.username }"
          >
            <input type="text" v-model="data.username" class="form-control" placeholder="Username" />
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
            <span class="help-block">{{ validation.firstError('data.username') }}</span>
          </div>

          <div
            class="form-group has-feedback"
            :class="{ 'has-error': validation.hasError('data.mobile'), 'has-success': data.mobile }"
          >
            <input type="text" v-model="data.mobile" class="form-control" placeholder="Mobile" />
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
            <span class="help-block">{{ validation.firstError('data.mobile') }}</span>
          </div>


          <div
            class="form-group has-feedback"
            :class="{ 'has-error': validation.hasError('data.address'), 'has-success': data.address }"
          >
            <textarea type="text" v-model="data.address" class="form-control" placeholder="Address"></textarea>
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
            <span class="help-block">{{ validation.firstError('data.address') }}</span>
          </div>
          
          <div
            class="form-group has-feedback"
            :class="{ 'has-error': validation.hasError('data.email'), 'has-success': data.email }"
          >
            <input type="email" v-model="data.email" class="form-control" placeholder="Email" />
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
            <span class="help-block">{{ validation.firstError('data.email') }}</span>
          </div>
          
          
          <div
            class="form-group has-feedback"
            :class="{ 'has-error': validation.hasError('data.password'), 'has-success': data.password }"
          >
            <input
              type="password"
              v-model="data.password"
              class="form-control"
              placeholder="Password"
            />
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            <span class="help-block">{{ validation.firstError('data.password') }}</span>
          </div>

          <div
            class="form-group has-feedback"
            :class="{ 'has-error': validation.hasError('data.re_password'), 'has-success': data.re_password }"
          >
            <input
              type="password"
              v-model="data.re_password"
              class="form-control"
              placeholder="Re type password"
            />
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            <span class="help-block">{{ validation.firstError('data.re_password') }}</span>
          </div>

          <div class="row flex justify-content-center">
            <!-- /.col -->
            <div class="col-xs-4 flex justify-content-center">
              <button type="submit" class="btn btn-primary btn-block btn-flat">Registation</button>
            </div>


            <div class="col-xs-4 ml-2 flex justify-content-center">
              <router-link to="/admin" class="btn btn-info btn-block"
            ><small>Sign in</small></router-link>
            </div>
            <!-- /.col -->
          </div>
        </form>
      </slot>
      <spinner v-if="$root.spinner" />
    </div>
    <!-- /.login-box-body -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        name: "",
        username: "",
        mobile: "",
        address: "",
        email: "",
        password: "",
        re_password: "",
      },
    };
  },
  methods: {
    submit() {
      const error = this.validation.countErrors();
      this.$validate().then((res) => {
        if (res) {
          this.$root.spinner = true;
          axios
            .post("/registation", this.data)
            .then((res) => {
              if (res.status == 200 && res.data.id) {
                Admin.login(res.data);
                this.notification(res.data.message, "success");
                window.location = this.$root.baseurl + "/admin/dashboard";
              } else {
                this.$root.spinner = false;
                this.notification(res.data.message, "error");
              }
            })
            .catch((error) => console.log(error));
        }
      });
    },
  },
  created() {
    $(".body").removeClass("hold-transition skin-blue sidebar-mini");
    $(".body").addClass("hold-transition login-page");
  },

  // ================== validation rule for form ==================
  validators: {
    "data.name": function (value = null) {
      return Validator.value(value).required("Name is required");
    },

    "data.username": function (value = null) {
      return Validator.value(value).required("Username is required");
    },

    "data.mobile": function (value = null) {
      return Validator.value(value).minLength(11).maxLength(11);
    },

    "data.email": function (value = null) {
      return Validator.value(value).required("Email is required");
    },
    "data.password": function (value = null) {
      return Validator.value(value)
        .required("Password is required")
        .minLength(6);
    },

    "data.re_password": function (value = null) {
      return Validator.value(value)
        .required("Re Password is required")
        .minLength(6)
        .custom(() => {
          if(this.data.password != value){
            return 'Password and re password dose not match!';
          }
        });
    },
  },
};
</script>
